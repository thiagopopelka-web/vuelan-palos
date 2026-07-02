import Header from "../components/Header";

const smallStories = [
  { section: "Actualidad", title: "Una ley que cambia conversaciones públicas", meta: "Por Redacción · 2 min" },
  { section: "Cultura · Carnaval", title: "Carnaval: lo que se sabe y lo que se viene", meta: "Por Thiago Popelka · 3 min" },
  { section: "Educación", title: "El liceo como termómetro social", meta: "Por Redacción · 4 min" },
  { section: "Internacionales", title: "Por qué una elección lejana importa acá", meta: "Por Redacción · 5 min" },
];

const cultureTags = [
  "Música", "Rock Uruguayo", "Rock Argentino", "Carnaval", "Urbano", "Global",
  "Teatro", "Cine", "Literatura", "Poesía", "Arte", "Comedia", "Agenda Cultural"
];

export default function Home() {
  return (
    <>
      <Header />

      <main className="mx-auto max-w-7xl px-6 py-8">
        <section className="grid grid-cols-[2fr_.9fr] gap-8 max-lg:grid-cols-1">
          <article id="actualidad" className="hero-photo relative min-h-[540px] overflow-hidden">
            <div className="absolute bottom-10 left-10 max-w-2xl text-white max-md:left-6 max-md:right-6">
              <span className="wood-button inline-block px-4 py-2 text-xs font-extrabold uppercase tracking-widest">
                Vale la pena leer
              </span>
              <h2 className="mt-6 font-serif text-6xl leading-none max-md:text-4xl">
                ¿Hacia dónde va Uruguay?
              </h2>
              <p className="mt-5 text-xl leading-relaxed">
                Claves para entender los debates que marcan el presente y pueden definir el futuro del país.
              </p>
              <p className="mt-6 text-sm">Por Thiago Popelka · 3 min de lectura</p>
            </div>
          </article>

          <aside className="space-y-0">
            {[
              ["Educación", "La crisis silenciosa en la educación media"],
              ["Cultura · Música", "El rock uruguayo no está muerto"],
              ["Internacionales", "Elecciones y cambios globales"],
              ["Comunidad", "¿Qué historia creés que merece ser contada?"],
            ].map(([section, title]) => (
              <article key={title} className="border-b border-[var(--line)] py-6">
                <span className="kicker">{section}</span>
                <h3 className="mt-2 font-serif text-2xl leading-tight">{title}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">Contexto, preguntas y mirada propia.</p>
              </article>
            ))}
          </aside>
        </section>

        <section className="mt-10">
          <div className="mb-5 flex items-center gap-6 border-b border-[var(--line)]">
            <h2 className="font-sans text-lg font-extrabold uppercase tracking-wider">Historias para entender la semana</h2>
            <a className="ml-auto text-sm text-[var(--wood)]">Ver más →</a>
          </div>
          <div className="grid grid-cols-4 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {smallStories.map((story) => (
              <article key={story.title} className="paper-card p-5">
                <span className="kicker">{story.section}</span>
                <h3 className="mt-3 font-serif text-xl leading-tight">{story.title}</h3>
                <p className="mt-4 text-sm text-[var(--muted)]">{story.meta}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14 grid grid-cols-3 gap-6 max-lg:grid-cols-1">
          <article id="historias" className="feature-photo-a min-h-[430px] p-8 text-white flex flex-col justify-end">
            <span className="kicker !text-[#d2a074]">Historias</span>
            <h2 className="mt-3 font-serif text-4xl leading-tight">Don Julio, el almacenero que sabe de todos</h2>
            <p className="mt-4">En un barrio que cambia rápido, su almacén sigue siendo el mismo lugar de siempre.</p>
          </article>
          <article className="feature-photo-b min-h-[430px] p-8 text-white flex flex-col justify-end">
            <span className="kicker !text-[#d2a074]">Entrevistas</span>
            <h2 className="mt-3 font-serif text-4xl leading-tight">“Escribir también es una forma de resistencia”</h2>
            <p className="mt-4">Una conversación sobre literatura, cultura y memoria.</p>
          </article>
          <article id="tecnologia" className="feature-photo-c min-h-[430px] p-8 text-white flex flex-col justify-end">
            <span className="kicker !text-[#d2a074]">Tecnología y Salud</span>
            <h2 className="mt-3 font-serif text-4xl leading-tight">Avances médicos que podrían cambiar la vida cotidiana</h2>
            <p className="mt-4">Noticias científicas explicadas para lectores comunes.</p>
          </article>
        </section>

        <section id="cultura" className="mt-14 grid grid-cols-[.9fr_1.2fr] gap-10 border-t-2 border-[var(--ink)] py-8 max-lg:grid-cols-1">
          <div>
            <span className="kicker">Cultura</span>
            <h2 className="mt-3 font-serif text-4xl leading-tight">
              Una sección para leer la época desde sus canciones, escenarios y relatos
            </h2>
          </div>
          <div className="flex flex-wrap content-start gap-3">
            {cultureTags.map((tag) => (
              <span key={tag} className="rounded-full border border-[var(--line)] px-4 py-2 font-bold text-[var(--wood)]">
                {tag}
              </span>
            ))}
          </div>
        </section>

        <section id="podcast" className="mt-10 border-t-2 border-[var(--ink)] py-8">
          <div className="paper-card grid grid-cols-[.8fr_1.2fr] gap-8 p-8 max-md:grid-cols-1">
            <div>
              <span className="kicker">Próximamente</span>
              <h2 className="mt-3 font-serif text-4xl">Vuelan Palos Podcast</h2>
            </div>
            <p className="text-lg leading-relaxed">
              Un espacio futuro para entrevistas y columnas periodísticas. La idea es conversar con personas,
              abrir temas y contar historias con tiempo, contexto y mirada propia.
            </p>
          </div>
        </section>

        <section className="mt-10 border-t-2 border-[var(--ink)] py-8">
          <h2 className="font-serif text-4xl">Sobre Vuelan Palos</h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed">
            Vuelan Palos es un proyecto de portafolio periodístico creado por Thiago Popelka. Nace como un
            espacio para practicar, publicar y mostrar trabajos sobre actualidad uruguaya, cultura, educación,
            entrevistas e historias humanas.
          </p>
          <div className="mt-8 paper-card p-6">
            <span className="kicker">Comunidad</span>
            <h3 className="mt-2 font-serif text-2xl">¿Qué historia creés que merece ser contada?</h3>
            <p className="mt-2 text-[var(--muted)]">
              Más adelante, este espacio podrá recibir propuestas de historias, recomendaciones culturales y temas para investigar.
            </p>
          </div>
        </section>
      </main>

      <footer className="mt-10 bg-[var(--wood)] px-6 py-8 text-center text-white">
        Vuelan Palos · Thiago Popelka – Periodismo · Montevideo, Uruguay
      </footer>
    </>
  );
}
