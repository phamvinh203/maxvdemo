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
          <h3>CÔNG TY CP PM MAXV VIỆT NAM</h3>
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
          <h3>THÔNG TIN &amp; CHÍNH SÁCH</h3>
          <nav className="maxv-footer__links" aria-label="Thông tin và chính sách">
            {policyLinks.map((link) => (
              <a href="#" key={link}>
                {link}
              </a>
            ))}
          </nav>
        </section>

        <section className="maxv-footer__column maxv-footer__social">
          <h3>MẠNG XÃ HỘI</h3>

          <div className="maxv-footer__social-icons">
            <a
              href="https://www.facebook.com/www.maxv.vn?ref=embed_page"
              target="_blank"
              rel="noopener noreferrer"
              className="maxv-footer__social-icon is-facebook"
              aria-label="Facebook"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            <a
              href="https://www.tiktok.com/@maxv.vn"
              target="_blank"
              rel="noopener noreferrer"
              className="maxv-footer__social-icon is-tiktok"
              aria-label="TikTok"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </a>

            <a
              href="https://www.youtube.com/@PhanMemKeToanMaxv"
              target="_blank"
              rel="noopener noreferrer"
              className="maxv-footer__social-icon is-youtube"
              aria-label="YouTube"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>

          <img
            className="maxv-footer__dmca"
            src="https://maxv.vn/wp-content/uploads/2022/08/DMCA_logo-grn-btn150w.png"
            alt="DMCA Protected"
          />
        </section>
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
