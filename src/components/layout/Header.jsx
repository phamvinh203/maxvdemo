import { useState } from "react";
import "../../styles/Header.css";

const landingLinks = [
  { label: "Gi\u1ea3i ph\u00e1p", href: "#giai-phap" },
  { label: "T\u00ednh n\u0103ng", href: "#tinh-nang" },
  { label: "B\u1ea3ng gi\u00e1", href: "#bao-gia" },
  { label: "FAQ", href: "#faq" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`maxv-header${isMenuOpen ? " is-menu-open" : ""}`}>
      <div className="maxv-header__inner">
        <a className="maxv-header__logo" href="#top" aria-label="Maxv" onClick={closeMenu}>
          <img
            src="https://maxv.vn/wp-content/uploads/2024/04/Logo-Maxv-200x60-New-01.png"
            alt="MAXV"
          />
        </a>

        <nav className="maxv-header__nav" aria-label="Di\u1ec1u h\u01b0\u1edbng trang">
          {landingLinks.map((item) => (
            <a className="maxv-header__link" href={item.href} key={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="maxv-header__actions">
          <a className="maxv-header__cta" href="#dang-ky" onClick={closeMenu}>
            Dùng thử ngay
          </a>
        </div>

        <button
          className="maxv-header__menu-button"
          type="button"
          aria-label={isMenuOpen ? "\u0110\u00f3ng menu" : "M\u1edf menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default Header;
