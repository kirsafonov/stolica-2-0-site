import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SiteLayout } from "@/components/layout/SiteLayout";
import { ProblemCasesSection } from "@/components/problems/ProblemCasesSection";
import { ProblemInfoSection } from "@/components/problems/ProblemInfoSection";
import { ProblemPageHero } from "@/components/problems/ProblemPageHero";
import { ProblemRelatedDirections } from "@/components/problems/ProblemRelatedDirections";
import { getCasesByProblemSlug } from "@/data/cases";
import { getDirectionsBySlugs } from "@/data/directions";
import { getProblemBySlug, problems } from "@/data/problems";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  getBreadcrumbJsonLd,
  getProblemPageJsonLd,
} from "@/lib/jsonLd";

type ProblemPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return problems.map((problem) => ({
    slug: problem.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProblemPageProps): Promise<Metadata> {
  const { slug } = await params;
  const problem = getProblemBySlug(slug);

  if (!problem) {
    return {};
  }

  return {
    title: problem.seo.title,
    description: problem.seo.description,
    alternates: {
      canonical: problem.href,
    },
    openGraph: {
      title: problem.seo.title,
      description: problem.seo.description,
      url: problem.href,
      type: "website",
    },
  };
}

export default async function ProblemPage({ params }: ProblemPageProps) {
  const { slug } = await params;
  const problem = getProblemBySlug(slug);

  if (!problem) {
    notFound();
  }

  const relatedDirections = getDirectionsBySlugs(problem.relatedDirectionSlugs);
  const relatedCases = getCasesByProblemSlug(problem.slug);

  return (
    <SiteLayout>
      <JsonLd
        data={[
          getBreadcrumbJsonLd([
            { name: "Главная", href: "/" },
            { name: "Проблемы", href: "/problems" },
            { name: problem.shortTitle, href: problem.href },
          ]),
          getProblemPageJsonLd(problem),
        ]}
      />
      <ProblemPageHero problem={problem} />
      <ProblemInfoSection problem={problem} />
      <ProblemRelatedDirections directions={relatedDirections} />
      <ProblemCasesSection problem={problem} cases={relatedCases} />
    </SiteLayout>
  );
}