"use client";

import { useState } from "react";

import { Container } from "@/components/layout/Container";
import { DocCard } from "@/components/ui/DocCard";
import { ImageLightbox } from "@/components/ui/ImageLightbox";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { documents } from "@/data/documents";

const documentImages = documents
  .filter((doc) => doc.preview)
  .map((doc) => ({
    src: doc.preview as string,
    alt: doc.previewAlt ?? doc.title,
    title: doc.title,
    description: doc.description,
  }));

export function TrustSection() {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  function getImageIndex(preview?: string) {
    if (!preview) return null;

    const index = documentImages.findIndex((image) => image.src === preview);

    return index >= 0 ? index : null;
  }

  return (
    <>
      <Section id="trust" className="trust-section" spacing="sm" tone="muted">
        <Container>
          <div className="trust-section__grid">
            <div className="trust-section__content">
              <SectionHeading
                eyebrow="Доверие"
                title="Почему нам доверяют ремонтно-восстановительные работы на сложных объектах"
              />

              <div className="trust-section__text">
                <p>
                  Мы работаем с объектами, где важны точная диагностика,
                  аккуратность выполнения и ответственность за результат:
                  жилые комплексы, коммерческие здания, исторические объекты,
                  подземные конструкции, швы, трещины и зоны водопоступления.
                </p>

                <p>
                  Решение подбирается не по видимому следу, а по причине проблемы:
                  состоянию конструкции, характеру узла, доступу к участку и условиям
                  дальнейшей эксплуатации объекта.
                </p>
              </div>
            </div>

            <div className="trust-section__docs">
              {documents.map((doc) => {
                const imageIndex = getImageIndex(doc.preview);

                return (
                  <DocCard
                    key={doc.title}
                    title={doc.title}
                    description={doc.description}
                    preview={doc.preview}
                    previewAlt={doc.previewAlt}
                    href={doc.href}
                    onClick={
                      imageIndex !== null
                        ? () => setActiveImageIndex(imageIndex)
                        : undefined
                    }
                  />
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      <ImageLightbox
        images={documentImages}
        activeIndex={activeImageIndex}
        onClose={() => setActiveImageIndex(null)}
        onChange={setActiveImageIndex}
      />
    </>
  );
}