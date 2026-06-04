import "./Work.css";
import { kingsVideo, RFLVideo } from "../../assets";
import {
  FaCheck,
  FaGithub,
  FaGithubAlt,
  FaGithubSquare,
  FaLinkedin,
} from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { SiIndeed, SiLinkerd } from "react-icons/si";
import { useGlobal } from "../GlobalState/GlobalState";

const Work = () => {
  const { isOpen, setIsOpen } = useGlobal();
  return (
    <div className="work">
      <h1 className="work__title">Work</h1>
      <div className="work__container">
        <div className="work__section">
          <a
            href="https://kingspropertymanagementmt.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <video
              src={kingsVideo}
              alt="kings property management website video"
              className="work__section-vid"
              autoPlay
              loop
              muted
              playsInline
            />
          </a>

          <span className="work__grid-section-divider" />
          <p className="work__section-description">
            <span className="description-title">Kings Property Management</span>
            <br />
            <br />
            Built a modern, multi-page business website for a property
            management company focused on credibility, lead generation, and
            operational clarity. The project involved transforming complex
            service information into a clean, intuitive user experience through
            responsive layouts, clear content structure, and scalable frontend
            development that showcases property services, maintenance solutions,
            and a strong professional brand presence.
            <br />
            <br />
            The workflow emphasized UX strategy, information hierarchy,
            responsive design, and business-focused development to deliver a
            professional platform that supports customer communication, service
            visibility, and long-term company growth.
          </p>
        </div>
        <div className="work__section">
          <a
            href="https://work-rfl-frontend.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <video
              src={RFLVideo}
              alt="kings property management website video"
              className="work__section-vid"
              autoPlay
              loop
              playsInline
              muted
            />
          </a>
          <span className="work__grid-section-divider" />
          <p className="work__section-description">
            <span className="description-title">Resources for Leaders</span>
            <br />
            <br />
            Built a modern, responsive web platform focused on delivering a
            clean, interactive user experience through strong visual design,
            structured layouts, and scalable frontend development. The project
            emphasized usability, performance, and polished interface design to
            create an engaging digital experience with clear navigation, dynamic
            content presentation, and a professional, modern aesthetic.
            <br />
            <br />
            The workflow emphasized UI/UX strategy, responsive design,
            component-based development, and performance-focused implementation
            to deliver a scalable frontend experience optimized for
            accessibility, maintainability, and smooth cross-device usability.
          </p>
        </div>
        <span className="work__grid-section-divider" />
        <div className="work__social-container">
          <a
            href="https://github.com/ezrabales"
            className="work__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={64} color="white" />
          </a>
          <a
            href="https://www.linkedin.com/in/ezra-bales-9880a9327/"
            className="work__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={64} color="white" />
          </a>
        </div>

        <div className="work__workflow-container">
          <h2 className="work__title">How it works: </h2>
          {[
            {
              title: "Discovery",
              description:
                "We learn about your church, ministry goals, audience, and content needs. Together we'll determine what pages, features, and functionality your website requires.",
            },
            {
              title: "Strategy & planning",
              description:
                "We create the structure of your website, organize content, plan user flows, and map out the pages visitors will use most.",
            },
            {
              title: "Design & development",
              description:
                "Your website is designed and built from scratch with a focus on mobile usability, performance, accessibility, and search engine optimization.",
            },
            {
              title: "Launch & support",
              description:
                "After testing and final approval, your website goes live. Ongoing care plans are available for updates, maintenance, and support.",
            },
          ].map((step, index) => {
            return (
              <div key={index} className="work__workflow-step">
                <div className="work__workflow-list-items">
                  <div className="work__workflow-circle" />
                  <p className="work__workflow-number">{index + 1}</p>
                </div>
                <div className="work__workflow-step-text">
                  <h3 className="work__workflow-step-title">{step.title}</h3>
                  <p className="work__workflow-step-description">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <span className="work__section-divider" />
        <div className="work__prices-container">
          <h2 className="work__title">Pricing: </h2>
          {/* inital fee */}
          <h3 className="work__prices-title">Get your church online</h3>
          <p className="work__prices-subtitle">
            One-time build fee — choose the package that fits your ministry
            size.
          </p>
          <div className="work__prices-cards-container">
            {[
              {
                title: "Starter",
                price: "$1,000",
                description: (
                  <>
                    one-time. <br /> Perfect for new or small churches
                  </>
                ),
                featured: false,
                cta: "Get Started",
                list: [
                  "Home page",
                  "About page",
                  "Service times",
                  "Contact form",
                  "Mobile-responsive design",
                  "Basic SEO",
                ],
              },
              {
                title: "Growth",
                price: "$1,500–$2,500",
                description: (
                  <>
                    one-time. <br /> Great for growing congregations
                  </>
                ),
                featured: true,
                cta: "Get Started",
                list: [
                  <p style={{ color: "#ffd900" }}>Everything in Starter</p>,
                  "Up to 8 custom pages",
                  "Mobile-responsive design",
                  "Sermon archive integration",
                  "Events calendar integration",
                  "Volunteer & giving links",
                  "Contact forms",
                  "SEO optimization",
                  "Analytics setup",
                ],
              },
              {
                title: "Custom ministry",
                price: "Custom",
                description: (
                  <>
                    quote. <br /> For larger or complex ministries
                  </>
                ),
                featured: false,
                cta: "Request a quote",
                list: [
                  <p style={{ color: "#ffd900" }}>
                    Everything in Starter + Growth
                  </p>,
                  "Membership portals",
                  "Advanced event systems",
                  "Custom functionality",
                  "Tailored to your needs",
                ],
              },
            ].map((card, index) => {
              return (
                <div
                  key={index}
                  className={`work__prices-card ${card.featured ? "work__prices-card_featured" : ""}`}
                >
                  {card.featured ? (
                    <div className="work__prices-featured-title">
                      Most Popular
                    </div>
                  ) : (
                    ""
                  )}
                  <h4 className="work__prices-card-title">{card.title}</h4>
                  <p className="work__prices-card-description">
                    <span style={{ fontSize: "30px" }}>{card.price} </span>
                    {card.description}
                  </p>
                  <span className="work__prices-card-divider" />
                  {card.list.map((item, i) => {
                    return (
                      <p key={i} className="work__prices-list-item">
                        <FaCheck color="green" /> {item}
                      </p>
                    );
                  })}
                  <button
                    className="work__prices-btn"
                    onClick={() => setIsOpen(true)}
                  >
                    {card.cta}
                  </button>
                </div>
              );
            })}
          </div>
          {/* monthly fee */}
          <h3 className="work__prices-title">
            Keep your site running smoothly
          </h3>
          <p className="work__prices-subtitle">
            Ongoing support, updates, and maintenance — so you can focus on
            ministry.
          </p>
          <div className="work__prices-cards-container">
            {[
              {
                title: "Basic care",
                price: "$79",
                description: (
                  <>
                    /mo <br />
                    Essentials covered
                  </>
                ),
                featured: false,
                cta: "Get Started",
                list: [
                  "Hosting",
                  "Security updates",
                  "Monthly backups",
                  "30 min/mo content edits",
                ],
              },
              {
                title: "Growth care",
                price: "$129",
                description: (
                  <>
                    /mo <br />
                    For active, growing churches
                  </>
                ),
                featured: true,
                cta: "Get Started",
                list: [
                  <p style={{ color: "#ffd900" }}>Everything in Basic care</p>,
                  "Up to 2 hrs/mo updates",
                  "Content changes & page additions",
                  "Priority support",
                ],
              },
              {
                title: "Active ministry care",
                price: "$199",
                description: (
                  <>
                    /mo <br />
                    High-volume ministries
                  </>
                ),
                featured: false,
                cta: "Get Started",
                list: [
                  <p style={{ color: "#ffd900" }}>
                    Everything in Basic care + Growth care
                  </p>,
                  "Up to 4 hrs/mo updates",
                  "Top priority service",
                ],
              },
            ].map((card, index) => {
              return (
                <div
                  key={index}
                  className={`work__prices-card ${card.featured ? "work__prices-card_featured" : ""}`}
                >
                  {card.featured ? (
                    <div className="work__prices-featured-title">
                      Most Popular
                    </div>
                  ) : (
                    ""
                  )}
                  <h4 className="work__prices-card-title">{card.title}</h4>
                  <p className="work__prices-card-description">
                    <span style={{ fontSize: "30px" }}>{card.price} </span>
                    {card.description}
                  </p>
                  <span className="work__prices-card-divider" />
                  {card.list.map((item, i) => {
                    return (
                      <p key={i} className="work__prices-list-item">
                        <FaCheck color="green" /> {item}
                      </p>
                    );
                  })}
                  <button
                    className="work__prices-btn"
                    onClick={() => setIsOpen(true)}
                  >
                    {card.cta}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
