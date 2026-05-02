import type { NavItem } from "../types";

export type HeaderNavItem = {
  label: string;
  href: string;
};

export const headerNav: HeaderNavItem[] = [
  { label: "Услуги", href: "/services" },
  { label: "Кейсы", href: "/cases" },
  { label: "Цены", href: "/#prices" },
  { label: "О компании", href: "/#trust" },
  { label: "FAQ", href: "/#faq" },
  { label: "Контакты", href: "/contacts" },
];

export const headerContacts = {
  phoneLabel: "+7 (901) 768-80-00",
  phoneHref: "tel:+79017688000",
  ctaLabel: "Получить расчёт",
  ctaHref: "/#estimate",
};

export const navigation: NavItem[] = [
  {
    label: "Главная",
    href: "/",
  },
  {
    label: "Услуги",
    href: "/services",
  },
  {
    label: "Кейсы",
    href: "/cases",
  },
  {
    label: "Получить расчёт",
    href: "/#estimate",
  },
  {
    label: "Контакты",
    href: "/contacts",
  },
];

export const legalNavigation: NavItem[] = [
  {
    label: "Политика конфиденциальности",
    href: "/privacy-policy",
  },
  {
    label: "Согласие на обработку персональных данных",
    href: "/personal-data-consent",
  },
];