export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f1e7] text-[#111]">
      <header className="border-b border-[#d8c8b5] px-6 py-4 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-[#6b3f20]">
          Montevideo · Uruguay
        </p>

        <div className="mx-auto mt-6 flex max-w-5xl flex-col items-center">
          <div className="group mb-4 text-[#6b3f20]">
            <svg viewBox="0 0 360 380" className="h-36 w-36">
              <path d="M60 42 C112 35 242 49 300 38 C314 45 311 307 298 326 C246 340 114 331 56 335 C45 294 45 88 60 42Z" fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M302 74 C328 80 326 298 302 326" fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
              <text x="180" y="190" textAnchor="middle" fontFamily="Georgia, serif" fontWeight="700" fontSize="48" fill="currentColor">VUELAN</text>
              <text x="180" y="255" textAnchor="middle" fontFamily="Georgia, serif" fontWeight="700" fontSize="48" fill="currentColor">PALOS</text>
              <g className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M88 305 l45 -14" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity=".7"/>
                <path d="M160 320 l45 -14" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity=".7"/>
                <path d="M230 306 l45 -14" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity=".7"/>
                <path d="M118 296 l38 -10" stroke="currentColor" strokeWidth="9" strokeLinecap="round"/>
                <path d="M190 313 l38 -10" stroke="currentColor" strokeWidth="9" strokeLinecap="round"/>
                <path d="M250 296 l38 -10" stroke="currentColor" strokeWidth="9" strokeLinecap="round"/>
              </g>
            </svg>
          </div>

          <h1 className="font-serif text-6xl uppercase tracking-[0.16em] text-[#6b3f20] md:text-8xl">
            Vuelan Palos
          </h1>
          <p className="mt-4 max-w-2xl font-serif text-xl italic text-[#6b3f20]">
            La sociedad de hoy y las historias que merecen ser contadas.
          </p>
          <p className="mt-3 text-sm uppercase tracking-[0.18em] text-[#6e6257]">
            Thiago Popelka – Periodismo
          </p>
        </div>
      </header>

      <nav className="sticky top-0 z-10 flex gap-6 overflow-x-auto border-b border-[#d8c8b5] bg-[#f7f1e7]/90 px-6 py-4 text-sm font-bold uppercase backdrop-blur md:justify-center">
        <a>Actualidad</a>
        <a>Cultura</a>
        <a>Internacionales</a>
        <a>Educación</a>
        <a>Tecnología y Salud</a>
        <a>Historias</a>
        <a>Podcast</a>
      </nav>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[2fr_1fr]">
        <article className="flex min-h-[520px] flex-col justify-end bg-[#111] p-8 text-white">
          <span className="mb-4 w-fit bg-[#6b3f20] px-4 py-2 text-xs font-bold uppercase tracking-widest">
            Vale la pena leer
          </span>
          <h2 className="max-w-3xl font-serif text-5xl leading-none md:text-7xl">
            ¿Hacia dónde va Uruguay?
          </h2>
          <p className="mt-5 max-w-2xl text-xl">
            Claves para entender los debates que marcan el presente y pueden definir el futuro del país.
          </p>
          <p className="mt-6 text-sm">Por Thiago Popelka · 3 min de lectura</p>
        </article>

        <aside>
          {[
            ["Educación", "La crisis silenciosa en la educación media"],
            ["Cultura · Música", "El rock uruguayo no está muerto"],
            ["Internacionales", "Elecciones y cambios globales"],
            ["Comunidad", "¿Qué historia creés que merece ser contada?"],
          ].map(([seccion, titulo]) => (
            <article key={titulo} className="border-b border-[#d8c8b5] py-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#8a5a33]">
                {seccion}
              </span>
              <h3 className="mt-2 font-serif text-2xl">{titulo}</h3>
              <p className="mt-2 text-sm text-[#6e6257]">
                Contexto, preguntas y mirada propia.
              </p>
            </article>
          ))}
        </aside>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <h2 className="border-b border-[#d8c8b5] pb-3 text-sm font-extrabold uppercase tracking-widest">
          Historias para entender la semana
        </h2>

        <div className="mt-6 grid gap-6 md:grid-cols-4">
          {["Actualidad", "Carnaval", "Educación", "Internacionales"].map((item) => (
            <article key={item} className="border border-[#d8c8b5] bg-[#fffaf2] p-5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#8a5a33]">
                {item}
              </span>
              <h3 className="mt-3 font-serif text-xl">
                Una historia que merece ser contada
              </h3>
              <p className="mt-4 text-sm text-[#6e6257]">
                Por Thiago Popelka · Próximamente
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl border-t-2 border-black px-6 py-10">
        <span className="text-xs font-bold uppercase tracking-widest text-[#8a5a33]">
          Cultura
        </span>
        <h2 className="mt-3 max-w-3xl font-serif text-4xl">
          Una sección para leer la época desde sus canciones, escenarios y relatos.
        </h2>

        <div className="mt-6 flex flex-wrap gap-3">
          {[
            "Música",
            "Rock Uruguayo",
            "Rock Argentino",
            "Carnaval",
            "Urbano",
            "Global",
            "Teatro",
            "Cine",
            "Literatura",
            "Poesía",
            "Arte",
            "Comedia",
            "Agenda Cultural",
          ].map((tag) => (
            <span key={tag} className="rounded-full border border-[#d8c8b5] px-4 py-2 font-bold text-[#6b3f20]">
              {tag}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl border-t-2 border-black px-6 py-10">
        <span className="text-xs font-bold uppercase tracking-widest text-[#8a5a33]">
          Próximamente
        </span>
        <h2 className="mt-3 font-serif text-4xl">Vuelan Palos Podcast</h2>
        <p className="mt-4 max-w-3xl text-lg text-[#6e6257]">
          Un espacio futuro para entrevistas y columnas periodísticas.
        </p>
      </section>

      <section className="mx-auto max-w-7xl border-t-2 border-black px-6 py-10">
        <h2 className="font-serif text-4xl">Sobre Vuelan Palos</h2>
        <p className="mt-4 max-w-3xl text-lg text-[#6e6257]">
          Vuelan Palos es un proyecto de portafolio periodístico creado por Thiago Popelka.
          Nace como un espacio para practicar, publicar y mostrar trabajos sobre actualidad
          uruguaya, cultura, educación, entrevistas e historias humanas.
        </p>
      </section>

      <footer className="bg-[#5b3218] px-6 py-8 text-center text-white">
        Vuelan Palos · Thiago Popelka – Periodismo · Montevideo, Uruguay
      </footer>
    </main>
  );
}