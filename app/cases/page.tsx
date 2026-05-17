import type { Metadata } from "next";

import { SiteLayout } from "@/components/layout/SiteLayout";
import { CasesGridSection } from "@/components/sections/CasesGridSection";
import { CasesPageHero } from "@/components/sections/CasesPageHero";

export const metadata: Metadata = {
  title: "Кейсы по ремонтно-восстановительным работам и устранению протечек",
  description:
    "Кейсы ООО «Столица»: ремонтно-восстановительные работы, инъекционная гидроизоляция, устранение протечек, герметизация швов и трещин, восстановление бетона, кладки, кровельных узлов и подземных конструкций.",
  alternates: {
    canonical: "/cases",
  },
  openGraph: {
    title: "Кейсы ООО «Столица»",
    description:
      "Реальные объекты: жилые комплексы, исторические здания, подземные конструкции, кровельные узлы, швы, трещины и вводы коммуникаций.",
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