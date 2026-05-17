import { Container } from "@/components/layout/Container";
import { LeadForm } from "@/components/forms/LeadForm";
import { Section } from "@/components/ui/Section";
import { company } from "@/data/company";

export function CtaWithForm() {
  return (
    <Section id="estimate" className="cta-with-form" spacing="sm" tone="dark">
      <Container>
        <div className="cta-with-form__grid">
          <div className="cta-with-form__content">
            <p className="cta-with-form__eyebrow">Получить расчёт</p>

            <h2 className="cta-with-form__title">
              Опишите проблему — поможем понять причину и следующий шаг
            </h2>

            <p className="cta-with-form__description">
              Расскажите, где появилась вода, какой узел вызывает сомнение,
              что уже пробовали делать раньше и в каком состоянии объект.
              По вводным данным подготовим предварительную оценку и подскажем,
              какие работы могут потребоваться.
            </p>

            <div className="cta-with-form__contacts">
              <div className="cta-with-form__phones">
                {company.phones.map((phone) => (
                  <a
                    key={phone.href}
                    href={phone.href}
                    className="cta-with-form__phone"
                  >
                    {phone.label}
                  </a>
                ))}
              </div>

              <a
                href={company.email.href}
                className="cta-with-form__email"
              >
                {company.email.label}
              </a>

              <p className="cta-with-form__hours">{company.workingHours}</p>
            </div>
          </div>

          <div className="cta-with-form__form-wrap">
            <LeadForm />
          </div>
        </div>
      </Container>
    </Section>
  );
}