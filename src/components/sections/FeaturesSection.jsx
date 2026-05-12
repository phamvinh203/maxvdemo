import { useState, useEffect } from "react";
import { featureGroups } from "../../constants/sectionData";
import "./FeaturesSection.css";

function FeaturesSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentTitle, setCurrentTitle] = useState("");

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalOpen]);

  const openModal = (image, title) => {
    setCurrentImage(image);
    setCurrentTitle(title);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentImage(null);
    setCurrentTitle("");
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  };

  return (
    <section className="maxv-section" id="tinh-nang">
      <div className="maxv-container">
        <div className="maxv-section__head maxv-section__head--center">
          <h2>Tính năng phần mềm Maxv Accounting</h2>
        </div>
        <div className="maxv-feature-grid">
          {featureGroups.map((group, index) => (
            <article className="maxv-feature-card" key={group.title}>
              <div className="maxv-feature-card__header">
                <div className="maxv-feature-card__number">{String(index + 1).padStart(2, '0')}</div>
                <div className="maxv-feature-card__title">
                  <h3>{group.title}</h3>
                </div>
              </div>
              <div
                className="maxv-feature-card__image"
                onClick={() => openModal(group.image, group.title)}
                title="Click để xem hình ảnh lớn hơn"
              >
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
      </div>

      {modalOpen && currentImage && (
        <div
          className="maxv-image-modal"
          onClick={handleBackdropClick}
          onKeyDown={handleKeyDown}
          role="presentation"
        >
          <div className="maxv-image-modal__content">
            <button
              className="maxv-image-modal__close"
              onClick={closeModal}
              aria-label="Đóng"
            >
              ×
            </button>
            <div className="maxv-image-modal__body">
              <img src={currentImage} alt={currentTitle} />
              <h3 className="maxv-image-modal__title">{currentTitle}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default FeaturesSection;
