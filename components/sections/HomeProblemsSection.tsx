import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getProblemBySlug } from "@/data/problems";
import type { Problem } from "@/data/problems";

const homeProblemSlugs = [
  "water-in-basement",
  "basement-leak",
  "leaking-parking",
  "leaking-roof",
  "leaking-joint",
  "leaking-pipe-penetration",
];

const homeProblems = homeProblemSlugs
  .map((slug) => getProblemBySlug(slug))
  .filter(Boolean) as Problem[];

export function HomeProblemsSection() {
  return (
    <Section className="home-problems-section" spacing="sm" tone="muted">
      <Container>
        <SectionHeading
          eyebrow="Проблемы объектов"
          title="Когда проблему проще описать словами: течёт, мокнет, появилась вода"
          description="Не обязательно знать технический термин. Часто достаточно описать, где появилась вода или какой узел вызывает сомнение — мы поможем определить возможную причину и следующий шаг."
        />

        <div className="home-problems-section__grid">
          {homeProblems.map((problem) => (
            <Link
              key={problem.slug}
              href={problem.href}
              className="home-problem-card"
            >
              <h3 className="home-problem-card__title">
                {problem.shortTitle}
              </h3>

              <p className="home-problem-card__description">
                {problem.description}
              </p>

              <span className="home-problem-card__link">
                Разобрать проблему
              </span>
            </Link>
          ))}
        </div>

        <div className="home-problems-section__actions">
          <Link href="/problems" className="home-problems-section__all-link">
            Все типовые проблемы
          </Link>
        </div>
      </Container>
    </Section>
  );
}