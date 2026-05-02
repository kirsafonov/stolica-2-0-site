import { Container } from "@/components/layout/Container";
import { FaqItem } from "@/components/ui/FaqItem";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faq } from "@/data/faq";

export function FaqSection() {
  return (
    <Section id="faq" className="faq-section" spacing="lg">
      <Container>
        <div className="section-split faq-section__layout">
          <div className="section-split__aside section-split__aside--sticky faq-section__intro">
            <p className="section-kicker">FAQ</p>

            <h2 className="section-title">Частые вопросы</h2>

            <p className="section-lead">
              Блок, который одновременно работает на доверие, SEO и снятие
              тревоги перед первым обращением.
            </p>
          </div>

          <div className="section-split__body">
            <div className="faq-section__list">
              {faq.map((item) => (
                <article key={item.question} className="faq-card">
                  <h3 className="faq-card__question">{item.question}</h3>
                  <p className="faq-card__answer">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}