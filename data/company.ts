import type { CompanyData } from "../types";

export const company: CompanyData = {
  brandName: "Столица",
  brandTagline: "Ремонт и восстановление конструкций",

  phones: [
    {
      label: "+7 977 469-76-75",
      href: "tel:+79774697675",
    },
    {
      label: "+7 901 768-80-00",
      href: "tel:+79017688000",
    },
  ],

  email: {
    label: "info@stolica-msk.com",
    href: "mailto:info@stolica-msk.com",
  },

  workingHours: "Ежедневно с 9:00 до 21:00 по Москве",
  region: "Работаем по Москве и Московской области. По отдельным задачам выезжаем на объекты по России.",

  legalName: "ООО «Столица»",
  ogrn: "1237700485032",
  inn: "9706034463",
  kpp: "770601001",
  legalAddress: "119049, город Москва, Житная ул., д. 10, помещ. 6/1",
  director: "Попов Михаил Владимирович",
};