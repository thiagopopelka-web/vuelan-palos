import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vuelan Palos | Thiago Popelka – Periodismo",
  description: "La sociedad de hoy y las historias que merecen ser contadas.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
