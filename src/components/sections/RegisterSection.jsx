import { registerBenefits } from "./sectionData";

function RegisterSection() {
  return (
    <section className="maxv-register-section" id="dang-ky">
      <div className="maxv-register-section__content">
        <p className="maxv-eyebrow">Đăng ký phần mềm ngay thôi</p>
        <h2>Đăng ký Maxv Accounting</h2>
        <ul>
          {registerBenefits.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>
        <p className="maxv-register-section__phone">
          Liên hệ: <a href="tel:0382325225">0382 325 225</a>
        </p>
        <div className="maxv-register-section__actions">
          <a href="#dang-ky-form">Dùng thử ngay</a>
          <a href="#dang-ky-form">Đăng ký Maxv Accounting</a>
        </div>
      </div>

      <form className="maxv-register-form" id="dang-ky-form">
        <label>
          Họ và tên*
          <input type="text" name="name" />
        </label>
        <label>
          Số điện thoại*
          <input type="tel" name="phone" />
        </label>
        <label>
          Địa chỉ Email*
          <input type="email" name="email" />
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
        <button type="button">Đăng ký</button>
      </form>
    </section>
  );
}

export default RegisterSection;
