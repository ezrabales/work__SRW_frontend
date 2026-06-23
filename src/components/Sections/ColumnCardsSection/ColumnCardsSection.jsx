import { useEffect, useRef, useState } from "react";
import "./ColumnCardsSection.css";
import CTA from "../../CTA/CTA";
import { useGlobal } from "../../GlobalState/GlobalState";

const ColumnCardsSection = () => {
  const { setIsOpen } = useGlobal();
  const columnContainerRef = useRef(null);
  const [flipped, setFlipped] = useState(false);

  const isMobile = window.innerWidth <= 768;
  const [flippedCards, setFlippedCards] = useState([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    if (!isMobile) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index);

          if (entry.isIntersecting) {
            setFlipped(true);
            setFlippedCards((prev) =>
              prev.includes(index) ? prev : [...prev, index],
            );
          }
        });
      },
      {
        threshold: 1,
        rootMargin: "-20% 0px -20% 0px",
      },
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const handleScroll = () => {
      const rect = columnContainerRef.current.getBoundingClientRect();

      if (rect.top < window.innerHeight * 0.09) {
        setFlipped(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const cards = [
    {
      title: "Visitors cant find your church",
      descriptions: [
        "No Search Engine Optimization",
        "Hard to find service times, directions, and contact info",
      ],
      solutionTitle: "Welcome New Visitors",
      solutionDescriptions: [
        "People can easily find your church and plan a visit.",
      ],
    },
    {
      title: "Outdated designs are turning visitors away",
      descriptions: [
        "Poor mobile experience",
        "Old photos",
        "Broken pages or links",
      ],
      solutionTitle: "Strengthen Communication",
      solutionDescriptions: [
        "Keep members informed about events and ministries.",
      ],
    },
    {
      title: "Staff waste time updating content",
      descriptions: [
        "Difficult systems and software",
        "Multiple different tools",
        "Manual updates",
      ],
      solutionTitle: "Save Time",
      solutionDescriptions: ["Manage content without technical headaches."],
    },
  ];
  return (
    <section className="column section" id="column">
      <div className="column__container" ref={columnContainerRef}>
        <div
          className={`column__title-container ${
            flipped ? "column__title-container_flipped" : ""
          }`}
        >
          <div className="column__title-slider">
            <h2 className="column__title">
              Your Website Should Support Ministry, Not Create More Work
            </h2>

            <h2 className="column__title">
              Imagine a Website That Works for Your Church
            </h2>
          </div>
        </div>

        {window.innerWidth <= 768 ? (
          <div className="column__card-container">
            {cards.map((card, i) => (
              <div
                key={i}
                ref={(el) => (cardRefs.current[i] = el)}
                data-index={i}
                className={`column__card ${
                  flippedCards.includes(i) ? "column__card--flipped" : ""
                }`}
              >
                <div className="column__card-inner">
                  <div className="column__card-front">
                    <h3 className="column__card-title">{card.title}</h3>
                    {card.descriptions?.map((desc, j) => (
                      <p key={j} className="column__card-description">
                        {desc}
                      </p>
                    ))}
                  </div>

                  <div className="column__card-back">
                    <h3 className="column__card-title">{card.solutionTitle}</h3>
                    {card.solutionDescriptions?.map((desc, j) => (
                      <p key={j} className="column__card-description-solution">
                        {desc}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="column__card-container">
            {cards.map((card, i) => (
              <div
                key={i}
                className={`column__card ${
                  flipped ? `column__card--flipped-${i}` : ""
                }`}
              >
                <div className="column__card-inner">
                  <div className="column__card-front">
                    <h3 className="column__card-title">{card.title}</h3>
                    {card.descriptions?.map((desc, j) => (
                      <p key={j} className="column__card-description">
                        {desc}
                      </p>
                    ))}
                  </div>

                  <div className="column__card-back">
                    <h3 className="column__card-title">{card.solutionTitle}</h3>
                    {card.solutionDescriptions?.map((desc, j) => (
                      <p key={j} className="column__card-description-solution">
                        {desc}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <div
          className={`column__cta-container ${flipped ? "column__cta-container_visible" : ""}`}
        >
          <CTA handleClick={() => setIsOpen(true)}>Schedule a call</CTA>
        </div>
      </div>
    </section>
  );
};

export default ColumnCardsSection;
