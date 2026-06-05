import Script from "next/script";
import type { Metadata } from "next";
import "./globals.css";
import { JsonLd } from "@/components/seo/JsonLd";
import { getOrganizationJsonLd, getWebSiteJsonLd } from "@/lib/jsonLd";

const yandexMetrikaId = process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID;

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
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", sizes: "120x120", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
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
        {yandexMetrikaId ? (
          <>
            <Script id="yandex-metrika" strategy="afterInteractive">
              {`
                (function(m,e,t,r,i,k,a){
                  m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                  m[i].l=1*new Date();
                  for (var j = 0; j < document.scripts.length; j++) {
                    if (document.scripts[j].src === r) { return; }
                  }
                  k=e.createElement(t),a=e.getElementsByTagName(t)[0],
                  k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
                })(window, document,'script','https://mc.yandex.ru/metrika/tag.js', 'ym');

                ym(${yandexMetrikaId}, 'init', {
                  webvisor: true,
                  clickmap: true,
                  trackLinks: true,
                  accurateTrackBounce: true
                });
              `}
            </Script>

            <noscript>
              <div>
                <img
                  src={`https://mc.yandex.ru/watch/${yandexMetrikaId}`}
                  style={{ position: "absolute", left: "-9999px" }}
                  alt=""
                />
              </div>
            </noscript>
          </>
        ) : null}
        <JsonLd data={[getOrganizationJsonLd(), getWebSiteJsonLd()]} />
        {children}
      </body>
    </html>
  );
}
