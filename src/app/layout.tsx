import type { Metadata } from "next";
import { EB_Garamond, Lato } from "next/font/google";
import "./globals.css";

const headingFont = EB_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bodyFont = Lato({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Amanda Abogada | Abogada en Colombia para contratos y propiedad",
  description:
    "Abogada en Colombia para asesoria juridica, elaboracion y revision de contratos, proceso de pertenencia, legalizacion de propiedad y otros asuntos civiles, familiares y patrimoniales.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-CO"
      className={`${headingFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-ink">
        {children}
      </body>
    </html>
  );
}
