import Logo from "./Logo";

export default function Header() {
  return (
    <>
      <div className="flex justify-between bg-[var(--wood)] px-8 py-2 text-sm text-white max-md:hidden">
        <span>Montevideo, Uruguay</span>
        <span>Periodismo independiente desde Uruguay para Latinoamérica.</span>
        <span>Thiago Popelka – Periodismo</span>
      </div>

      <header className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex items-center justify-between gap-8 max-md:flex-col">
          <Logo />
          <div className="text-center md:flex-1">
            <h1 className="font-serif text-6xl uppercase tracking-[.14em] text-[var(--wood)] max-md:text-4xl">
              Vuelan Palos
            </h1>
            <p className="mt-3 font-serif italic text-xl text-[var(--wood)]">
              La sociedad de hoy y las historias que merecen ser contadas.
            </p>
          </div>
        </div>
      </header>

      <nav className="nav-scroll sticky top-0 z-20 flex justify-center gap-9 border-y border-[var(--line)] bg-[rgba(247,241,231,.93)] px-6 py-4 backdrop-blur">
        <a className="font-bold uppercase text-sm" href="#actualidad">Actualidad</a>
        <a className="font-bold uppercase text-sm" href="#cultura">Cultura</a>
        <a className="font-bold uppercase text-sm" href="#internacionales">Internacionales</a>
        <a className="font-bold uppercase text-sm" href="#educacion">Educación</a>
        <a className="font-bold uppercase text-sm" href="#tecnologia">Tecnología y Salud</a>
        <a className="font-bold uppercase text-sm" href="#historias">Historias</a>
        <a className="font-bold uppercase text-sm" href="#podcast">Podcast</a>
      </nav>
    </>
  );
}
