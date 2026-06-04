import "./Header.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`header ${hidden ? "header--hidden" : ""}`}>
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
