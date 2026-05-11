import { navItems } from "./Navbar";
import "../../styles/Header.css";

function Header() {
  return (
    <header className="maxv-header">
      <div className="maxv-header__inner">
        <a className="maxv-header__logo" href="#top" aria-label="Maxv">
          <img
            src="https://maxv.vn/wp-content/uploads/2024/04/Logo-Maxv-200x60-New-01.png"
            alt="MAXV"
          />
        </a>

        <nav className="maxv-header__nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <div
              className={`maxv-header__item${item.children ? " has-dropdown" : ""}`}
              key={item.label}
            >
              <a
                className={`maxv-header__link${item.active ? " is-active" : ""}`}
                href={item.href}
              >
                <span>{item.label}</span>
                {item.children && <span className="maxv-header__chevron"></span>}
              </a>

              {item.children && (
                <div className="maxv-header__dropdown">
                  
                  {item.children.map((child) => (
                    <a className="maxv-header__dropdown-link" href={child.href} key={child.label}>
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="maxv-header__actions" aria-label="Quick actions">
          <a className="maxv-header__icon" href="#bao-gia" aria-label="Giỏ hàng">
            <img src="/icons/cart.png" alt="Giỏ hàng" />
          </a>
          <a className="maxv-header__icon" href="#tim-kiem" aria-label="Tìm kiếm">
            <img src="/icons/search.png" alt="Tìm kiếm" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
