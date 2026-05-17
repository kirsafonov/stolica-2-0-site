export type HeroFeaturedCase = {
  slug: string;
  eyebrow: string;
  city: string;
  title: string;
  task: string;
  secondaryLabel: string;
  secondaryValue: string;
  result: string;
  image: string;
  imageAlt: string;
  href: string;
  isPrimary?: boolean;
};

export const heroFeaturedCases: HeroFeaturedCase[] = [
  {
    slug: "kolpachny",
    eyebrow: "Исторический объект",
    city: "Москва",
    title: "Колпачный переулок",
    task:
      "Остановка водопроявлений, инъекционная гидроизоляция и защита кирпичной кладки в подземной части исторического здания.",
    secondaryLabel: "Зона",
    secondaryValue: "Подвал",
    result: "Водопроявления локализованы",
    image: "/media/home/case-cover-kolpachny.jpeg",
    imageAlt:
      "Колпачный переулок, ремонтно-восстановительные работы и гидроизоляция подземной части",
    href: "/cases/dom-knopa-kolpachnyy-pereulok",
    isPrimary: true,
  },
  {
    slug: "vanderpark",
    eyebrow: "Жилой комплекс",
    city: "Москва",
    title: "ЖК Вандерпарк",
    task:
      "Ремонт узлов эксплуатируемой кровли, восстановление гидроизоляции, водоотвода и примыканий.",
    secondaryLabel: "Зона",
    secondaryValue: "Кровля",
    result: "Кровельные узлы восстановлены",
    image: "/media/home/case-cover-zhk-vanderpark.jpeg",
    imageAlt:
      "ЖК Вандерпарк, ремонт узлов эксплуатируемой кровли и восстановление гидроизоляции",
    href: "/cases/zhk-vanderpark",
  },
  {
    slug: "svoboda",
    eyebrow: "Исторический объект",
    city: "Москва",
    title: "Фабрика «Свобода»",
    task:
      "Локальные противоаварийные работы, переопирание, восстановление бетона, кладки и проёмов.",
    secondaryLabel: "Зона",
    secondaryValue: "Подвал",
    result: "Конструкции стабилизированы",
    image: "/media/home/case-cover-svoboda.jpeg",
    imageAlt:
      "Фабрика Свобода, ремонтно-восстановительные и противоаварийные работы",
    href: "/cases/fabrika-svoboda",
  },
  {
    slug: "sadovye-kvartaly",
    eyebrow: "Жилой комплекс",
    city: "Москва",
    title: "Садовые кварталы",
    task:
      "Комплексная инъекционная гидроизоляция холодных и деформационных швов, трещин и зон водопоступления.",
    secondaryLabel: "Зона",
    secondaryValue: "Подвал",
    result: "Водопоступление локализовано",
    image: "/media/home/case-cover-sadovye-kvartaly.jpeg",
    imageAlt:
      "Садовые кварталы, инъекционная гидроизоляция швов и трещин в подземной части",
    href: "/cases/sadovye-kvartaly",
  },
  {
    slug: "mosfilmovskaya",
    eyebrow: "Жилой комплекс",
    city: "Москва",
    title: "ЖК на Мосфильмовской, 74Б",
    task:
      "Инъекционная гидроизоляция холодных швов, трещин и деформационного шва в подземной части жилого комплекса.",
    secondaryLabel: "Зона",
    secondaryValue: "Подвал",
    result: "Протечки в подземной части устранены",
    image: "/media/home/case-cover-mosfilmovskaya.jpeg",
    imageAlt:
      "ЖК на Мосфильмовской 74Б, инъекционная гидроизоляция швов и трещин",
    href: "/cases/zhk-na-mosfilmovskoy-74b",
  },
];

export const primaryHeroFeaturedCase =
  heroFeaturedCases.find((item) => item.isPrimary) ?? heroFeaturedCases[0];