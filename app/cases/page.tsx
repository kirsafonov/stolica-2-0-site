import type { Metadata } from "next";

import { SiteLayout } from "@/components/layout/SiteLayout";
import { CasesGridSection } from "@/components/sections/CasesGridSection";
import { CasesPageHero } from "@/components/sections/CasesPageHero";

export const metadata: Metadata = {
  title: "Кейсы по инъекционной гидроизоляции и устранению протечек",
  description:
    "Реальные объекты ООО «Столица»: инъекционная гидроизоляция, устранение протечек, герметизация швов, трещин, вводов коммуникаций и работы на исторических объектах.",
  alternates: {
    canonical: "/cases",
  },
  openGraph: {
    title: "Кейсы ООО «Столица»",
    description:
      "Реальные объекты: жилые комплексы, исторические здания, подземные части, кровли, швы, трещины и вводы коммуникаций.",
    url: "/cases",
    type: "website",
  },
};

export default function CasesPage() {
  return (
    <SiteLayout>
      <CasesPageHero />
      <CasesGridSection />
    </SiteLayout>
  );
}