import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Check, Volume2, Pause } from 'lucide-react';

export const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayToggle = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch((err) => {
          console.warn("Autoplay failed or video source state error: ", err);
          setIsPlaying(true); // fall-through visual
        });
      }
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section id="video-section" className="mx-auto max-w-7xl px-6 py-16 md:py-24 border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left column: Video Player Block (Twin to Mockup) */}
        <div className="lg:col-span-7">
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10 bg-zinc-950 shadow-2xl group">
            {/* Real HTML5 video tag using high quality abstract technological asset */}
            <video 
              ref={videoRef}
              src="https://assets.mixkit.co/videos/preview/mixkit-matrix-style-code-computer-screen-close-up-33435-large.mp4"
              loop
              muted
              playsInline
              className={`w-full h-full object-cover transition-transform duration-700 ${isPlaying ? 'scale-100' : 'scale-105 filter brightness-75 blur-[2px]'}`}
            />

            {/* Poster / Thumbnail Overlay (Tutor face mockup + glowing layers) */}
            <AnimatePresence>
              {!isPlaying && (
                <motion.div 
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 bg-cover bg-center"
                  style={{ 
                    backgroundImage: 'radial-gradient(circle at center, rgba(15, 23, 42, 0.4) 0%, rgba(9, 9, 11, 0.9) 100%)' 
                  }}
                >
                  {/* Human image screenshot mockup / avatar representation inside the thumbnail */}
                  <div className="absolute inset-0 bg-neutral-900/60 flex items-center justify-center overflow-hidden">
                    <img 
                      src="/src/assets/images/hero_human_engineer_1781114977821.png"
                      alt="VSL Presenter" 
                      className="w-full h-full object-cover opacity-40 scale-[1.12]"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                  </div>

                  {/* Gigantic Play Ring button */}
                  <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handlePlayToggle}
                    className="relative z-20 flex h-20 w-20 items-center justify-center rounded-full bg-white text-black shadow-2xl transition-colors duration-300 hover:bg-zinc-100"
                    aria-label="Play video"
                  >
                    <Play size={28} className="fill-current text-black translate-x-[2px]" />
                    {/* Ring animated pulse */}
                    <span className="absolute -inset-3 rounded-full border border-white/20 animate-ping opacity-60" />
                  </motion.button>

                  <span className="relative z-20 mt-4 text-xs font-mono tracking-widest text-zinc-300 uppercase">
                    ASSISTIR APRESENTAÇÃO DETALHADA (VSL)
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* In-play video controls HUD for premium look */}
            {isPlaying && (
              <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between pointer-events-none">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePlayToggle();
                  }}
                  className="pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full bg-black/60 backdrop-blur border border-white/10 text-white hover:bg-white hover:text-black transition-colors"
                >
                  <Pause size={14} />
                </button>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur border border-white/10 text-white text-[10px] font-mono">
                  <Volume2 size={10} className="animate-pulse" />
                  PRODUÇÃO PREMIUM • AUDIO OK
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right column: Content Block (Twin to Mockup) */}
        <div className="lg:col-span-5 flex flex-col items-start text-left">
          <span className="text-[10px] font-mono tracking-widest text-[#FF6C88] font-bold uppercase block mb-3">
            VEJA COMO FUNCIONA NA PRÁTICA
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white leading-tight">
            Assista ao vídeo e descubram como transformar conhecimento técnico em projetos que vendem.
          </h2>

          {/* List parameters */}
          <div className="mt-8 flex flex-col gap-4 w-full">
            <div className="flex items-start gap-3.5">
              <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 shrink-0">
                <Check size={12} className="stroke-[3]" />
              </div>
              <p className="text-zinc-300 text-sm leading-relaxed font-light">
                Entenda o método que já ajudou dezenas de profissionais a fecharem seus primeiros projetos em tempo recorde.
              </p>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 shrink-0">
                <Check size={12} className="stroke-[3]" />
              </div>
              <p className="text-zinc-300 text-sm leading-relaxed font-light">
                Veja exemplos reais de automações que empresas pagam entre R$ 1.500 e R$ 4.000 para ter instaladas.
              </p>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 shrink-0">
                <Check size={12} className="stroke-[3]" />
              </div>
              <p className="text-zinc-300 text-sm leading-relaxed font-light">
                Descubra como se posicionar perante gerentes e empresários para apresentar as soluções com total autoridade.
              </p>
            </div>
          </div>

          {/* CTA Trigger */}
          <button 
            onClick={handlePlayToggle}
            className="group mt-8 flex items-center justify-center gap-3.5 rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-xs font-semibold tracking-wider text-white transition-all duration-300 hover:bg-white hover:text-black hover:border-white shadow-lg active:scale-95"
          >
            <Play size={12} className="fill-current text-white group-hover:text-black transition-colors" />
            QUERO ASSISTIR AGORA
          </button>
        </div>
      </div>
    </section>
  );
};
