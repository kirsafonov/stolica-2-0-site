import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/ui/Section";

export function ServicesPageHero() {
  return (
    <Section className="services-page-hero" spacing="sm" tone="dark">
      <Container>
        <div className="services-page-hero__content">
          <p className="services-page-hero__eyebrow">Услуги</p>

          <h1 className="services-page-hero__title">
            Ремонтно-восстановительные работы, гидроизоляция и защита конструкций
          </h1>

          <p className="services-page-hero__description">
            Выполняем работы на сложных строительных объектах: устраняем
            водопроявления, герметизируем швы, трещины и вводы коммуникаций,
            восстанавливаем бетон, кирпичную кладку, кровельные узлы и
            подземные конструкции.
          </p>

          <div className="services-page-hero__actions">
            <Button href="/directions" variant="primary" size="lg">
              Смотреть направления
            </Button>

            <Button href="/#estimate" variant="secondary" size="lg">
              Получить расчёт
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}