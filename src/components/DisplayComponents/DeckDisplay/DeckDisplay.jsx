import { useEffect, useState } from "react";
import "./DeckDisplay.css";
import CTA from "../../CTA/CTA";

const DeckDisplay = ({ title, cards }) => {
  const [cardsStack, setCardsStack] = useState(true);
  useEffect(() => {
    const cards = document.querySelectorAll(".deck__card");

    cards.forEach((card, i) => {
      if (card.offsetHeight + 20 > window.innerHeight) {
        setCardsStack(false);
        return;
      }
    });
  }, []);

  useEffect(() => {
    const cards = document.querySelectorAll(".deck__card");

    const updateScale = () => {
      cards.forEach((card, i) => {
        const rect = card.getBoundingClientRect();

        const start = window.innerHeight * 0.8; // begins scaling
        const end = 32; // top sticky position (2rem)

        const progress = Math.min(
          Math.max((start - rect.top) / (start - end), 0),
          1,
        );

        const scale = Math.min(1, 1 - progress * 0.15 + i * 0.02);
        const brightness = 1 - progress * 0.04 + i * 0.03;

        card.style.transform = `scale(${scale})`;
        card.style.filter = `brightness(${brightness})`;
      });
    };

    updateScale();
    window.addEventListener("scroll", updateScale);

    return () => {
      window.removeEventListener("scroll", updateScale);
    };
  }, []);
  return (
    <div className="deck">
      <h2 className="deck__title">{title}</h2>
      <div
        className={`deck__container ${cardsStack ? "" : "deck__container_no-stack"}`}
        style={{ paddingBottom: `${cards.length * 50 + 100}px` }}
      >
        {cards.map((card, i) => (
          <div
            key={i}
            style={{
              marginBottom: `-${(window.innerWidth <= 768 ? 2 : 10) + 1.8 * i * (window.innerWidth <= 768 ? 0.5 : 1)}vh`,
              top: `${(window.innerWidth <= 768 ? 2 : 10) + 1.8 * i * (window.innerWidth <= 768 ? 0.5 : 1)}vh`,
            }}
            className={`deck__card ${cardsStack ? "" : "deck__card_no-stack"}`}
          >
            <div className="deck__card-text">
              <h3 className="deck__card-title">{card.title}</h3>
              {window.innerWidth <= 768 && (
                <div className="deck__card-pic-container">
                  <img className={card.imgClassName} src={card.img} />
                </div>
              )}
              <p className="deck__card-description">{card.description}</p>
              <div className="deck__card-btn-container">
                {card?.btns?.map((btn, j) => (
                  <CTA className={btn.className} follow={btn.follow}>
                    {btn.content}
                  </CTA>
                ))}
              </div>
            </div>
            {window.innerWidth > 768 && (
              <div className="deck__card-pic-container">
                <img className={card.imgClassName} src={card.img} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default DeckDisplay;
