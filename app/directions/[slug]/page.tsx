import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SiteLayout } from "@/components/layout/SiteLayout";
import { DirectionCasesSection } from "@/components/directions/DirectionCasesSection";
import { DirectionInfoSection } from "@/components/directions/DirectionInfoSection";
import { DirectionPageHero } from "@/components/directions/DirectionPageHero";
import { DirectionRelatedProblems } from "@/components/directions/DirectionRelatedProblems";
import { directions, getDirectionBySlug } from "@/data/directions";
import { getProblemsBySlugs } from "@/data/problems";
import { getCasesByDirectionSlug } from "@/data/cases";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  getBreadcrumbJsonLd,
  getDirectionServiceJsonLd,
} from "@/lib/jsonLd";

type DirectionPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return directions.map((direction) => ({
    slug: direction.slug,
  }));
}

export async function generateMetadata({
  params,
}: DirectionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const direction = getDirectionBySlug(slug);

  if (!direction) {
    return {};
  }

  return {
    title: direction.seo.title,
    description: direction.seo.description,
    alternates: {
      canonical: direction.href,
    },
    openGraph: {
      title: direction.seo.title,
      description: direction.seo.description,
      url: direction.href,
      type: "website",
    },
  };
}

export default async function DirectionPage({ params }: DirectionPageProps) {
  const { slug } = await params;
  const direction = getDirectionBySlug(slug);

  if (!direction) {
    notFound();
  }

  const relatedProblems = getProblemsBySlugs(direction.relatedProblemSlugs);
  const relatedCases = getCasesByDirectionSlug(direction.slug);

  return (
    
    <SiteLayout>
      <JsonLd
        data={[
          getBreadcrumbJsonLd([
            { name: "Главная", href: "/" },
            { name: "Направления", href: "/directions" },
            { name: direction.shortTitle, href: direction.href },
          ]),
          getDirectionServiceJsonLd(direction),
        ]}
      />
      <DirectionPageHero direction={direction} />
      <DirectionInfoSection direction={direction} />
      <DirectionRelatedProblems problems={relatedProblems} />
      <DirectionCasesSection direction={direction} cases={relatedCases} />
    </SiteLayout>
  );
}