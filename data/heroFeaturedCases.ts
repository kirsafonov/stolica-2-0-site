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
    task: "Инъекционная гидроизоляция подвала, остановка водопроявлений и защита кирпичной кладки.",
    secondaryLabel: "Узел",
    secondaryValue: "Подвал",
    result: "Активные протечки остановлены",
    image: "/media/home/case-cover-kolpachny.jpeg",
    imageAlt: "Колпачный переулок, инъекционная гидроизоляция подвала",
    href: "/cases/dom-knopa-kolpachnyy-pereulok",
    isPrimary: true,
  },
  {
    slug: "vanderpark",
    eyebrow: "Жилой комплекс",
    city: "Москва",
    title: "ЖК Вандерпарк",
    task: "Восстановление узлов эксплуатируемой кровли, новая ПВХ-мембрана и устранение постоянных протечек.",
    secondaryLabel: "Узел",
    secondaryValue: "Кровля",
    result: "Проблемные участки восстановлены",
    image: "/media/home/case-cover-vanderpark.jpeg",
    imageAlt: "ЖК Вандерпарк, восстановление эксплуатируемой кровли",
    href: "/cases/zhk-vanderpark",
  },
  {
    slug: "svoboda",
    eyebrow: "Исторический объект",
    city: "Москва",
    title: "Фабрика «Свобода»",
    task: "Противоаварийные работы, переопирание, восстановление кладки и локальное усиление конструкций.",
    secondaryLabel: "Формат",
    secondaryValue: "Усиление",
    result: "Конструкция стабилизирована",
    image: "/media/home/case-cover-svoboda.jpeg",
    imageAlt: "Фабрика Свобода, противоаварийные работы",
    href: "/cases/fabrika-svoboda",
  },
  {
    slug: "sadovye-kvartaly",
    eyebrow: "Жилой комплекс",
    city: "Москва",
    title: "Садовые кварталы",
    task: "Инъекционная гидроизоляция холодных и деформационных швов, трещин и узлов подземной части.",
    secondaryLabel: "Узел",
    secondaryValue: "Швы",
    result: "Водопоступление локализовано",
    image: "/media/home/case-cover-sadovye-kvartaly.jpeg",
    imageAlt: "Садовые кварталы, работа с швами и трещинами",
    href: "/cases/sadovye-kvartaly",
  },
  {
    slug: "mosfilmovskaya",
    eyebrow: "Жилой комплекс",
    city: "Москва",
    title: "ЖК на Мосфильмовской, 74Б",
    task: "Инъектирование холодных швов, трещин и деформационного шва в подземной части паркинга.",
    secondaryLabel: "Узел",
    secondaryValue: "Паркинг",
    result: "Протечки в подземной части устранены",
    image: "/media/home/case-cover-mosfilmovskaya.jpeg",
    imageAlt: "ЖK на Мосфильмовской, инъектирование швов и трещин",
    href: "/cases/zhk-na-mosfilmovskoy-74b",
  },
];

export const primaryHeroFeaturedCase =
  heroFeaturedCases.find((item) => item.isPrimary) ?? heroFeaturedCases[0];