import { registerBenefits } from "./sectionData";
import "./RegisterSection.css";
import "./FeaturesSection.css";

function RegisterSection() {
  return (
    <section className="maxv-section" id="dang-ky">
      <div className="maxv-container">
        <div className="maxv-section__head maxv-section__head--center">
          <h2>Đăng ký Maxv Accounting</h2>
        </div>

        <div className="maxv-register-grid">
          <div className="maxv-feature-card">
            <div className="maxv-feature-card__header">
              <div className="maxv-feature-card__number">01</div>
              <div className="maxv-feature-card__title">
                <h3>Lợi ích khi đăng ký</h3>
              </div>
            </div>
            <ul>
              {registerBenefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
            <div className="maxv-register-contact">

              <a href="tel:0382325225" className="maxv-register-phone">
                Liên hệ: 0382 325 225
              </a>
              <a href="" className="maxv-register-phone">
                Dùng thử ngay
              </a>
            </div>
          </div>

          <form className="maxv-feature-card" id="dang-ky-form">
            <div className="maxv-feature-card__header">
              <div className="maxv-feature-card__number">02</div>
              <div className="maxv-feature-card__title">
                <h3>Thông tin đăng ký</h3>
              </div>
            </div>

            <div className="maxv-register-form">
              <label>
                Họ và tên*
                <input type="text" name="name" placeholder="Nhập họ và tên của bạn" />
              </label>
              <label>
                Số điện thoại*
                <input type="tel" name="phone" placeholder="Nhập số điện thoại" />
              </label>
              <label>
                Địa chỉ Email*
                <input type="email" name="email" placeholder="Nhập địa chỉ email" />
              </label>
              <label>
                Chọn gói sản phẩm*
                <select name="package" defaultValue="">
                  <option value="" disabled>
                    Chọn gói sản phẩm
                  </option>
                  <option>Dùng thử trước (15 ngày)</option>
                  <option>Gói 05 công ty</option>
                  <option>Gói 10 công ty</option>
                  <option>Gói 20 công ty</option>
                  <option>Gói doanh nghiệp</option>
                </select>
              </label>
              <button type="submit">Đăng ký ngay</button>
            </div>

            
          </form>
        </div>
      </div>
    </section>
  );
}

export default RegisterSection;
