import { reasonCards } from "./sectionData";
import "./ReasonsSection.css";

function ReasonsSection() {
  return (
    <section className="maxv-section maxv-section--blue" id="ly-do-lua-chon">
      <div className="maxv-container">
        <div className="maxv-section__head maxv-section__head--center">
          <p className="maxv-eyebrow">Lựa chọn Maxv Accounting</p>
          <h2>Tại sao doanh nghiệp nên lựa chọn Maxv Accounting?</h2>
        </div>
        <div className="maxv-reason-grid">
          {reasonCards.map((item) => (
            <article className="maxv-reason-card" key={item.title}>
              <div className="maxv-reason-card__icon">
                {item.title.charAt(0)}
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReasonsSection;
