import { solutionCards } from "../../constants/sectionData";
import "./SolutionsSection.css";

function SolutionsSection() {
  return (
    <section className="maxv-section" id="giai-phap">
      <div className="maxv-container">
        <div className="maxv-section__head maxv-section__head--center">
          <h2>Giải quyết vấn đề đơn giản bằng phần mềm Maxv Accounting</h2>
        </div>
        <div className="maxv-card-grid maxv-card-grid--four">
          {solutionCards.map((item) => (
            <article className="maxv-card maxv-card--accent" key={item.title}>
              <div className="maxv-card__image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="maxv-card__content">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SolutionsSection;
