import { displayChurchVideo, kingsVideo, RFLVideo } from "../../../assets";
import DeckDisplay from "../../DisplayComponents/DeckDisplay/DeckDisplay";
import "./PortfolioSection.css";

const PortfolioSection = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <DeckDisplay
        title={"Check Out Our Work"}
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
                onClick: () => {
                  window.open(
                    "https://kingspropertymanagementmt.com/",
                    "_blank",
                    "noopener,noreferrer",
                  );
                },
              },
            ],
            video: kingsVideo,
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
                onClick: () => {
                  window.open(
                    "https://work-rfl-frontend.vercel.app/",
                    "_blank",
                    "noopener,noreferrer",
                  );
                },
              },
            ],
            video: RFLVideo,
          },
          {
            title: <>Display Church</>,
            description: (
              <>
                Created a mock Church website, called Display Church. The focus
                was a polished and smooth user experience, both on a computer or
                phone.
              </>
            ),
            btns: [
              {
                content: "Go to site",
                follow: 0.3,
                className: "deck__card-btn",
                onClick: () => {
                  window.open(
                    "https://work-mock-church-frontend.vercel.app/",
                    "_blank",
                    "noopener,noreferrer",
                  );
                },
              },
            ],
            video: displayChurchVideo,
          },
        ]}
      />
    </section>
  );
};
export default PortfolioSection;
