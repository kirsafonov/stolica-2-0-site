import type { CaseItem } from "@/data/cases";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/ui/Section";

type CaseMetaProps = {
  item: CaseItem;
};

export function CaseMeta({ item }: CaseMetaProps) {
  return (
    <Section className="case-meta-section" spacing="sm">
      <Container>
        <div className="case-meta">
          {item.meta.map((metaItem) => (
            <div key={metaItem.label} className="case-meta__item">
              <p className="case-meta__label">{metaItem.label}</p>
              <p className="case-meta__value">{metaItem.value}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}