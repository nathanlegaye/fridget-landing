import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fridget - Générez des recettes à partir de vos restes",
  description: "Fridget génère des recettes créatives à partir de vos fonds de placard et fonds de frigo. Transformez vos restes en délicieux repas !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="font-pally antialiased">
        {children}
      </body>
    </html>
  );
}
