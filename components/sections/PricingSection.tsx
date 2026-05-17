import { Container } from "@/components/layout/Container";
import { Section } from "@/components/ui/Section";
import { pricingItems } from "@/data/pricing";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PricingSection() {
  return (
    <Section id="prices" className="pricing-section" spacing="sm">
      <Container>
        <SectionHeading
          eyebrow="Стоимость"
          title="Стоимость зависит от причины проблемы, узла и объёма работ"
          description="Мы не даём универсальную цену без понимания задачи: одинаковое проявление — например вода в подвале, течь по шву или протечка кровли — может требовать разных инженерных решений."
        />

        <div className="pricing-section__card">
          {pricingItems.map((item) => (
            <article className="pricing-card" key={item.title}>
              <h3 className="pricing-card__title">{item.title}</h3>
              <p className="pricing-card__text">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="pricing-section__note">
          <p>
            Итоговый расчёт формируется после понимания задачи: где проявляется
            проблема, какая конструкция повреждена, есть ли активное
            водопоступление, какой доступ к участку и какие работы потребуются —
            гидроизоляция, герметизация, восстановление бетона, кладки или
            кровельного узла.
          </p>
        </div>

        <div className="pricing-section__actions">
          <Button href="/#estimate" variant="primary" size="lg">
            Получить предварительный расчёт
          </Button>
        </div>
      </Container>
    </Section>
  );
}
