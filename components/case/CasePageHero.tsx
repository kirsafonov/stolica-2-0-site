import Image from "next/image";

import type { CaseItem } from "@/data/cases";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/ui/Section";

type CasePageHeroProps = {
  item: CaseItem;
};

export function CasePageHero({ item }: CasePageHeroProps) {
  return (
    <Section className="case-page-hero" spacing="sm" tone="dark">
      <Container>
        <div className="case-page-hero__grid">
          <div className="case-page-hero__content">
            <p className="case-page-hero__eyebrow">{item.objectType}</p>

            <h1 className="case-page-hero__title">{item.title}</h1>

            <p className="case-page-hero__description">{item.lead}</p>
          </div>

          <div className="case-page-hero__media">
            <Image
              src={item.image}
              alt={item.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="case-page-hero__image"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}