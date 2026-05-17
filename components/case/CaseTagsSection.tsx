import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/ui/Section";
import type { Direction } from "@/data/directions";
import type { Problem } from "@/data/problems";

type CaseTagsSectionProps = {
  directions: Direction[];
  problems: Problem[];
};

export function CaseTagsSection({
  directions,
  problems,
}: CaseTagsSectionProps) {
  if (directions.length === 0 && problems.length === 0) {
    return null;
  }

  return (
    <Section className="case-tags-section" spacing="sm">
      <Container>
        <div className="case-tags-section__grid">
          {directions.length > 0 ? (
            <div className="case-tags-group">
              <p className="case-tags-group__eyebrow">Выполненные направления</p>

              <h2 className="case-tags-group__title">
                Какие работы применялись на объекте
              </h2>

              <div className="case-tags">
                {directions.map((direction) => (
                  <Link
                    key={direction.slug}
                    href={direction.href}
                    className="case-tag"
                  >
                    {direction.shortTitle}
                  </Link>
                ))}
              </div>
            </div>
          ) : null}

          {problems.length > 0 ? (
            <div className="case-tags-group">
              <p className="case-tags-group__eyebrow">Похожие проблемы</p>

              <h2 className="case-tags-group__title">
                С какими ситуациями связан кейс
              </h2>

              <div className="case-tags">
                {problems.map((problem) => (
                  <Link
                    key={problem.slug}
                    href={problem.href}
                    className="case-tag case-tag--problem"
                  >
                    {problem.shortTitle}
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </Container>
    </Section>
  );
}