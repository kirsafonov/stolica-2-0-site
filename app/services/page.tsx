import type { Metadata } from "next";

import { SiteLayout } from "@/components/layout/SiteLayout";
import { FeaturedCasesSection } from "@/components/sections/FeaturedCasesSection";
import { ObjectTypesSection } from "@/components/sections/ObjectTypesSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { ServicesCoreSection } from "@/components/sections/ServicesCoreSection";
import { ServicesPageHero } from "@/components/sections/ServicesPageHero";
import { WorkflowSection } from "@/components/sections/WorkflowSection";
import { ServicesDirectionsSection } from "@/components/sections/ServicesDirectionsSection";
import { HomeProblemsSection } from "@/components/sections/HomeProblemsSection";
import { CtaWithForm } from "@/components/sections/CtaWithForm";

export const metadata: Metadata = {
  title:
    "Услуги: ремонтно-восстановительные работы, гидроизоляция и восстановление конструкций",
  description:
    "ООО «Столица» выполняет ремонтно-восстановительные работы: инъекционную гидроизоляцию, устранение протечек, герметизацию швов и трещин, восстановление бетона, кирпичной кладки, кровельных узлов и подземных конструкций.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Услуги ООО «Столица»: ремонтно-восстановительные работы и гидроизоляция",
    description:
      "Направления работ: устранение протечек, инъекционная гидроизоляция, швы, трещины, вводы коммуникаций, бетон, кладка, кровельные узлы и подземные конструкции.",
    url: "/services",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <SiteLayout>
      <ServicesPageHero />
      <ServicesDirectionsSection />
      <HomeProblemsSection />
      <CtaWithForm />
    </SiteLayout>
  );
}