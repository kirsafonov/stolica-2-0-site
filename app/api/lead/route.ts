import { NextResponse } from "next/server";

function getFormValue(formData: FormData, key: string) {
  const value = formData.get(key);

  if (typeof value !== "string") {
    return "";
  }

  return value.trim();
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = getFormValue(formData, "name");
    const phone = getFormValue(formData, "phone");
    const email = getFormValue(formData, "email");
    const objectType = getFormValue(formData, "objectType");
    const region = getFormValue(formData, "region");
    const message = getFormValue(formData, "message");
    const consent = getFormValue(formData, "consent");

    if (!name || !phone || !consent) {
      return NextResponse.json(
        { message: "Required fields are missing" },
        { status: 400 },
      );
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      return NextResponse.json(
        { message: "Telegram credentials are not configured" },
        { status: 500 },
      );
    }

    const telegramMessage = [
      "Новая заявка с сайта ООО «Столица»",
      "",
      `Имя: ${name}`,
      `Телефон: ${phone}`,
      email ? `Email: ${email}` : null,
      objectType ? `Тип объекта: ${objectType}` : null,
      region ? `Город / регион: ${region}` : null,
      message ? `Описание проблемы: ${message}` : null,
      "",
      "Согласие на обработку персональных данных: да",
    ]
      .filter(Boolean)
      .join("\n");

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: telegramMessage,
        }),
      },
    );

    if (!telegramResponse.ok) {
      return NextResponse.json(
        { message: "Telegram request failed" },
        { status: 502 },
      );
    }

    return NextResponse.json({ message: "Lead sent successfully" });
  } catch {
    return NextResponse.json(
      { message: "Unexpected server error" },
      { status: 500 },
    );
  }
}