import CTA from "../../CTA/CTA";
import { useGlobal } from "../../GlobalState/GlobalState";
import "./StepsSection.css";

const StepsSection = () => {
  const { setIsOpen } = useGlobal();
  const steps = [
    {
      title: (
        <CTA handleClick={() => setIsOpen(true)} className={"steps__cta"}>
          Schedule a Call
        </CTA>
      ),
      description:
        "Tell us about your church, goals, and the challenges you're facing with your current website.",
    },
    {
      title: "We Build Your Site",
      description:
        "We design and develop a modern, mobile-friendly website tailored to your ministry.",
    },
    {
      title: "Launch and Grow!",
      description:
        "Welcome visitors with confidence and keep your congregation connected through a site built to support growth.",
    },
  ];
  return (
    <div className="steps__container section" id="steps">
      <h2 className="steps__title">Getting Started Is Simple: </h2>
      {steps.map((step, i) => {
        return (
          <div key={i} className="steps__step">
            <div className="steps__list-items">
              <div className="steps__circle" />
              <p className="steps__number">{i + 1}</p>
            </div>
            <div className="steps__step-text">
              <h3 className="steps__step-title">{step.title}</h3>
              <p className="steps__step-description">{step.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default StepsSection;
