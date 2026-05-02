import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://stolica-msk.com"),
  title: "Столица — Инъекционная гидроизоляция и устранение сложных протечек",
  description:
    "Инъекционная гидроизоляция, устранение сложных протечек, герметизация швов, вводов коммуникаций, трещин и деформационных узлов.",
  icons: {
    icon: "/branding/logo-mark.png",
    shortcut: "/branding/logo-mark.png",
    apple: "/branding/logo-mark.png",
  },
  formatDetection: {
    telephone: false,
    date: false,
    email: false,
    address: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
