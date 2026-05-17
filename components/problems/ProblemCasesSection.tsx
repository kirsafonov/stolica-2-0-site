import { Button } from "@/components/ui/Button";
import { CaseCard } from "@/components/ui/CaseCard";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/ui/Section";
import type { CaseItem } from "@/data/cases";
import type { Problem } from "@/data/problems";
import { formatCountRu } from "@/lib/pluralize";

type ProblemCasesSectionProps = {
  problem: Problem;
  cases: CaseItem[];
};

export function ProblemCasesSection({
  problem,
  cases,
}: ProblemCasesSectionProps) {
  return (
    <Section className="problem-cases-section" spacing="lg" tone="dark">
      <Container>
        <div className="problem-cases-section__header">
          <p className="section-kicker">Кейсы</p>

          <h2 className="problem-cases-section__title">
            Объекты с похожей проблемой
          </h2>

          <p className="problem-cases-section__description">
            {cases.length > 0
              ? `По теме «${problem.shortTitle}» на сайте есть ${formatCountRu(
                  cases.length,
                  ["кейс", "кейса", "кейсов"],
                )}.`
              : "Для этой проблемы пока нет опубликованных кейсов, но она включена в справочник как типовая ситуация для диагностики."}
          </p>
        </div>

        {cases.length > 0 ? (
          <div className="problem-cases-section__grid">
            {cases.map((item) => (
              <CaseCard
                key={item.href}
                title={item.shortTitle}
                description={item.description}
                image={item.image}
                imageAlt={item.imageAlt}
                href={item.href}
              />
            ))}
          </div>
        ) : null}

        <div className="problem-cases-section__actions">
          <Button href="/#estimate" variant="secondary" size="lg">
            Обсудить похожую проблему
          </Button>
        </div>
      </Container>
    </Section>
  );
}