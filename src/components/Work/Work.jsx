import "./Work.css";
import { kingsVideo } from "../../assets";

const Work = () => {
  return (
    <div className="work">
      <h1 className="work__title">Work</h1>
      <div className="work__container">
        <div className="work__section">
          <video
            src={kingsVideo}
            alt="kings property management website video"
            className="work__section-vid"
            autoPlay
            loop
          />
          <span className="work__section-divider" />
          <p className="work__section-description">description</p>
        </div>
        <div className="work__section">
          <video
            src={kingsVideo}
            alt="kings property management website video"
            className="work__section-vid"
            autoPlay
            loop
          />
          <span className="work__section-divider" />
          <p className="work__section-description">description</p>
        </div>
      </div>
    </div>
  );
};

export default Work;
