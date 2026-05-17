import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/ui/Section";
import type { Problem } from "@/data/problems";

type DirectionRelatedProblemsProps = {
  problems: Problem[];
};

export function DirectionRelatedProblems({
  problems,
}: DirectionRelatedProblemsProps) {
  if (problems.length === 0) {
    return null;
  }

  return (
    <Section className="direction-problems-section" spacing="sm" tone="muted">
      <Container>
        <div className="direction-problems-section__header">
          <p className="section-kicker">Проблемы простым языком</p>

          <h2 className="direction-problems-section__title">
            С какими ситуациями связано это направление
          </h2>

          <p className="direction-problems-section__description">
            Эти страницы помогают связать инженерные работы с тем, как проблему
            обычно формулирует заказчик: вода в подвале, течёт шов, протекает
            паркинг или мокнет кладка.
          </p>
        </div>

        <div className="direction-problems-section__grid">
          {problems.map((problem) => (
            <Link
              key={problem.slug}
              href={problem.href}
              className="problem-mini-card"
            >
              <h3 className="problem-mini-card__title">
                {problem.title}
              </h3>

              <p className="problem-mini-card__description">
                {problem.description}
              </p>

              <span className="problem-mini-card__link">
                Смотреть проблему
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}