import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/ui/Section";
import type { Problem } from "@/data/problems";

type ProblemPageHeroProps = {
  problem: Problem;
};

export function ProblemPageHero({ problem }: ProblemPageHeroProps) {
  return (
    <Section className="problem-page-hero" spacing="sm" tone="dark">
      <Container>
        <div className="problem-page-hero__content">
          <p className="problem-page-hero__eyebrow">Проблема</p>

          <h1 className="problem-page-hero__title">{problem.title}</h1>

          <p className="problem-page-hero__description">
            {problem.lead}
          </p>

          <div className="problem-page-hero__actions">
            <Button href="/directions" variant="primary" size="lg">
              Смотреть направления работ
            </Button>

            <Button href="/#estimate" variant="secondary" size="lg">
              Обсудить проблему
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}