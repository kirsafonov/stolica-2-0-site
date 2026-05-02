"use client";

import Image from "next/image";
import { useState } from "react";

import type { CaseGalleryImage } from "@/data/cases";
import { Container } from "@/components/layout/Container";
import { ImageLightbox } from "@/components/ui/ImageLightbox";
import { Section } from "@/components/ui/Section";

type CaseGalleryProps = {
  images: CaseGalleryImage[];
};

export function CaseGallery({ images }: CaseGalleryProps) {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  if (images.length === 0) {
    return null;
  }

  return (
    <>
      <Section className="case-gallery-section" spacing="sm">
        <Container>
          <div className="case-gallery-section__header">
            <p className="section-kicker">Фото объекта</p>
            <h2 className="case-gallery-section__title">Галерея работ</h2>
          </div>

          <div className="case-gallery">
            {images.map((image, index) => (
              <button
                key={`${image.src}-${index}`}
                type="button"
                className="case-gallery__item"
                onClick={() => setActiveImageIndex(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="case-gallery__image"
                />
              </button>
            ))}
          </div>
        </Container>
      </Section>

      <ImageLightbox
        images={images}
        activeIndex={activeImageIndex}
        onClose={() => setActiveImageIndex(null)}
        onChange={setActiveImageIndex}
      />
    </>
  );
}