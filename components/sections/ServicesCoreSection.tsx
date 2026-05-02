import { Container } from "@/components/layout/Container";
import { Section } from "@/components/ui/Section";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { coreServices } from "@/data/services";

export function ServicesCoreSection() {
  return (
    <Section id="services" className="services-core-section" spacing="lg">
      <Container>
        <div className="section-split services-core-section__layout">
          <div className="section-split__aside section-split__aside--sticky services-core-section__intro">
            <p className="section-kicker">Основные направления</p>

            <h2 className="section-title">
              Работаем там, где нужна не общая теория, а точное инженерное
              решение
            </h2>

            <p className="section-lead">
              На каждом объекте сначала определяем источник проблемы, поведение
              конструкции и рабочий способ устранения протечки, а уже потом
              приступаем к работам.
            </p>
          </div>

          <div className="section-split__body">
            <div className="services-core-section__grid">
              {coreServices.map((service) => (
                <ServiceCard
                  key={service.title}
                  title={service.title}
                  description={service.description}
                  variant={service.variant}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}