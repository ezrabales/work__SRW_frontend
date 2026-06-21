import DeckDisplay from "../../DisplayComponents/DeckDisplay/DeckDisplay";
import "./PortfolioSection.css";

const PortfolioSection = () => {
  return (
    <section className="section" id="portfolio">
      <DeckDisplay
        title={"Check Out My Work"}
        cards={[
          {
            title: <>King's Property Management</>,
            description: (
              <>
                Modern property management website focused on trust, service
                clarity, and lead generation. Designed to help property owners
                quickly understand offerings and connect with the business.
              </>
            ),
            btns: [
              {
                content: "Go to site",
                follow: 0.3,
                className: "deck__card-btn",
              },
            ],
            img: "",
          },
          {
            title: <>Resources for Leaders</>,
            description: (
              <>
                Developed a responsive resource platform that helps church
                leaders quickly find and engage with ministry content. Built
                with a focus on usability, clear organization, and a polished
                user experience across devices.
              </>
            ),
            btns: [
              {
                content: "Go to site",
                follow: 0.3,
                className: "deck__card-btn",
              },
            ],
            img: "",
          },
        ]}
      />
    </section>
  );
};
export default PortfolioSection;
