import "./Footer.css";
import { NavLink } from "react-router-dom";
import { useGlobal } from "../GlobalState/GlobalState";

const Footer = () => {
  const { setIsOpen } = useGlobal();

  return (
    <div className="footer">
      <div className="footer__bottom">Solid Rock Websites</div>
      <div className="footer__contact-container">
        <button
          className="footer__contact"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          Get in contact
        </button>
      </div>
    </div>
  );
};
export default Footer;
