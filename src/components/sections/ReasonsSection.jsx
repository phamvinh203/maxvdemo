import { reasonCards } from "./sectionData";
import "./ReasonsSection.css";

function ReasonsSection() {
  return (
    <section className="maxv-section maxv-section--blue" id="ly-do-lua-chon">
      <div className="maxv-container">
        <div className="maxv-section__head maxv-section__head--center">
          <h2>Tại sao doanh nghiệp nên lựa chọn Maxv Accounting?</h2>
        </div>
        <div className="maxv-reason-grid">
          {reasonCards.map((item, index) => (
            <article className="maxv-reason-card" key={item.title}>
              <div className="maxv-reason-card__icon-wrapper">
                <div className="maxv-reason-card__icon">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>
              <h3 className="maxv-reason-card__title">{item.title}</h3>
              <p className="maxv-reason-card__text">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReasonsSection;
