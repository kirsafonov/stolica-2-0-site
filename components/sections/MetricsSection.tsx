import { Container } from "@/components/layout/Container";
import { MetricCard } from "@/components/ui/MetricCard";
import { Section } from "@/components/ui/Section";
import { metrics } from "@/data/metrics";

export function MetricsSection() {
  return (
    <Section className="metrics-section" spacing="sm" tone="muted">
      <Container>
        <div className="metrics-section__grid">
          {metrics.map((item) => (
            <MetricCard
              key={`${item.value}-${item.text}`}
              value={item.value}
              text={item.text}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}