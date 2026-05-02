import { SiteLayout } from "@/components/layout/SiteLayout";
import { HeroSection } from "@/components/sections/HeroSection";
import { MetricsSection } from "@/components/sections/MetricsSection";
import { ServicesCoreSection } from "@/components/sections/ServicesCoreSection";
import { ServicesExtraSection } from "@/components/sections/ServicesExtraSection";
import { ObjectTypesSection } from "@/components/sections/ObjectTypesSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { FeaturedCasesSection } from "@/components/sections/FeaturedCasesSection";
import { WorkflowSection } from "@/components/sections/WorkflowSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaWithForm } from "@/components/sections/CtaWithForm";
import { PricingSection } from "@/components/sections/PricingSection";

export default function HomePage() {
  return (
    <SiteLayout>
      <HeroSection />
      <MetricsSection />
      <ServicesCoreSection />
      <ServicesExtraSection />
      <ObjectTypesSection />
      <TrustSection />
      <FeaturedCasesSection />
      <WorkflowSection />
      <PricingSection />
      <FaqSection />
      <CtaWithForm />
    </SiteLayout>
  );
}
