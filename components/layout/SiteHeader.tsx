"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { headerContacts, headerNav } from "@/data/navigation";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="site-header">
        <div className="container">
          <div className="site-header__inner">
            <Link
              href="/"
              aria-label="Столица — главная"
              className="site-header__brand"
              onClick={closeMenu}
            >
              <Image
                src="/branding/logo-wordmark.png"
                alt="Столица — Ремонтно-восстановительные работы"
                width={260}
                height={74}
                priority
                className="site-header__logo"
              />
            </Link>

            <nav className="site-header__nav" aria-label="Основная навигация">
              <ul className="site-header__nav-list">
                {headerNav.map((item) => (
                  <li key={item.label} className="site-header__nav-item">
                    <Link href={item.href} className="site-header__nav-link">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="site-header__actions">
              <a className="site-header__phone" href="tel:+79017688000">
                +7 (901) 768-80-00
              </a>

              <Link href="/#estimate" className="site-header__cta">
                Получить расчёт
              </Link>
            </div>

            <div className="site-header__mobile-actions">
              <a className="site-header__phone site-header__phone--mobile" href="tel:+79017688000">
                +7 (901) 768-80-00
              </a>

              <button
                type="button"
                className={`site-header__burger ${isMenuOpen ? "is-open" : ""}`}
                aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-navigation"
                onClick={toggleMenu}
              >
                <span />
                <span />
                <span />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`site-header__overlay ${isMenuOpen ? "is-open" : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <aside
        id="mobile-navigation"
        className={`site-header__drawer ${isMenuOpen ? "is-open" : ""}`}
        aria-hidden={!isMenuOpen}
      >
        <div className="site-header__drawer-head">
          <Link
            href="/"
            className="site-header__drawer-brand"
            aria-label="Столица — главная"
            onClick={closeMenu}
          >
            <Image
              src="/branding/logo-wordmark.png"
              alt="Столица — Ремонтно-восстановительные работы"
              width={220}
              height={62}
              className="site-header__drawer-logo"
            />
          </Link>

          <button
            type="button"
            className="site-header__drawer-close"
            onClick={closeMenu}
            aria-label="Закрыть меню"
          >
            <span />
            <span />
          </button>
        </div>

        <nav className="site-header__drawer-nav" aria-label="Мобильная навигация">
          <ul className="site-header__drawer-list">
            {headerNav.map((item) => (
              <li key={`mobile-${item.label}`} className="site-header__drawer-item">
                <Link
                  href={item.href}
                  className="site-header__drawer-link"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__drawer-footer">
          <a className="site-header__drawer-phone" href="tel:+79017688000">
            +7 (901) 768-80-00
          </a>

          <a className="site-header__drawer-email" href="mailto:info@stolica-msk.com">
            info@stolica-msk.com
          </a>

          <Link
            href="/#estimate"
            className="site-header__drawer-cta"
            onClick={closeMenu}
          >
            Получить расчёт
          </Link>
        </div>
      </aside>
    </>
  );
}