import "./Work.css";
import { kingsVideo, RFLVideo } from "../../assets";

const Work = () => {
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
            />
          </a>

          <span className="work__section-divider" />
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
            />
          </a>
          <span className="work__section-divider" />
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
      </div>
    </div>
  );
};

export default Work;
