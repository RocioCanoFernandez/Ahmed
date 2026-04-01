import React from 'react';
import { Play, Mail, Instagram, Languages, Dumbbell, MonitorPlay, Clapperboard, Theater, ChevronRight, UserCircle, Star, Award } from 'lucide-react';

const AhmedHub = () => {
  const hubData = {
    name: "AHMED YOUNOUSSI",
    activity: "Actor",
    agencyUrl: "https://www.decara-actores.com/actores/ahmed-younoussi/",
    instagram: "https://www.instagram.com/ahmed_younoussi/?hl=es",
    imdb: "https://imdb.com/", // PENDIENTE real
    videobook: "#", // PENDIENTE real
    profilePicture: "/ahmed_foto.png", // Retrato principal
    mainHeadline: "Actor. Nominado a Mejor Actor – Premios Max 2025."
  };

  const handleSaveContact = () => {
    const vcard = `BEGIN:VCARD\r\nVERSION:3.0\r\nFN:Ahmed Younoussi\r\nORG:Actor\r\nTITLE:Actor\r\nURL:${hubData.imdb}\r\nEND:VCARD`;
    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Ahmed_Younoussi_Actor.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-inter selection:bg-zinc-100 selection:text-zinc-900">
      
      {/* Contenedor Principal Ajustado y Centrado */}
      <div className="w-full max-w-[480px] min-h-screen flex flex-col relative z-10 mx-auto bg-zinc-950 shadow-2xl">
        
        {/* HERO SECTION */}
        <div className="relative w-full aspect-[4/5] bg-zinc-900 overflow-hidden">
          <img 
            src={hubData.profilePicture} 
            alt="Ahmed Younoussi" 
            className="w-full h-full object-cover object-top opacity-100"
          />
          {/* Gradiente oscuro inferior (más suave y bajo) para legibilidad */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col items-start">
            <h1 className="text-4xl sm:text-5xl font-serif font-black text-white uppercase tracking-tight leading-[0.9] mb-3">
              Ahmed <br/>Younoussi
            </h1>
            <p className="text-zinc-300 font-inter font-medium text-sm tracking-widest uppercase flex items-center gap-2">
              <Award className="w-4 h-4 text-white" /> Nominado Premios Max 2025
            </p>
          </div>
        </div>

        {/* ACCESOS RÁPIDOS */}
        <div className="px-6 -mt-4 relative z-20 flex gap-3">
          <a href={hubData.videobook} className="flex-1 bg-white text-zinc-950 flex items-center justify-center gap-2 py-4 rounded-2xl font-bold uppercase tracking-wider text-sm hover:bg-zinc-200 transition-colors shadow-xl">
            <Play className="w-4 h-4 fill-current" /> Videobook
          </a>
          <button onClick={handleSaveContact} className="flex-none bg-zinc-800 text-white flex items-center justify-center w-14 rounded-2xl hover:bg-zinc-700 transition-colors border border-zinc-700">
            <UserCircle className="w-6 h-6" />
          </button>
        </div>

        <div className="px-6 py-10 flex flex-col gap-10">

          {/* FICHA TÉCNICA (RANGO Y HERRAMIENTAS) */}
          <section className="space-y-4">
            <h2 className="text-sm font-serif font-bold text-zinc-500 uppercase tracking-[0.2em] border-b border-zinc-800 pb-2">Arsenal Técnico</h2>
            
            <div className="grid grid-cols-1 gap-3">
              <div className="bg-zinc-900/50 p-4 rounded-2xl border border-zinc-800/50">
                <div className="flex items-center gap-3 mb-2">
                  <Languages className="w-5 h-5 text-zinc-400" />
                  <h3 className="font-bold text-zinc-200">Idiomas y Acentos</h3>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  <span className="text-zinc-200 font-medium">Español</span> (Materna) · Acentos: Neutro, Gallego, Argentino, Colombiano.<br/>
                  <span className="text-zinc-200 font-medium">Árabe</span> (Materna).
                </p>
              </div>

              <div className="bg-zinc-900/50 p-4 rounded-2xl border border-zinc-800/50">
                <div className="flex items-center gap-3 mb-2">
                  <Dumbbell className="w-5 h-5 text-zinc-400" />
                  <h3 className="font-bold text-zinc-200">Habilidades Físicas</h3>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  <span className="text-zinc-200 font-medium">Fútbol</span> (Nivel Profesional)<br/>
                  <span className="text-zinc-200 font-medium">Calistenia</span> (Nivel Profesional)
                </p>
              </div>
            </div>
          </section>

          {/* TRAYECTORIA DESTACADA */}
          <section className="space-y-4">
            <h2 className="text-sm font-serif font-bold text-zinc-500 uppercase tracking-[0.2em] border-b border-zinc-800 pb-2">Créditos Destacados</h2>
            
            <div className="space-y-3">
              {/* TEATRO */}
              <div className="group flex items-start gap-4 p-4 hover:bg-zinc-900 rounded-2xl transition-colors border border-transparent hover:border-zinc-800">
                <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center text-zinc-300 flex-shrink-0">
                  <Theater className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-black text-zinc-100 text-lg leading-none mb-1">14.4</h4>
                  <p className="text-xs text-zinc-400 font-medium uppercase tracking-wider mb-2">Teatro · Obra Autobiográfica</p>
                  <p className="text-sm text-zinc-500 leading-relaxed">Coautor y protagonista. Dir. Sergio Peris-Mencheta. (P. Max: Nom. Mejor Actor).</p>
                </div>
              </div>

              {/* CINE */}
              <div className="group flex items-start gap-4 p-4 hover:bg-zinc-900 rounded-2xl transition-colors border border-transparent hover:border-zinc-800">
                <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center text-zinc-300 flex-shrink-0">
                  <Clapperboard className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-black text-zinc-100 text-lg leading-none mb-1">Cine</h4>
                  <p className="text-xs text-zinc-400 font-medium uppercase tracking-wider mb-2">Largometrajes y Cortometrajes</p>
                  <p className="text-sm text-zinc-500 leading-relaxed">Tánger Gool (Dir. Juan Gautier), El aspirante, Yalla (Dir. Carlo D'Ursi).</p>
                </div>
              </div>

              {/* TV */}
              <div className="group flex items-start gap-4 p-4 hover:bg-zinc-900 rounded-2xl transition-colors border border-transparent hover:border-zinc-800">
                <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center text-zinc-300 flex-shrink-0">
                  <MonitorPlay className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-black text-zinc-100 text-lg leading-none mb-1">Televisión</h4>
                  <p className="text-xs text-zinc-400 font-medium uppercase tracking-wider mb-2">Ficción / Series</p>
                  <p className="text-sm text-zinc-500 leading-relaxed">La Unidad (Movistar+), El Príncipe (Telecinco), Los nuestros, Cuéntame cómo pasó, Águila Roja.</p>
                </div>
              </div>
            </div>
          </section>

          {/* INTENCIÓN ESTRATÉGICA: REGISTROS (PLACEHOLDERS DE DIRECCIÓN) */}
          <section className="space-y-4">
            <h2 className="text-sm font-serif font-bold text-zinc-500 uppercase tracking-[0.2em] border-b border-zinc-800 pb-2">Registros / Rango (Próximamente)</h2>
            <div className="grid grid-cols-2 gap-3">
              <div className="aspect-[3/4] bg-zinc-900 rounded-2xl border border-zinc-800 flex items-end p-4 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent opacity-80"></div>
                <span className="relative z-10 font-bold text-zinc-300 text-sm tracking-wide">AUTORIDAD</span>
              </div>
              <div className="aspect-[3/4] bg-zinc-900 rounded-2xl border border-zinc-800 flex items-end p-4 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent opacity-80"></div>
                <span className="relative z-10 font-bold text-zinc-300 text-sm tracking-wide">VULNERABILIDAD</span>
              </div>
            </div>
            <p className="text-xs text-zinc-500 italic mt-2">
              *Espacios reservados para incorporar nuevo material editorial y de videobook que demuestre registro de Leading Man, perfiles de thriller y cotidianidad fuera del drama migratorio.
            </p>
          </section>

          {/* CONTACTO PROFESIONAL Y REDES */}
          <section className="space-y-3 pt-6 border-t border-zinc-900">
            <a href={hubData.agencyUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-zinc-900 hover:bg-zinc-800 rounded-2xl transition-colors border border-zinc-800">
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-zinc-400" />
                <span className="font-bold text-zinc-200">Contactar Agencia</span>
              </div>
              <ChevronRight className="w-5 h-5 text-zinc-600" />
            </a>
            
            <div className="grid grid-cols-2 gap-3">
              <a href={hubData.imdb} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 p-4 bg-zinc-900 hover:bg-zinc-800 rounded-2xl transition-colors border border-zinc-800 font-bold text-sm text-zinc-400 hover:text-white">
                <Star className="w-4 h-4" /> IMDB
              </a>
              <a href={hubData.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 p-4 bg-zinc-900 hover:bg-zinc-800 rounded-2xl transition-colors border border-zinc-800 font-bold text-sm text-zinc-400 hover:text-white">
                <Instagram className="w-4 h-4" /> Instagram
              </a>
            </div>
          </section>

        </div>

        {/* Footer */}
        <div className="mt-8 pb-10 flex justify-center opacity-40">
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-600">
            © 2026 Ahmed Younoussi
          </p>
        </div>

      </div>
    </div>
  );
};

export default AhmedHub;
