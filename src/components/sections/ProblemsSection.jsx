import { accountingProblems } from "./sectionData";
import "./ProblemsSection.css";

function ProblemsSection() {
  return (
    <section className="maxv-section maxv-section--soft" id="van-de-ke-toan">
      <div className="maxv-section__head maxv-section__head--center">
        <h2>Những vấn đề kế toán &amp; doanh nghiệp đang gặp phải</h2>
      </div>
      <div className="maxv-container">
        <div className="maxv-problem-container">
          <div className="maxv-problem-list">
            {accountingProblems.map((item, index) => (
              <article className="maxv-problem-item" key={item}>
                <div className="maxv-problem-item__number">{index + 1}</div>
                <div className="maxv-problem-item__content">
                  <p>{item}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="maxv-problem-video">
            <div className="maxv-video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/DcRmx9KwS0w"
                title="MaxV Accounting - Những vấn đề kế toán & doanh nghiệp đang gặp phải"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProblemsSection;
