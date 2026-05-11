import "../../styles/Footer.css";

const policyLinks = [
  "Giới thiệu",
  "Sơ đồ Website",
  "Hướng dẫn sử dụng",
  "Điều khoản sử dụng",
  "Chính sách bảo mật",
  "Chính sách thanh toán",
];

function Footer() {
  return (
    <footer className="maxv-footer">
      <div className="maxv-footer__main">
        <section className="maxv-footer__column maxv-footer__contact">
          <h2>CÔNG TY CP PM MAXV VIỆT NAM</h2>
          <p>
            <strong>Trụ sở chính:</strong> Tầng 2, số 180 phố Hoàng Ngân,
            Phường Yên Hòa, Thành phố Hà Nội, Việt Nam.
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:SoftMaxv@gmail.com">SoftMaxv@gmail.com</a>
          </p>
          <p>
            <strong>Hotline:</strong> 0382 325 225 | 0862 325 225
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a href="https://www.maxv.vn">www.maxv.vn</a>
          </p>
          <p>
            <strong>Thời gian:</strong> 08:30 - 17:30{" "}
            <strong>Thứ 2 - Thứ 7</strong>
          </p>
        </section>

        <section className="maxv-footer__column">
          <h2>THÔNG TIN &amp; CHÍNH SÁCH</h2>
          <nav className="maxv-footer__links" aria-label="Thông tin và chính sách">
            {policyLinks.map((link) => (
              <a href="#" key={link}>
                {link}
              </a>
            ))}
          </nav>
        </section>

        {/* <section className="maxv-footer__column maxv-footer__social">
          <h2>MẠNG XÃ HỘI</h2>

          <div className="maxv-footer__facebook-widget">
            <div className="maxv-footer__facebook-head">
              <img
                src="https://maxv.vn/wp-content/uploads/2024/04/Logo-Maxv-200x60-New-01.png"
                alt=""
              />
              <div>
                <div className="maxv-footer__facebook-title">
                  Phần Mềm Kế Toán M...
                </div>
                <div className="maxv-footer__facebook-count">
                  1.532 người theo dõi
                </div>
              </div>
            </div>
            <div className="maxv-footer__facebook-actions">
              <button type="button">Theo dõi Trang</button>
              <button type="button">Chia sẻ</button>
            </div>
          </div>

          

          <img
            className="maxv-footer__dmca"
            src="https://maxv.vn/wp-content/uploads/2022/08/DMCA_logo-grn-btn150w.png"
            alt="DMCA Công ty Maxv"
          />
        </section> */}
      </div>


      <div className="maxv-footer__copyright">
        <p>
          Giấy chứng nhận Đăng ký Kinh doanh số 0106200129, cấp tại Chi cục Thuế
          Quận Cầu Giấy.
        </p>
        <p>Copyright 2013 © maxv.vn . All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
