import Link from "next/link";

import {
  primaryHeroFeaturedCase,
} from "@/data/heroFeaturedCases";
import { HeroFeaturedCaseCard } from "@/components/sections/HeroFeaturedCaseCard";

const heroPoints = [
  "Обследование перед работами",
  "Договор и гарантия",
  "Частные и коммерческие объекты",
  "Москва и Московская область",
];

export function HeroSection() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="hero__inner">
          <div className="hero__content">
            <h1 className="hero__title">
              Инъекционная гидроизоляция и устранение сложных протечек
            </h1>

            <p className="hero__description">
              Работаем со сложными протечками, холодными и деформационными
              швами, трещинами, вводами инженерных коммуникаций и подземными
              частями зданий.
            </p>

            <div className="hero__actions">
              <Link href="contacts" className="hero__button hero__button--primary">
                Получить консультацию
              </Link>

              <Link href="/cases" className="hero__button hero__button--secondary">
                Смотреть кейсы
              </Link>
            </div>

            <ul className="hero__points" aria-label="Преимущества">
              {heroPoints.map((point) => (
                <li key={point} className="hero__point">
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="hero__aside">
            <HeroFeaturedCaseCard item={primaryHeroFeaturedCase} />
          </div>
        </div>
      </div>
    </section>
  );
}