import type { Metadata } from "next";
import "./globals.css";
import { JsonLd } from "@/components/seo/JsonLd";
import { getOrganizationJsonLd, getWebSiteJsonLd } from "@/lib/jsonLd";

export const metadata: Metadata = {
  metadataBase: new URL("https://stolica-msk.com"),
  title: {
    default:
      "Столица — ремонтно-восстановительные работы и гидроизоляция",
    template: "%s | Столица",
  },
  description:
    "Ремонтно-восстановительные работы, инъекционная гидроизоляция, устранение протечек, восстановление бетона и кирпичной кладки, герметизация швов, трещин и вводов коммуникаций в Москве и Московской области.",
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
      <body>
        <JsonLd data={[getOrganizationJsonLd(), getWebSiteJsonLd()]} />
        {children}
      </body>
    </html>
  );
}
