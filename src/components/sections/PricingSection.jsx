import { pricingPlans } from "../../constants/sectionData";
import "./PricingSection.css";

function PricingSection() {
  return (
    <section className="maxv-section maxv-section--soft" id="bao-gia">
      <div className="maxv-container">
        <div className="maxv-section__head maxv-section__head--center">
          <h2>Bảng báo giá phần mềm kế toán Maxv Accounting</h2>
        </div>
        <div className="maxv-pricing-grid">
          {pricingPlans.map((plan) => (
            <article className="maxv-price-card" key={plan.title}>
              <div className="maxv-price-card__head">
                <h3>{plan.title}</h3>
                <p>{plan.subtitle}</p>
              </div>
              <div className="maxv-price-card__rows">
                {plan.rows.map(([label, price]) => (
                  <div className="maxv-price-row" key={label}>
                    <span className="maxv-price-row__label">{label}</span>
                    <strong>{price}</strong>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
