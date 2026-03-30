import PageHeader from '../components/ui/PageHeader';
import SectionTitle from '../components/ui/SectionTitle';
import ChallengeCard from '../components/cards/ChallengeCard';
import { challenges } from '../data/challengesData';

export default function Desafios() {
  return (
    <>
      <PageHeader
        title="Desafíos"
        subtitle="Cinco desafíos prácticos desarrollados a lo largo de la cursada de Gestión Gerencial, integrando teoría, metodología y trabajo real en organizaciones."
        badge="D3 — D7"
        gradient="from-blue-400 to-cyan-500"
      />

      <div className="section pt-0">
        <div className="container-content">
          <SectionTitle
            title="Índice de Desafíos"
            subtitle="Hacé clic en cualquier desafío para ver el desarrollo completo, evidencias y reflexión del equipo."
            badge={`${challenges.length} desafíos`}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((challenge, i) => (
              <ChallengeCard key={challenge.id} challenge={challenge} index={i} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
