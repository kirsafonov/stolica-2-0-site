"use client";

import { useRef } from "react";

import { Button } from "@/components/ui/Button";
import { CaseCard } from "@/components/ui/CaseCard";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featuredCases } from "@/data/featuredCases";

export function FeaturedCasesSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  function scrollTrack(direction: "prev" | "next") {
    const track = trackRef.current;

    if (!track) return;

    const scrollAmount = Math.round(track.clientWidth * 0.86);

    track.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  }

  return (
    <Section className="featured-cases-section" spacing="sm" tone="dark">
      <Container>
        <div className="featured-cases-section__header">
          <SectionHeading
            eyebrow="Кейсы"
            title="Реальные объекты и реальные инженерные решения"
            description="Показываем не абстрактные обещания, а реальные объекты, где была конкретная проблема, понятное решение и достигнутый результат."
          />

          <div
            className="featured-cases-section__controls"
            aria-label="Прокрутка кейсов"
          >
            <button
              type="button"
              className="featured-cases-section__arrow"
              aria-label="Прокрутить кейсы назад"
              onClick={() => scrollTrack("prev")}
            >
              ←
            </button>

            <button
              type="button"
              className="featured-cases-section__arrow"
              aria-label="Прокрутить кейсы вперёд"
              onClick={() => scrollTrack("next")}
            >
              →
            </button>
          </div>
        </div>

        <div ref={trackRef} className="featured-cases-section__grid">
          {featuredCases.map((item) => (
            <CaseCard
              key={item.href}
              title={item.title}
              description={item.description}
              image={item.image}
              imageAlt={item.imageAlt}
              href={item.href}
            />
          ))}
        </div>

        <div className="featured-cases-section__actions">
          <Button href="/cases" variant="secondary" size="lg">
            Все кейсы
          </Button>
        </div>
      </Container>
    </Section>
  );
}