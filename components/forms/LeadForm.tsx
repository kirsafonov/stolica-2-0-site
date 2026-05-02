"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/Button";
import { CheckboxField } from "@/components/forms/CheckboxField";
import { FormField } from "@/components/forms/FormField";
import { TextareaField } from "@/components/forms/TextareaField";

type LeadFormProps = {
  className?: string;
  submitText?: string;
};

type FormStatus = "idle" | "sending" | "success" | "error";

export function LeadForm({
  className = "",
  submitText = "Отправить заявку",
}: LeadFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const classes = ["lead-form", className].filter(Boolean).join(" ");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("sending");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Lead request failed");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const isSending = status === "sending";

  return (
    <form className={classes} onSubmit={handleSubmit}>
      <div className="lead-form__grid">
        <FormField
          id="name"
          name="name"
          label="Имя"
          placeholder="Ваше имя"
          required
        />

        <FormField
          id="phone"
          name="phone"
          label="Телефон"
          type="tel"
          placeholder="+7"
          required
        />

        <FormField
          id="email"
          name="email"
          label="Email"
          type="email"
          placeholder="info@example.com"
        />

        <FormField
          id="objectType"
          name="objectType"
          label="Тип объекта"
          placeholder="ЖК, паркинг, подвал, кровля"
        />

        <FormField
          id="region"
          name="region"
          label="Город / регион"
          placeholder="Москва"
        />

        <TextareaField
          id="message"
          name="message"
          label="Краткое описание проблемы"
          placeholder="Опишите, где течёт и что происходит"
          rows={6}
        />
      </div>

      <div className="lead-form__bottom">
        <CheckboxField
          id="consent"
          name="consent"
          required
          label={
            <>
              Нажимая кнопку, я соглашаюсь на{" "}
              <Link href="/personal-data-consent">
                обработку персональных данных
              </Link>{" "}
              и принимаю{" "}
              <Link href="/privacy-policy">Политику конфиденциальности</Link>.
            </>
          }
        />

        <Button type="submit" variant="primary" size="lg" fullWidth disabled={isSending}>
          {isSending ? "Отправляем..." : submitText}
        </Button>
      </div>

      {status === "success" ? (
        <p className="lead-form__status lead-form__status--success">
          Заявка отправлена. Мы свяжемся с вами в ближайшее время.
        </p>
      ) : null}

      {status === "error" ? (
        <p className="lead-form__status lead-form__status--error">
          Не удалось отправить заявку. Попробуйте ещё раз или свяжитесь с нами по телефону.
        </p>
      ) : null}
    </form>
  );
}