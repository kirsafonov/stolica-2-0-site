import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type LeadPayload = {
  name?: string;
  phone?: string;
  message?: string;
  consent?: boolean;
};

function getRequiredEnv(name: string) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }

  return value;
}

function parseEmailList(value: string) {
  return value
    .split(",")
    .map((email) => email.trim())
    .filter(Boolean);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatValue(value?: string) {
  const trimmed = value?.trim();

  return trimmed ? escapeHtml(trimmed) : "—";
}

function formatTextValue(value?: string) {
  const trimmed = value?.trim();

  return trimmed || "—";
}

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as LeadPayload;

    const name = data.name?.trim();
    const phone = data.phone?.trim();

    if (!name || !phone) {
      return NextResponse.json(
        { ok: false, message: "Укажите имя и телефон." },
        { status: 400 },
      );
    }

    if (!data.consent) {
      return NextResponse.json(
        {
          ok: false,
          message: "Необходимо согласие на обработку персональных данных.",
        },
        { status: 400 },
      );
    }

    const smtpHost = getRequiredEnv("SMTP_HOST");
    const smtpPort = Number(process.env.SMTP_PORT || 465);
    const smtpSecure = process.env.SMTP_SECURE !== "false";
    const smtpUser = getRequiredEnv("SMTP_USER");
    const smtpPass = getRequiredEnv("SMTP_PASS");
    const leadToEmails = parseEmailList(getRequiredEnv("LEAD_TO_EMAIL"));
    const leadFromEmail = process.env.LEAD_FROM_EMAIL || smtpUser;

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const subject = `Заявка с сайта ООО «Столица»: ${name}`;

    const html = `
      <h2>Новая заявка с сайта ООО «Столица»</h2>

      <p><strong>Имя:</strong> ${formatValue(data.name)}</p>
      <p><strong>Телефон:</strong> ${formatValue(data.phone)}</p>

      <h3>Что происходит на объекте</h3>
      <p>${formatValue(data.message).replaceAll("\n", "<br />")}</p>

      <hr />

      <p style="color:#666;font-size:13px;">
        Заявка отправлена через форму сайта.
      </p>
    `;

    const text = [
      "Новая заявка с сайта ООО «Столица»",
      "",
      `Имя: ${formatTextValue(data.name)}`,
      `Телефон: ${formatTextValue(data.phone)}`,
      "",
      "Что происходит на объекте:",
      formatTextValue(data.message),
    ].join("\n");

    await transporter.sendMail({
      from: `"Сайт ООО Столица" <${leadFromEmail}>`,
      to: leadToEmails,
      subject,
      text,
      html,
    });

    return NextResponse.json({
      ok: true,
      message: "Заявка отправлена.",
    });
  } catch (error) {
    console.error("Lead form error:", error);

    return NextResponse.json(
      {
        ok: false,
        message:
          "Не удалось отправить заявку. Попробуйте позже или свяжитесь по телефону.",
      },
      { status: 500 },
    );
  }
}