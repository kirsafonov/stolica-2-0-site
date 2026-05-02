"use client";

import Image from "next/image";
import { useEffect } from "react";

export type LightboxImage = {
  src: string;
  alt: string;
  title?: string;
  description?: string;
};

type ImageLightboxProps = {
  images: LightboxImage[];
  activeIndex: number | null;
  onClose: () => void;
  onChange: (index: number) => void;
};

export function ImageLightbox({
  images,
  activeIndex,
  onClose,
  onChange,
}: ImageLightboxProps) {
  const isOpen = activeIndex !== null;
  const currentImage = isOpen ? images[activeIndex] : null;
  const hasNavigation = images.length > 1;

  function showPrevious() {
    if (activeIndex === null) return;

    const previousIndex =
      activeIndex === 0 ? images.length - 1 : activeIndex - 1;

    onChange(previousIndex);
  }

  function showNext() {
    if (activeIndex === null) return;

    const nextIndex =
      activeIndex === images.length - 1 ? 0 : activeIndex + 1;

    onChange(nextIndex);
  }

  useEffect(() => {
    if (!isOpen) return;

    document.body.classList.add("lightbox-open");

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("lightbox-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, activeIndex]);

  if (!isOpen || !currentImage) {
    return null;
  }

  return (
    <div
      className="image-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={currentImage.title ?? currentImage.alt}
    >
      <button
        type="button"
        className="image-lightbox__backdrop"
        aria-label="Закрыть просмотр"
        onClick={onClose}
      />

      <div className="image-lightbox__content">
        <div className="image-lightbox__top">
          <div className="image-lightbox__text">
            {currentImage.title ? (
              <h2 className="image-lightbox__title">{currentImage.title}</h2>
            ) : null}

            {currentImage.description ? (
              <p className="image-lightbox__description">
                {currentImage.description}
              </p>
            ) : null}
          </div>

          <button
            type="button"
            className="image-lightbox__close"
            aria-label="Закрыть просмотр"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <div className="image-lightbox__image-wrap">
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            fill
            sizes="100vw"
            className="image-lightbox__image"
          />
        </div>

        {hasNavigation ? (
          <div className="image-lightbox__controls">
            <button
              type="button"
              className="image-lightbox__arrow"
              aria-label="Предыдущее изображение"
              onClick={showPrevious}
            >
              ←
            </button>

            <div className="image-lightbox__counter">
              {activeIndex + 1} / {images.length}
            </div>

            <button
              type="button"
              className="image-lightbox__arrow"
              aria-label="Следующее изображение"
              onClick={showNext}
            >
              →
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}