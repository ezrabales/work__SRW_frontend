import CTA from "../../CTA/CTA";
import { useGlobal } from "../../GlobalState/GlobalState";
import "./CallToActionSection.css";

const CallToActionSection = () => {
  const { setIsOpen } = useGlobal();
  return (
    <div className="call section" id="action">
      <h2 className="call__title">So... Ready For A Better Church Website?</h2>
      <p className="call__description">
        Schedule a free consultation and see what's possible for your ministry.
      </p>
      <div className="call__cta-container">
        <CTA handleClick={() => setIsOpen(true)}>Schedule a Call</CTA>
      </div>
    </div>
  );
};
export default CallToActionSection;
