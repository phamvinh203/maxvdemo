import { accountingProblems } from "./sectionData";
import "./ProblemsSection.css";

function ProblemsSection() {
  return (
    <section className="maxv-section maxv-section--soft" id="van-de-ke-toan">
      <div className="maxv-section__head maxv-section__head--center">
        <h2>Những vấn đề kế toán &amp; doanh nghiệp đang gặp phải</h2>
      </div>
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
    </section>
  );
}

export default ProblemsSection;
