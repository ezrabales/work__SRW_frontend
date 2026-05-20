import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header__left">
          <NavLink to="/work">Work</NavLink>
        </div>
        <div className="header__center">
          <NavLink to="/" className="header__logo">
            <span className="header__logo-short">SRW</span>
            <span className="header__logo-full">Solid Rock Websites</span>
          </NavLink>
        </div>
        <div className="header__right">
          <NavLink to="/about">About</NavLink>
        </div>
      </div>
      <span className="header__spacer" />
    </>
  );
};
export default Header;
