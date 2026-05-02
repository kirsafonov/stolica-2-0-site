import Link from "next/link";
import * as React from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "md" | "lg";

type BaseButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
};

type ButtonAsButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonAsLinkProps = BaseButtonProps & {
  href: string;
  target?: string;
  rel?: string;
};

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

function isLinkProps(props: ButtonProps): props is ButtonAsLinkProps {
  return "href" in props && typeof props.href === "string";
}

export function Button(props: ButtonProps) {
  const {
    children,
    variant = "primary",
    size = "md",
    fullWidth = false,
    className = "",
  } = props;

  const classes = [
    "btn",
    `btn--${variant}`,
    `btn--${size}`,
    fullWidth ? "btn--full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (isLinkProps(props)) {
    const { href, target, rel } = props;

    return (
      <Link href={href} target={target} rel={rel} className={classes}>
        {children}
      </Link>
    );
  }

  const {
    children: _children,
    variant: _variant,
    size: _size,
    fullWidth: _fullWidth,
    className: _className,
    type = "button",
    ...buttonProps
  } = props;

  return (
    <button type={type} className={classes} {...buttonProps}>
      {children}
    </button>
  );
}