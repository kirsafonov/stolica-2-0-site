import Image from "next/image";
import Link from "next/link";

import { company } from "@/data/company";
import { headerNav, legalNavigation } from "@/data/navigation";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__main">
          <div className="site-footer__brand">
            <Link
              href="/"
              className="site-footer__brand-link"
              aria-label={`${company.brandName} — на главную`}
            >
              <span className="site-footer__brand-mark">
                <Image
                  src="/branding/logo-mark.png"
                  alt={company.brandName}
                  width={56}
                  height={56}
                  className="site-footer__brand-image"
                />
              </span>

              <span className="site-footer__brand-text">
                <span className="site-footer__brand-title">
                  {company.brandName}
                </span>
                <span className="site-footer__brand-subtitle">
                  {company.brandTagline}
                </span>
              </span>
            </Link>

            <p className="site-footer__description">
              Работаем со сложными протечками, трещинами, холодными швами,
              деформационными швами и вводами инженерных коммуникаций.
            </p>
          </div>

          <nav className="site-footer__nav" aria-label="Навигация в подвале сайта">
            <p className="site-footer__heading">Навигация</p>

            <ul className="site-footer__list">
              {headerNav.map((item) => (
                <li key={item.href} className="site-footer__list-item">
                  <Link href={item.href} className="site-footer__link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-footer__contacts">
            <p className="site-footer__heading">Контакты</p>

            <div className="site-footer__contact-list">
              {company.phones.map((phone) => (
                <a
                  key={phone.href}
                  className="site-footer__contact-link"
                  href={phone.href}
                >
                  {phone.label}
                </a>
              ))}

              <a className="site-footer__contact-link" href={company.email.href}>
                {company.email.label}
              </a>
            </div>

            <div className="site-footer__meta">
              <p className="site-footer__meta-item">{company.workingHours}</p>
              <p className="site-footer__meta-item">{company.region}</p>
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p className="site-footer__copyright">
            © {year} {company.brandName}. Все права защищены.
          </p>

          <div className="site-footer__legal">
            {legalNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="site-footer__legal-link"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}