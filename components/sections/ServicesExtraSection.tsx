"use client";

import { useRef } from "react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/ui/Section";
import { extraServices } from "@/data/services";

export function ServicesExtraSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  function scrollTrack(direction: "prev" | "next") {
    const track = trackRef.current;

    if (!track) return;

    const scrollAmount = Math.round(track.clientWidth * 0.82);

    track.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  }

  return (
    <Section className="services-extra-section" spacing="md">
      <Container>
        <div className="services-extra-section__header">
          <div>
            <p className="section-kicker">Дополнительные направления</p>

            <h2 className="services-extra-section__title">
              Работы, которые дополняют основную специализацию
            </h2>

            <p className="services-extra-section__description">
              Эти направления не заменяют основную специализацию, а дополняют её
              там, где объект требует комплексного подхода.
            </p>
          </div>

          <div className="services-extra-section__controls" aria-label="Прокрутка направлений">
            <button
              type="button"
              className="services-extra-section__arrow"
              aria-label="Прокрутить назад"
              onClick={() => scrollTrack("prev")}
            >
              ←
            </button>

            <button
              type="button"
              className="services-extra-section__arrow"
              aria-label="Прокрутить вперёд"
              onClick={() => scrollTrack("next")}
            >
              →
            </button>
          </div>
        </div>

        <div ref={trackRef} className="services-extra-section__track">
          {extraServices.map((service) => (
            <article key={service.title} className="services-extra-card">
              <h3 className="services-extra-card__title">{service.title}</h3>
              <p className="services-extra-card__text">{service.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}