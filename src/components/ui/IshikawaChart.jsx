export default function IshikawaChart({ ishikawa }) {
  const { effect, branches = [], criticalM } = ishikawa;

  const colors = [
    { stroke: "#C084FC", badge: "#F3E8FF", badgeText: "#7E22CE" },
    { stroke: "#A78BFA", badge: "#EDE9FE", badgeText: "#5B21B6" },
    { stroke: "#FB923C", badge: "#FFF7ED", badgeText: "#9A3412" },
    { stroke: "#2DD4BF", badge: "#F0FDFA", badgeText: "#0F766E" },
    { stroke: "#60A5FA", badge: "#EFF6FF", badgeText: "#1D4ED8" },
    { stroke: "#FBBF24", badge: "#FFFBEB", badgeText: "#92400E" },
  ];

  const W = 1300;
  const H = 800;
  const spineY = H / 2;
  const headX = 1000;
  const tailX = 80;
  const OFFSET_X = 100;

  // 3 columnas — puntos donde la rama toca la espina
  const junctionXs = [300, 650, 980];
  const BRANCH_H = 300;

  function wrapText(text, maxChars) {
    const words = text.split(" ");
    const lines = [];
    let current = "";
    for (const word of words) {
      const candidate = current ? current + " " + word : word;
      if (candidate.length <= maxChars) {
        current = candidate;
      } else {
        if (current) lines.push(current);
        current = word;
      }
    }
    if (current) lines.push(current);
    return lines;
  }

  function Branch({ branch, index }) {
    const color = colors[index] ?? colors[0];
    const isTop = index < 3;
    const col = index % 3;
    const jX = junctionXs[col];
    const sign = isTop ? -1 : 1;

    const tipX = jX - 50;
    const tipY = spineY + sign * BRANCH_H;

    const isCritical = criticalM && branch.name === criticalM.name;
    const causes = branch.causes.slice(0, 5);

    // Badge
    const badgeLines = wrapText(branch.name, 18);
    const badgeLineH = 20;
    const badgePad = 7;
    const badgeW = 200;
    const badgeH = badgeLines.length * badgeLineH + badgePad * 2;
    const badgeX = tipX - badgeW / 2;
    const badgeY = isTop ? tipY - badgeH - 10 : tipY + 10;

    // Zona de causas: entre badge y espina
    const zoneTop = isTop ? badgeY + badgeH + 6 : spineY + 8;
    const zoneBot = isTop ? spineY - 8 : badgeY - 6;
    const zoneH = zoneBot - zoneTop;
    const slotH = zoneH / causes.length;

    // Texto de cada causa: a la izquierda de tipX
    const textRightX = tipX - 5;
    const lineH = 17;

    // Punto donde la rama toca la espina (para la línea L)
    // La línea va: desde la causa → horizontal hasta la rama → en diagonal hasta jX
    // Para evitar cruces: cada línea va horizontal hasta la rama diagonal y ahí termina

    // Calculamos el x de la rama en el y del texto
    // La rama va de (jX, spineY) a (tipX, tipY)
    // En un y dado: x = jX + (tipX - jX) * (y - spineY) / (tipY - spineY)
    function branchXatY(y) {
      return jX + (tipX - jX) * (y - spineY) / (tipY - spineY);
    }

    return (
      <g>
        {/* Línea de la rama */}
        <line
          x1={jX} y1={spineY}
          x2={tipX} y2={tipY}
          stroke={color.stroke}
          strokeWidth={isCritical ? "3" : "2"}
          strokeLinecap="round"
        />

        {/* Badge */}
        <rect
          x={badgeX} y={badgeY}
          width={badgeW} height={badgeH}
          rx={badgeH / 2}
          fill={isCritical ? "#7E22CE" : color.badge}
          stroke={color.stroke}
          strokeWidth="1.5"
        />
        {badgeLines.map((line, li) => (
          <text
            key={li}
            x={tipX}
            y={badgeY + badgePad + li * badgeLineH + badgeLineH * 0.75}
            textAnchor="middle"
            fontSize="20"
            fontWeight="700"
            fill={isCritical ? "#fff" : color.badgeText}
          >
            {line}{li === badgeLines.length - 1 && isCritical ? " ★" : ""}
          </text>
        ))}

        {/* Causas */}
        {causes.map((cause, ci) => {
          const slotCenter = zoneTop + ci * slotH + slotH / 2;
          const lines = wrapText(cause, 38);
          const blockH = lines.length * lineH;
          const textStartY = slotCenter - blockH / 2;
          const textMidY = slotCenter;

          // Punto en la rama diagonal al mismo Y que el texto
          const branchX = branchXatY(textMidY);

          return (
            <g key={ci}>
              {/* Línea horizontal del texto hasta la rama — sin cruzar nada */}
              <line
                x1={textRightX + 2} y1={textMidY}
                x2={branchX} y2={textMidY}
                stroke={color.stroke}
                strokeWidth="0.9"
                strokeDasharray="4 3"
                opacity="0.55"
              />
              {/* Puntito en la rama */}
              <circle cx={branchX} cy={textMidY} r="2" fill={color.stroke} opacity="0.5" />
              {/* Texto */}
              {lines.map((line, li) => (
                <text
                  key={li}
                  x={textRightX}
                  y={textStartY + li * lineH + lineH * 0.82}
                  textAnchor="end"
                  fontSize="15"
                  fill="#5C3317"
                >
                  {line}
                </text>
              ))}
            </g>
          );
        })}
      </g>
    );
  }

  const effectLines = wrapText(effect, 13);
  const effectLineH = 17;
  const effectPad = 12;
  const effectW = 148;
  const effectH = effectLines.length * effectLineH + effectPad * 2;

  return (
    <div className="rounded-md border border-primary-200 bg-white p-1 mt-1 overflow-x-auto">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto min-w-[700px]"
        style={{ fontFamily: "inherit" }}
      >
        <rect x="0" y="0" width={W} height={H} fill="#FDF6F0" rx="12" />
        <g transform={`translate(${OFFSET_X}, 0)`}>
        {/* Espina */}
        <line
          x1={tailX} y1={spineY}
          x2={headX} y2={spineY}
          stroke="#E07050"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Caja efecto */}
        <rect
          x={headX}
          y={spineY - effectH / 2}
          width={effectW}
          height={effectH}
          rx="10"
          fill="#FEE2E2"
          stroke="#FCA5A5"
          strokeWidth="2"
        />
        {effectLines.map((line, i) => (
          <text
            key={i}
            x={headX + effectW / 2}
            y={spineY - effectH / 2 + effectPad + i * effectLineH + effectLineH * 0.75}
            textAnchor="middle"
            fontSize="20"
            fontWeight="700"
            fill="#991B1B"
          >
            {line}
          </text>
        ))}

        {/* Ramas */}
        {branches.slice(0, 6).map((branch, i) => (
          <Branch key={branch.id} branch={branch} index={i} />
        ))}

        </g>
      </svg>

      <div className="flex flex-wrap gap-2 mt-3">
        {branches.slice(0, 6).map((branch, i) => {
          const color = colors[i] ?? colors[0];
          const isCritical = criticalM && branch.name === criticalM.name;
          return (
            <span
              key={branch.id}
              className="text-xs font-semibold px-3 py-1 rounded-full"
              style={{
                background: isCritical ? "#7E22CE" : color.badge,
                color: isCritical ? "#fff" : color.badgeText,
                border: `1.5px solid ${color.stroke}`,
              }}
            >
              {branch.name}{isCritical ? " ★" : ""}
            </span>
          );
        })}
      </div>
    </div>
  );
}