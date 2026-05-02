import type { Metadata } from "next";

import { SiteLayout } from "@/components/layout/SiteLayout";
import { LegalPageSection } from "@/components/sections/LegalPageSection";
import { company } from "@/data/company";
import { personalDataConsent } from "@/data/legal";

export const metadata: Metadata = {
  title: `Согласие на обработку персональных данных — ${company.legalName}`,
  description:
    "Согласие пользователя на обработку персональных данных на сайте ООО «Столица».",
  alternates: {
    canonical: "/personal-data-consent",
  },
};

export default function PersonalDataConsentPage() {
  return (
    <SiteLayout>
      <LegalPageSection content={personalDataConsent} />
    </SiteLayout>
  );
}