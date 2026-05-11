import { useState } from "react";
import { faqItems } from "./sectionData";
import "./FAQSection.css";

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="maxv-section maxv-section--soft" id="faq">
      <div className="maxv-section__head maxv-section__head--center">
        <h2>Câu hỏi thường gặp về Maxv Accounting</h2>
        <p>Tìm hiểu thêm về phần mềm kế toán online Maxv Accounting</p>
      </div>
      <div className="maxv-faq-container">
        {faqItems.map((item, index) => (
          <div
            className={`maxv-faq-item${openIndex === index ? " is-open" : ""}`}
            key={item.question}
          >
            <button
              className="maxv-faq-question"
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
            >
              <span>{item.question}</span>
              <span className="maxv-faq-icon">{openIndex === index ? "−" : "+"}</span>
            </button>
            <div className="maxv-faq-answer">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQSection;
