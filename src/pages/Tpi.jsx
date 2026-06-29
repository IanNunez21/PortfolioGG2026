import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, ExternalLink, Image as ImageIcon, ZoomIn, ZoomOut, RotateCcw, Maximize2, X } from 'lucide-react';

export default function Tpi() {
  const [imgError, setImgError] = useState(false);
  const [showLightbox, setShowLightbox] = useState(false);
  const [zoomScale, setZoomScale] = useState(1);

  // Close lightbox on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setShowLightbox(false);
        setZoomScale(1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleZoomIn = () => {
    setZoomScale((prev) => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoomScale((prev) => Math.max(prev - 0.25, 1));
  };

  const handleResetZoom = () => {
    setZoomScale(1);
  };

  return (
    <div className="min-h-[calc(100dvh-5rem)] pt-6 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Decorators */}
      <div className="absolute inset-0 dot-bg opacity-40 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] bg-warm/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 w-full space-y-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-primary-800 leading-tight tracking-tight drop-shadow-sm">
            <span className="text-gradient">TPI</span>
          </h1>
          
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-12 h-1 bg-accent/30 rounded-full"></div>
            <div className="w-3 h-3 rounded-full bg-gradient-to-tr from-accent to-warm animate-pulse"></div>
            <div className="w-12 h-1 bg-warm/30 rounded-full"></div>
          </div>

          <p className="text-lg md:text-xl text-primary-600 max-w-3xl leading-relaxed mx-auto font-medium">
            Infografía y documento del Trabajo Práctico Integrador.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Infografía */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-8 flex flex-col"
          >
            <div className="bg-white/80 backdrop-blur-sm border border-primary-200 rounded-3xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <span className="badge badge-blue text-xs font-bold">Infografía</span>
                <span className="text-xs text-primary-400 font-medium">S&M Servicios y Materiales</span>
              </div>

              {/* Infographic Image / Fallback Container */}
              <div className="flex-1 rounded-2xl overflow-hidden border border-primary-100 bg-primary-50 relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] flex items-center justify-center min-h-[300px]">
                {!imgError ? (
                  <div className="relative w-full h-full group/image flex items-center justify-center">
                    <img
                      src="/tpi-infografia.png"
                      alt="Infografía del Trabajo Práctico Integrador"
                      className="w-full h-full object-contain"
                      onError={() => setImgError(true)}
                    />
                    
                    {/* Fullscreen Trigger Button */}
                    <button
                      onClick={() => setShowLightbox(true)}
                      className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-citrus hover:bg-citrus-dark text-primary-950 flex items-center justify-center shadow-md hover:scale-105 transition-all duration-200 border border-primary-950/10 cursor-pointer z-10"
                      title="Ver en pantalla completa y hacer zoom"
                    >
                      <Maximize2 className="w-5 h-5" />
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-primary-50 to-primary-100/50 w-full h-full">
                    <div className="w-16 h-16 rounded-full bg-blush-100 flex items-center justify-center mb-4 text-accent border border-accent/10">
                      <ImageIcon className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-bold text-primary-850 mb-2">Infografía del TPI</h3>
                    <p className="text-primary-500 text-sm max-w-sm">
                      Visualización del diagnóstico y propuesta de mejora para S&M Servicios y Materiales.
                    </p>
                    <div className="mt-4 text-xs text-primary-400 border border-primary-200/60 rounded-lg px-3 py-1.5 bg-white/60">
                      Para mostrar la infografía, añade la imagen en <code className="font-mono text-accent">public/tpi-infografia.png</code>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Documento Link */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-4"
          >
            <div className="bg-gradient-to-br from-citrus-light/10 to-citrus/20 border-2 border-citrus/40 hover:border-citrus rounded-3xl p-6 sm:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col relative overflow-hidden group">
              {/* Decorative radial background */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-citrus/15 rounded-full blur-2xl pointer-events-none group-hover:scale-110 transition-transform duration-500" />
              
              <div className="relative z-10">
                {/* Document Icon */}
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-citrus/30 flex items-center justify-center mb-6 text-citrus-dark">
                  <FileText className="w-6 h-6" />
                </div>

                <h2 className="text-2xl font-bold text-primary-900 mb-3 tracking-tight">
                  Documento TPI
                </h2>
                
                <p className="text-primary-700 leading-relaxed mb-6 font-medium text-sm sm:text-base">
                  Accedé al documento completo del trabajo para consultar el desarrollo, los criterios y las entregas.
                </p>
              </div>

              <div className="relative z-10">
                <a
                  href="https://docs.google.com/document/d/1PJhmsnZQiuBZKPHKoJoHqhNB45mE9LBKwyn4rZG0Ib8/edit?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full justify-center inline-flex items-center gap-2 px-5 py-3.5 bg-primary-900 hover:bg-black text-white font-bold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 text-center cursor-pointer text-sm sm:text-base"
                >
                  <span>Ver documento</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Lightbox con Zoom Interactivo y Controles Flotantes (Sin banner superior) */}
      <AnimatePresence>
        {showLightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 overflow-hidden flex items-center justify-center"
            onClick={() => {
              setShowLightbox(false);
              setZoomScale(1);
            }}
          >
            {/* Close Button - Floating absolute on top-right */}
            <button
              onClick={() => {
                setShowLightbox(false);
                setZoomScale(1);
              }}
              className="absolute top-6 right-6 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-red-500 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/10 shadow-md active:scale-95"
              title="Cerrar (Esc)"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Zoom Controls Pad - Floating absolute on bottom-center */}
            <div 
              className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 bg-black/60 border border-white/10 backdrop-blur-md rounded-2xl p-2.5 flex items-center gap-3.5 shadow-xl text-white"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Zoom out button */}
              <button
                onClick={handleZoomOut}
                disabled={zoomScale <= 1}
                className="w-9 h-9 rounded-xl bg-white/15 hover:bg-white/25 text-white flex items-center justify-center disabled:opacity-30 transition-all cursor-pointer active:scale-90"
                title="Alejar"
              >
                <ZoomOut className="w-4.5 h-4.5" />
              </button>
              
              <span className="text-sm font-extrabold tracking-wide min-w-[70px] text-center select-none">
                {Math.round(zoomScale * 100)}%
              </span>
              
              {/* Reset zoom button */}
              <button
                onClick={handleResetZoom}
                disabled={zoomScale === 1}
                className="w-9 h-9 rounded-xl bg-white/15 hover:bg-white/25 text-white flex items-center justify-center disabled:opacity-30 transition-all cursor-pointer active:scale-90"
                title="Restablecer"
              >
                <RotateCcw className="w-4.5 h-4.5" />
              </button>
              
              {/* Zoom in button */}
              <button
                onClick={handleZoomIn}
                disabled={zoomScale >= 3}
                className="w-9 h-9 rounded-xl bg-white/15 hover:bg-white/25 text-white flex items-center justify-center disabled:opacity-30 transition-all cursor-pointer active:scale-90"
                title="Acercar"
              >
                <ZoomIn className="w-4.5 h-4.5" />
              </button>
            </div>

            {/* Lightbox Content Area */}
            <div className="w-full h-full overflow-auto flex p-4">
              <img
                src="/tpi-infografia.png"
                alt="Infografía del Trabajo Práctico Integrador ampliada"
                className="rounded-lg shadow-2xl select-none transition-all duration-200 ease-out"
                style={{
                  width: 'auto',
                  height: 'auto',
                  maxWidth: `${100 * zoomScale}%`,
                  maxHeight: `${85 * zoomScale}vh`,
                  margin: 'auto'
                }}
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
 