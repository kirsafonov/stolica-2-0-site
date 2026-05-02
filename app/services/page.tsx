import type { Metadata } from "next";

import { SiteLayout } from "@/components/layout/SiteLayout";
import { FeaturedCasesSection } from "@/components/sections/FeaturedCasesSection";
import { ObjectTypesSection } from "@/components/sections/ObjectTypesSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { ServicesCoreSection } from "@/components/sections/ServicesCoreSection";
import { ServicesExtraSection } from "@/components/sections/ServicesExtraSection";
import { ServicesPageHero } from "@/components/sections/ServicesPageHero";
import { WorkflowSection } from "@/components/sections/WorkflowSection";

export const metadata: Metadata = {
  title:
    "Услуги по инъекционной гидроизоляции и устранению протечек в Москве",
  description:
    "ООО «Столица»: инъекционная гидроизоляция, герметизация холодных и деформационных швов, устранение протечек, гидроизоляция подвалов, трещин и вводов коммуникаций.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Услуги ООО «Столица»",
    description:
      "Инъекционная гидроизоляция, герметизация швов, устранение протечек, работа с подвалами, паркингами, фундаментами и техническими помещениями.",
    url: "/services",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <SiteLayout>
      <ServicesPageHero />
      <ServicesCoreSection />
      <ServicesExtraSection />
      <ObjectTypesSection />
      <PricingSection />
      <WorkflowSection />
      <FeaturedCasesSection />
    </SiteLayout>
  );
}