import "./Footer.css";
import { NavLink } from "react-router-dom";
import { useGlobal } from "../GlobalState/GlobalState";

const Footer = () => {
  const { setIsOpen } = useGlobal();

  return (
    <div className="footer">
      <div className="footer__nav-container">
        <NavLink to={"/work"}>Work</NavLink>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
      </div>
      <div className="footer__bottom">Made by Ezra Bales 2026</div>
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
