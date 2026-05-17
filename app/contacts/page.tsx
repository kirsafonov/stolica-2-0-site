import type { Metadata } from "next";

import { SiteLayout } from "@/components/layout/SiteLayout";
import { ContactsDetailsSection } from "@/components/sections/ContactsDetailsSection";
import { ContactsPageHero } from "@/components/sections/ContactsPageHero";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Контакты ООО «Столица» — ремонтно-восстановительные работы в Москве",
  description:
    "Контакты ООО «Столица»: телефоны, email, режим работы, регион выезда и реквизиты компании. Ремонтно-восстановительные работы, гидроизоляция, устранение протечек, восстановление бетона и кладки.",
  alternates: {
    canonical: "/contacts",
  },
  openGraph: {
    title: `Контакты ${company.legalName}`,
    description:
      "Связь с ООО «Столица»: ремонтно-восстановительные работы, гидроизоляция, устранение протечек, герметизация швов, трещин и вводов коммуникаций.",
    url: "/contacts",
    type: "website",
  },
};

export default function ContactsPage() {
  return (
    <SiteLayout>
      <ContactsPageHero />
      <ContactsDetailsSection />
    </SiteLayout>
  );
}