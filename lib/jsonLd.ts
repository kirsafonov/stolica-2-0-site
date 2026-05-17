import type { CaseItem } from "@/data/cases";
import { company } from "@/data/company";
import type { Direction } from "@/data/directions";
import type { Problem } from "@/data/problems";

export const siteUrl = "https://stolica-msk.com";

type BreadcrumbItem = {
  name: string;
  href: string;
};

function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

function getPhoneLabel() {
  return company.phones?.[0]?.label || "";
}

function getLogoUrl() {
  return absoluteUrl("/branding/logo-wordmark.png");
}

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: company.legalName,
    alternateName: "Столица",
    legalName: company.legalName,
    url: siteUrl,
    logo: getLogoUrl(),
    email: company.email.label,
    telephone: getPhoneLabel(),
    taxID: company.inn,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.legalAddress,
      addressCountry: "RU",
    },
  };
}

export function getWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: "ООО «Столица»",
    url: siteUrl,
    publisher: {
      "@id": `${siteUrl}/#organization`,
    },
  };
}

export function getBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };
}

export function getDirectionServiceJsonLd(direction: Direction) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(direction.href)}#service`,
    name: direction.title,
    description: direction.description,
    url: absoluteUrl(direction.href),
    serviceType: direction.title,
    provider: {
      "@id": `${siteUrl}/#organization`,
    },
    areaServed: ["Москва", "Московская область"],
  };
}

export function getProblemPageJsonLd(problem: Problem) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl(problem.href)}#webpage`,
    name: problem.seo.title,
    description: problem.seo.description,
    url: absoluteUrl(problem.href),
    isPartOf: {
      "@id": `${siteUrl}/#website`,
    },
    publisher: {
      "@id": `${siteUrl}/#organization`,
    },
  };
}

export function getCaseArticleJsonLd(caseItem: CaseItem) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${absoluteUrl(caseItem.href)}#article`,
    headline: caseItem.seo.title,
    description: caseItem.seo.description,
    image: absoluteUrl(caseItem.image),
    url: absoluteUrl(caseItem.href),
    mainEntityOfPage: absoluteUrl(caseItem.href),
    publisher: {
      "@id": `${siteUrl}/#organization`,
    },
  };
}