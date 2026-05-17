import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SiteLayout } from "@/components/layout/SiteLayout";
import { CaseGallery } from "@/components/case/CaseGallery";
import { CaseMeta } from "@/components/case/CaseMeta";
import { CasePageHero } from "@/components/case/CasePageHero";
import { CaseTextSection } from "@/components/case/CaseTextSection";
import { OtherCases } from "@/components/case/OtherCases";
import { cases, getCaseBySlug, getRelatedCases } from "@/data/cases";
import { CaseTagsSection } from "@/components/case/CaseTagsSection";
import { getDirectionsBySlugs } from "@/data/directions";
import { getProblemsBySlugs } from "@/data/problems";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  getBreadcrumbJsonLd,
  getCaseArticleJsonLd,
} from "@/lib/jsonLd";

type CasePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return cases.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: CasePageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseItem = getCaseBySlug(slug);

  if (!caseItem) {
    return {};
  }

  return {
    title: caseItem.seo.title,
    description: caseItem.seo.description,
    alternates: {
      canonical: caseItem.href,
    },
    openGraph: {
      title: caseItem.seo.title,
      description: caseItem.seo.description,
      url: caseItem.href,
      type: "article",
      images: [
        {
          url: caseItem.image,
          alt: caseItem.imageAlt,
        },
      ],
    },
  };
}

export default async function CasePage({ params }: CasePageProps) {
  const { slug } = await params;
  const caseItem = getCaseBySlug(slug);

  if (!caseItem) {
    notFound();
  }

  const relatedCases = getRelatedCases(caseItem);
  const caseDirections = getDirectionsBySlugs(caseItem.directionSlugs);
  const caseProblems = getProblemsBySlugs(caseItem.problemSlugs);

  return (
    <SiteLayout>
      <JsonLd
        data={[
          getBreadcrumbJsonLd([
            { name: "Главная", href: "/" },
            { name: "Кейсы", href: "/cases" },
            { name: caseItem.shortTitle, href: caseItem.href },
          ]),
          getCaseArticleJsonLd(caseItem),
        ]}
      />
      <CasePageHero item={caseItem} />
      <CaseMeta item={caseItem} />

      <CaseTagsSection
        directions={caseDirections}
        problems={caseProblems}
      />

      {caseItem.sections.map((section) => (
        <CaseTextSection
          key={section.title}
          title={section.title}
          text={section.text}
        />
      ))}

      <CaseGallery images={caseItem.gallery} />
      <OtherCases items={relatedCases} />
    </SiteLayout>
  );
}