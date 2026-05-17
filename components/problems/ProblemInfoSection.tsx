import { Container } from "@/components/layout/Container";
import { Section } from "@/components/ui/Section";
import type { Problem } from "@/data/problems";

type ProblemInfoSectionProps = {
  problem: Problem;
};

export function ProblemInfoSection({ problem }: ProblemInfoSectionProps) {
  return (
    <Section className="problem-info-section" spacing="lg">
      <Container>
        <div className="problem-info-section__grid">
          <article className="problem-info-card problem-info-card--primary">
            <p className="problem-info-card__eyebrow">Возможные причины</p>

            <h2 className="problem-info-card__title">
              Почему это может происходить
            </h2>

            <ul className="problem-info-list">
              {problem.causes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="problem-info-card">
            <p className="problem-info-card__eyebrow">Важно</p>

            <h2 className="problem-info-card__title">
              Чего не стоит делать без диагностики
            </h2>

            <ul className="problem-info-list">
              {problem.whatNotToDo.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </Container>
    </Section>
  );
}