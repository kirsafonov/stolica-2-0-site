export type NavItem = {
  label: string;
  href: string;
};

export type ContactLink = {
  label: string;
  href: string;
};

export type CompanyData = {
  brandName: string;
  brandTagline: string;
  phones: ContactLink[];
  email: ContactLink;
  workingHours: string;
  region: string;
  legalName: string;
  ogrn: string;
  inn: string;
  kpp: string;
  legalAddress: string;
  director: string;
};

export type MetricItem = {
  value: string;
  text: string;
};

export type ServiceItem = {
  title: string;
  description: string;
  variant: "core" | "extra";
};

export type FeaturedCaseItem = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
};

export type DocumentItem = {
  title: string;
  description: string;
  preview?: string;
  previewAlt?: string;
  href?: string;
};

export type ObjectTypeItem = {
  title: string;
  text: string;
};

export type WorkflowStep = {
  number: string;
  title: string;
  text: string;
};

export type FaqEntry = {
  question: string;
  answer: string;
};