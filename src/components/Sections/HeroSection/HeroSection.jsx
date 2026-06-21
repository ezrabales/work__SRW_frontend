import { useEffect, useRef } from "react";
import "./HeroSection.css";
import CTA from "../../CTA/CTA";
import { RFLVideo } from "../../../assets";

const HeroSection = ({ ref }) => {
  return (
    <section className="hero section" id="hero" ref={ref}>
      <div className="hero__left">
        <h1 className="hero__left-headline">Websites Built for Churches</h1>
        <p className="hero__left-subheadline">
          Help people: <br /> find your church,
          <br /> connect with your church,
          <br /> and take their next step in the faith.
        </p>
        <div className="hero__left-btn-container">
          <CTA>Schedule a call</CTA>
          <CTA className="hero__left-btn-alt">view portfolio</CTA>
        </div>
      </div>
      <div className="hero__right">
        <div className="hero__right-container">
          <h2 className="hero__right-title">Our Latest Project...</h2>
          <div className="hero__right-vid-container">
            <a
              href="https://work-rfl-frontend.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <video
                src={RFLVideo}
                className="hero__vid"
                autoPlay
                loop
                playsInline
                muted
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
