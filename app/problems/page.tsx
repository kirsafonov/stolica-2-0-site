import type { Metadata } from "next";

import { SiteLayout } from "@/components/layout/SiteLayout";
import { ProblemsGridSection } from "@/components/sections/ProblemsGridSection";
import { ProblemsPageHero } from "@/components/sections/ProblemsPageHero";

export const metadata: Metadata = {
  title: "Проблемы: вода в подвале, течёт крыша, протекает паркинг — ООО «Столица»",
  description:
    "Разбор типовых проблем: вода в подвале, течёт подвал, сырость, вода через стену, течёт крыша, протекает паркинг, течёт шов, трещина в бетоне и ввод трубы.",
  alternates: {
    canonical: "/problems",
  },
  openGraph: {
    title: "Типовые проблемы объектов — ООО «Столица»",
    description:
      "Простым языком о сложных протечках, водопроявлениях, трещинах, мокрой кладке, паркингах, подвалах и кровельных узлах.",
    url: "/problems",
    type: "website",
  },
};

export default function ProblemsPage() {
  return (
    <SiteLayout>
      <ProblemsPageHero />
      <ProblemsGridSection />
    </SiteLayout>
  );
}