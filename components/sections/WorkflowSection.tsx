"use client";

import { useRef } from "react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StepCard } from "@/components/ui/StepCard";
import { workflow } from "@/data/workflow";

export function WorkflowSection() {
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
    <Section className="workflow-section" spacing="sm">
      <Container>
        <div className="workflow-section__header">
          <SectionHeading eyebrow="Подход" title="От первичной диагностики до проверенного результата" />

          <div className="workflow-section__controls" aria-label="Прокрутка этапов">
            <button
              type="button"
              className="workflow-section__arrow"
              aria-label="Прокрутить этапы назад"
              onClick={() => scrollTrack("prev")}
            >
              ←
            </button>

            <button
              type="button"
              className="workflow-section__arrow"
              aria-label="Прокрутить этапы вперёд"
              onClick={() => scrollTrack("next")}
            >
              →
            </button>
          </div>
        </div>

        <div ref={trackRef} className="workflow-section__grid">
          {workflow.map((step) => (
            <StepCard
              key={step.number}
              number={step.number}
              title={step.title}
              text={step.text}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}