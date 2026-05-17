import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/ui/Section";
import { problems } from "@/data/problems";
import { getCasesByProblemSlug } from "@/data/cases";
import { formatCountRu } from "@/lib/pluralize";

export function ProblemsGridSection() {
  return (
    <Section className="problems-grid-section" spacing="lg">
      <Container>
        <div className="problems-grid-section__header">
          <p className="section-kicker">Простым языком</p>

          <h2 className="problems-grid-section__title">
            Типовые проблемы, за которыми стоят инженерные причины
          </h2>

          <p className="problems-grid-section__description">
            На этих страницах объясняем, что может происходить с объектом, какие
            причины бывают у протечек и какие направления работ могут потребоваться.
          </p>
        </div>

        <div className="problems-grid-section__grid">
          {problems.map((problem) => {
            const relatedCases = getCasesByProblemSlug(problem.slug);

            return (
              <Link
                key={problem.slug}
                href={problem.href}
                className="problem-card"
              >
                <div className="problem-card__content">
                  <p className="problem-card__eyebrow">
                    {relatedCases.length > 0
                      ? formatCountRu(relatedCases.length, [
                          "кейс",
                          "кейса",
                          "кейсов",
                        ])
                      : "Проблема"}
                  </p>

                  <h3 className="problem-card__title">{problem.title}</h3>

                  <p className="problem-card__description">
                    {problem.description}
                  </p>
                </div>

                <span className="problem-card__link">
                  Разобрать проблему
                </span>
              </Link>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}