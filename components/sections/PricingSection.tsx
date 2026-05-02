import { Container } from "@/components/layout/Container";
import { Section } from "@/components/ui/Section";
import { pricingItems } from "@/data/pricing";

export function PricingSection() {
  return (
    <Section id="prices" className="pricing-section" spacing="lg">
      <Container>
        <div className="pricing-section__card">
          <div className="pricing-section__content">
            <p className="section-kicker">Стоимость</p>

            <h2 className="section-title">
              Ориентировочная стоимость работ
            </h2>

            <p className="section-lead">
              Точная стоимость зависит от типа конструкции, характера протечки,
              объёма работ и доступа к проблемной зоне.
            </p>
          </div>

          <div className="pricing-section__list">
            {pricingItems.map((item) => (
              <div key={item.title} className="pricing-section__item">
                {item.title}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}