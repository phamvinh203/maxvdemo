import { accountingProblems } from "./sectionData";
import "./ProblemsSection.css";

function ProblemsSection() {
  return (
    <section 
      className="maxv-section" 
      id="van-de-ke-toan"
    >

      <div className="maxv-container">
      <div className="maxv-section__head">
        <h2>Những vấn đề kế toán &amp; doanh nghiệp đang gặp phải</h2>
      </div>
        <div className="maxv-problem-container">
          {/* Danh sách vấn đề */}
          <div className="maxv-problem-list">
            {accountingProblems.map((item, index) => (
              <article key={index} className="maxv-problem-item">
                <div className="maxv-problem-item__number">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="maxv-problem-item__content">
                  <p>{item}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Video */}
          <div className="maxv-problem-video">
            <div className="maxv-video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/DcRmx9KwS0w"
                title="MaxV Accounting - Những vấn đề kế toán & doanh nghiệp đang gặp phải"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProblemsSection;