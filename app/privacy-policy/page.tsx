import type { Metadata } from "next";

import { SiteLayout } from "@/components/layout/SiteLayout";
import { LegalPageSection } from "@/components/sections/LegalPageSection";
import { company } from "@/data/company";
import { privacyPolicy } from "@/data/legal";

export const metadata: Metadata = {
  title: `Политика конфиденциальности — ${company.legalName}`,
  description:
    "Политика конфиденциальности и обработки персональных данных на сайте ООО «Столица».",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <SiteLayout>
      <LegalPageSection content={privacyPolicy} />
    </SiteLayout>
  );
}