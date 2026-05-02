import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/ui/Section";
import { company } from "@/data/company";

const estimateChecklist = [
  "тип объекта: подвал, паркинг, кровля, техническое помещение, историческое здание",
  "где именно проявляется вода: шов, трещина, ввод коммуникаций, стык конструкций",
  "фото или видео проблемной зоны",
  "адрес или район объекта",
  "что уже делали для устранения протечки, если такие работы были",
];

export function ContactsDetailsSection() {
  return (
    <Section className="contacts-details-section" spacing="lg">
      <Container>
        <div className="contacts-details-section__grid">
          <div className="contacts-details-section__main">
            <div className="contacts-card contacts-card--primary">
              <p className="contacts-card__eyebrow">Связь</p>

              <h2 className="contacts-card__title">Контакты для обращения</h2>

              <div className="contacts-list">
                {company.phones.map((phone) => (
                  <a
                    key={phone.href}
                    href={phone.href}
                    className="contacts-list__link"
                  >
                    {phone.label}
                  </a>
                ))}

                <a href={company.email.href} className="contacts-list__link">
                  {company.email.label}
                </a>
              </div>

              <div className="contacts-card__note">
                <p>{company.workingHours}</p>
                <p>{company.region}</p>
              </div>
            </div>

            <div className="contacts-card">
              <p className="contacts-card__eyebrow">Для расчёта</p>

              <h2 className="contacts-card__title">
                Что лучше прислать в первом сообщении
              </h2>

              <ul className="contacts-checklist">
                {estimateChecklist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="contacts-details-section__side">
            <div className="contacts-card contacts-card--legal">
              <p className="contacts-card__eyebrow">Реквизиты</p>

              <h2 className="contacts-card__title">{company.legalName}</h2>

              <dl className="legal-list">
                <div>
                  <dt>ОГРН</dt>
                  <dd>{company.ogrn}</dd>
                </div>

                <div>
                  <dt>ИНН</dt>
                  <dd>{company.inn}</dd>
                </div>

                <div>
                  <dt>КПП</dt>
                  <dd>{company.kpp}</dd>
                </div>

                <div>
                  <dt>Юридический адрес</dt>
                  <dd>{company.legalAddress}</dd>
                </div>

                <div>
                  <dt>Генеральный директор</dt>
                  <dd>{company.director}</dd>
                </div>
              </dl>
            </div>

            <div className="contacts-card contacts-card--links">
              <p className="contacts-card__eyebrow">Разделы</p>

              <div className="contacts-page-links">
                <Link href="/services">Услуги</Link>
                <Link href="/cases">Кейсы</Link>
                <Link href="/#prices">Цены</Link>
                <Link href="/#faq">FAQ</Link>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </Section>
  );
}