import "./About.css";
import { useGlobal } from "../GlobalState/GlobalState";

const About = () => {
  const { setIsOpen } = useGlobal();

  return (
    <div className="about">
      <h1 className="about__title">About</h1>
      <p className="about__description">
        Solid Rock Websites equips the Church with modern, mobile friendly, and
        visually engaging websites that strengthen community and expand outreach.
      </p>
      <p className="about__description">
        I love Jesus and I love coding. I want to combine my skills and desires
        to make something beautiful that also furthers the Kingdom of God.
      </p>
      <button
        className="about__connect-btn"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Let's get in touch
      </button>
    </div>
  );
};
export default About;
