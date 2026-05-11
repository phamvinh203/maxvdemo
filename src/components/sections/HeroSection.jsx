import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="maxv-hero" id="gioi-thieu">
      <div className="maxv-hero__content">
        <p className="maxv-eyebrow">Maxv Accounting #2025</p>
        <h1>Phần mềm kế toán online Maxv Accounting</h1>
        <p>
          Maxv Accounting là phần mềm kế toán online trên nền điện toán đám mây
          dành cho doanh nghiệp vừa và nhỏ. Kế toán và chủ doanh nghiệp có thể
          làm việc, quản lý từ xa mà hiệu quả công việc vẫn như làm tại công ty.
        </p>
        <div className="maxv-hero__actions">
          <a href="#bao-gia">Xem bảng giá</a>
          <a href="#dang-ky">Dùng thử ngay</a>
        </div>
      </div>
      <div className="maxv-hero__visual" aria-hidden="true">
        <img
          src="https://maxv.vn/wp-content/uploads/2022/08/Laptop-Maxv-Accounting-1200x820-3-01-min.png"
          alt="Phần mềm kế toán Maxv Accounting"
          className="maxv-hero__image"
        />
      </div>
    </section>
  );
}

export default HeroSection;
