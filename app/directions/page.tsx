import type { Metadata } from "next";

import { SiteLayout } from "@/components/layout/SiteLayout";
import { DirectionsGridSection } from "@/components/sections/DirectionsGridSection";
import { DirectionsPageHero } from "@/components/sections/DirectionsPageHero";

export const metadata: Metadata = {
  title:
    "Направления ремонтно-восстановительных работ — ООО «Столица»",
  description:
    "Инженерные направления работ ООО «Столица»: ремонтно-восстановительные работы, инъекционная гидроизоляция, устранение протечек, герметизация швов и трещин, ремонт бетона, кладки, кровельных узлов и подземных конструкций.",
  alternates: {
    canonical: "/directions",
  },
  openGraph: {
    title: "Направления работ ООО «Столица»",
    description:
      "Справочник направлений: ремонтно-восстановительные работы, гидроизоляция, бетон, кладка, швы, трещины, вводы коммуникаций и кровельные узлы.",
    url: "/directions",
    type: "website",
  },
};

export default function DirectionsPage() {
  return (
    <SiteLayout>
      <DirectionsPageHero />
      <DirectionsGridSection />
    </SiteLayout>
  );
}