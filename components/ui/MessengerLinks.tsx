import Image from "next/image";

import { company } from "@/data/company";

type MessengerLinksProps = {
  className?: string;
};

export function MessengerLinks({ className = "" }: MessengerLinksProps) {
  if (!company.messengers.length) {
    return null;
  }

  const classes = ["messenger-links", className].filter(Boolean).join(" ");

  return (
    <div className={classes} aria-label="Мессенджеры">
      {company.messengers.map((item) => (
        <a
          key={item.id}
          href={item.href}
          className="messenger-links__item"
          target="_blank"
          rel="noreferrer"
          aria-label={item.ariaLabel}
          data-contact-link={item.id}
          data-metrika-goal={`click_${item.id}`}
        >
          <Image
            src={item.icon}
            alt=""
            width={22}
            height={22}
            className="messenger-links__icon"
            aria-hidden="true"
          />

          <span className="messenger-links__label">{item.label}</span>
        </a>
      ))}
    </div>
  );
}