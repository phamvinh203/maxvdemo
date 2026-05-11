import { featureGroups } from "./sectionData";
import "./FeaturesSection.css";

function FeaturesSection() {
  return (
    <section className="maxv-section" id="tinh-nang">
      <div className="maxv-section__head maxv-section__head--center">
        <p className="maxv-eyebrow">Tính năng</p>
        <h2>Tính năng phần mềm Maxv Accounting</h2>
      </div>
      <div className="maxv-feature-grid">
        {featureGroups.map((group, index) => (
          <article className="maxv-feature-card" key={group.title}>
            <div className="maxv-feature-card__header">
              <div className="maxv-feature-card__number">{index + 1}</div>
              <div className="maxv-feature-card__title">
                <h3>{group.title}</h3>
              </div>
            </div>
            <div className="maxv-feature-card__image">
              <img src={group.image} alt={group.title} />
            </div>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;
