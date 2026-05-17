"use client";

import { useState } from "react";
import Link from "next/link";

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
  const [statusMessage, setStatusMessage] = useState("");

  const classes = ["lead-form", className].filter(Boolean).join(" ");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      phone: String(formData.get("phone") || ""),
      email: String(formData.get("email") || ""),
      objectType: String(formData.get("objectType") || ""),
      region: String(formData.get("region") || ""),
      message: String(formData.get("message") || ""),
      consent: formData.get("consent") === "on",
    };

    setStatus("sending");
    setStatusMessage("");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as {
        ok?: boolean;
        message?: string;
      };

      if (!response.ok || !result.ok) {
        throw new Error(result.message || "Не удалось отправить заявку.");
      }

      setStatus("success");
      setStatusMessage("Заявка отправлена. Мы свяжемся с вами.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Не удалось отправить заявку. Попробуйте позже или свяжитесь по телефону.",
      );
    }
  }

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
          placeholder="ЖК, подвал, паркинг, кровля, техпомещение"
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
          label="Что происходит на объекте"
          placeholder="Опишите проблему: где появилась вода, какой узел течёт, есть ли трещины, мокрые стены, швы, вводы коммуникаций или кровельный узел"
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
              Нажимая кнопку, я соглашаюсь на обработку персональных данных,
              принимаю{" "}
              <Link href="/privacy-policy">Политику конфиденциальности</Link>{" "}
              и{" "}
              <Link href="/personal-data-consent">
                Согласие на обработку персональных данных
              </Link>
              .
            </>
          }
        />

        {statusMessage && (
          <p
            className={
              status === "success"
                ? "lead-form__status lead-form__status--success"
                : "lead-form__status lead-form__status--error"
            }
          >
            {statusMessage}
          </p>
        )}

        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          disabled={status === "sending"}
        >
          {status === "sending" ? "Отправляем..." : submitText}
        </Button>
      </div>
    </form>
  );
}