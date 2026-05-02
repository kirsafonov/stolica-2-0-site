import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/ui/Section";
import { company } from "@/data/company";

export function ContactsPageHero() {
  const mainPhone = company.phones[1] ?? company.phones[0];

  return (
    <Section className="contacts-page-hero" spacing="sm" tone="dark">
      <Container>
        <div className="contacts-page-hero__content">
          <p className="contacts-page-hero__eyebrow">Контакты</p>

          <h1 className="contacts-page-hero__title">
            Свяжитесь с нами, чтобы обсудить задачу по гидроизоляции
          </h1>

          <p className="contacts-page-hero__description">
            Расскажите, где появилась протечка, какой это объект и что уже
            пробовали делать. Мы подскажем, какие данные нужны для предварительной
            оценки и дальнейшего обследования.
          </p>

          <div className="contacts-page-hero__actions">
            <Button href={mainPhone.href} variant="primary" size="lg">
              Позвонить {mainPhone.label}
            </Button>

            <Button href={company.email.href} variant="secondary" size="lg">
              Написать на почту
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}