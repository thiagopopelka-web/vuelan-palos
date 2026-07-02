export default function Logo() {
  return (
    <div className="logo-wrap inline-flex items-center justify-center">
      <svg viewBox="0 0 360 380" className="h-36 w-36 text-[var(--wood)]" aria-label="Logo Vuelan Palos">
        <path d="M60 42 C112 35 242 49 300 38 C314 45 311 307 298 326 C246 340 114 331 56 335 C45 294 45 88 60 42Z" fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M302 74 C328 80 326 298 302 326" fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="91" y="82" width="78" height="48" rx="6" fill="currentColor"/>
        <path d="M190 86 H270 M190 110 H270 M190 134 H248" fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
        <text x="180" y="199" textAnchor="middle" fontFamily="Georgia, serif" fontWeight="700" fontSize="47" fill="currentColor">VUELAN</text>
        <text x="180" y="262" textAnchor="middle" fontFamily="Georgia, serif" fontWeight="700" fontSize="47" fill="currentColor">PALOS</text>

        {/* Palos congelados, abajo y sin tocar las letras */}
        <g className="logo-sticks">
          <path d="M84 304 l45 -14" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity=".72"/>
          <path d="M153 319 l45 -14" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity=".72"/>
          <path d="M221 306 l45 -14" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity=".72"/>

          <path d="M116 294 l43 -12" fill="none" stroke="currentColor" strokeWidth="9" strokeLinecap="round"/>
          <circle cx="116" cy="294" r="5" fill="none" stroke="currentColor" strokeWidth="3"/>
          <path d="M188 314 l43 -12" fill="none" stroke="currentColor" strokeWidth="9" strokeLinecap="round"/>
          <circle cx="188" cy="314" r="5" fill="none" stroke="currentColor" strokeWidth="3"/>
          <path d="M244 294 l43 -12" fill="none" stroke="currentColor" strokeWidth="9" strokeLinecap="round"/>
          <circle cx="244" cy="294" r="5" fill="none" stroke="currentColor" strokeWidth="3"/>
        </g>
      </svg>
    </div>
  );
}
