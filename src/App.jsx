import React from 'react';
import { Play, Instagram, Star, ArrowUpRight } from 'lucide-react';

const AhmedHub = () => {
  const hubData = {
    name: "AHMED YOUNOUSSI",
    agencyUrl: "https://www.decara-actores.com/actores/ahmed-younoussi/",
    instagram: "https://www.instagram.com/ahmed_younoussi/?hl=es",
    imdb: "https://imdb.com/", // PENDIENTE real
    videobook: "#", // PENDIENTE real
    profilePicture: "/ahmed_foto.png", // Retrato principal
    mainHeadline: "Actor. Nominado a Mejor Actor – Premios Max 2025."
  };

  return (
    <div className="min-h-screen bg-black text-zinc-100 font-inter selection:bg-zinc-100 selection:text-black">
      
      {/* Contenedor Principal Ajustado y Centrado - Puro Black */}
      <div className="w-full max-w-[480px] min-h-screen flex flex-col relative z-10 mx-auto bg-black border-x border-zinc-900/50">
        
        {/* HERO SECTION */}
        <div className="relative w-full aspect-[4/5] bg-black overflow-hidden flex-shrink-0">
          <img 
            src={hubData.profilePicture} 
            alt="Ahmed Younoussi" 
            className="w-full h-full object-cover object-top opacity-100"
          />
          {/* Gradiente oscuro inferior mucho más sutil */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col items-start">
            <h1 className="text-5xl sm:text-6xl font-serif font-black text-white uppercase tracking-tight leading-[0.85] mb-4">
              Ahmed <br/>Younoussi
            </h1>
            <p className="text-zinc-400 font-inter font-light text-[10px] tracking-[0.25em] uppercase border-l-2 border-white/30 pl-3">
              Actor · Nominado Premios Max 2025
            </p>
          </div>
        </div>

        <div className="px-8 pb-16 flex flex-col">

          {/* ACCESOS RÁPIDOS INVISIBLES / EDITORIAL */}
          <div className="pt-6 pb-12 flex flex-col">
            <a href={hubData.videobook} className="group flex items-center justify-between py-4 border-b border-zinc-800 text-white uppercase tracking-[0.15em] text-xs font-bold transition-all hover:border-zinc-500">
              <span>Ver Videobook</span>
              <Play className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
            </a>
            <a href={hubData.agencyUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between py-4 border-b border-zinc-800 text-zinc-400 uppercase tracking-[0.15em] text-xs transition-all hover:text-white hover:border-zinc-500">
              <span>Agencia y Repr.</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="space-y-16">

            {/* FICHA TÉCNICA (SIN CAJAS) */}
            <section className="space-y-6">
              <h2 className="text-zinc-600 font-serif italic text-lg opacity-80">Arsenal Técnico</h2>
              
              <div className="space-y-6">
                <div className="border-l border-zinc-800 pl-4">
                  <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-2">Idiomas & Acentos</h3>
                  <p className="text-sm font-light text-zinc-400 leading-relaxed">
                    <strong className="text-zinc-200 font-normal">Español</strong> (Materna) · Acentos: Neutro, Gallego, Argentino, Colombiano.<br/>
                    <strong className="text-zinc-200 font-normal">Árabe</strong> (Materna).
                  </p>
                </div>

                <div className="border-l border-zinc-800 pl-4">
                  <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-2">Habilidades</h3>
                  <p className="text-sm font-light text-zinc-400 leading-relaxed">
                    <strong className="text-zinc-200 font-normal">Fútbol</strong> (Alto Rendimiento) · <strong className="text-zinc-200 font-normal">Calistenia</strong> (Pro)
                  </p>
                </div>
              </div>
            </section>

            {/* TRAYECTORIA (SIN CAJAS) */}
            <section className="space-y-6">
              <h2 className="text-zinc-600 font-serif italic text-lg opacity-80">Créditos</h2>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-serif font-semibold text-white text-xl leading-none mb-1">14.4</h4>
                  <p className="text-[10px] text-zinc-500 font-light uppercase tracking-widest mb-2">Teatro · Obra Autobiográfica</p>
                  <p className="text-sm font-light text-zinc-400 leading-relaxed">Coautor y protagonista. Dir. Sergio Peris-Mencheta.<br/><span className="italic">Premio Max: Nom. Mejor Actor</span>.</p>
                </div>

                <div>
                  <h4 className="font-serif font-semibold text-white text-xl leading-none mb-1">Cine</h4>
                  <p className="text-[10px] text-zinc-500 font-light uppercase tracking-widest mb-2">Ficción</p>
                  <p className="text-sm font-light text-zinc-400 leading-relaxed">Tánger Gool (Dir. Juan Gautier), El aspirante, Yalla.</p>
                </div>

                <div>
                  <h4 className="font-serif font-semibold text-white text-xl leading-none mb-1">Televisión</h4>
                  <p className="text-[10px] text-zinc-500 font-light uppercase tracking-widest mb-2">Series y Ficción</p>
                  <p className="text-sm font-light text-zinc-400 leading-relaxed">La Unidad (Movistar+), El Príncipe (Telecinco), Los nuestros, Cuéntame cómo pasó, Águila Roja.</p>
                </div>
              </div>
            </section>

            {/* INTENCIÓN ESTRATÉGICA: REGISTROS A PANTALLA COMPLETA */}
            {/* Como nos pidieron: Sin cajas, al ancho de la pantalla y con texto flotante sutil */}
            <section className="space-y-6 -mx-8"> 
              <h2 className="text-zinc-600 font-serif italic text-lg opacity-80 px-8">Registros</h2>
              
              <div className="w-full flex justify-between gap-1">
                <div className="relative w-1/2 aspect-[4/5] bg-zinc-900 overflow-hidden group">
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 text-zinc-800 transition-colors"></div>
                  <span className="absolute bottom-4 left-4 font-inter text-[10px] font-bold text-white uppercase tracking-[0.3em] opacity-80 z-10 transition-transform group-hover:-translate-y-1">Autoridad</span>
                </div>
                <div className="relative w-1/2 aspect-[4/5] bg-zinc-900 overflow-hidden group">
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-colors"></div>
                  <span className="absolute bottom-4 left-4 font-inter text-[10px] font-bold text-white uppercase tracking-[0.3em] opacity-80 z-10 transition-transform group-hover:-translate-y-1">Vulnerabilidad</span>
                </div>
              </div>
            </section>

            {/* ENLACES MÍNIMOS */}
            <section className="pt-8 border-t border-zinc-900 flex justify-between items-center">
              <a href={hubData.imdb} target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold text-zinc-500 hover:text-white uppercase tracking-widest flex items-center gap-2 transition-colors">
                <Star className="w-3 h-3" /> IMDB
              </a>
              <a href={hubData.instagram} target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold text-zinc-500 hover:text-white uppercase tracking-widest flex items-center gap-2 transition-colors">
                <Instagram className="w-3 h-3" /> Instagram
              </a>
            </section>

          </div>

        </div>

      </div>
    </div>
  );
};

export default AhmedHub;
