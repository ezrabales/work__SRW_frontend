import { useEffect, useRef, useState } from "react";
import "./Main.css";
import HeroSection from "../Sections/HeroSection/HeroSection";
import ColumnCardsSection from "../Sections/ColumnCardsSection/ColumnCardsSection";
import StepsSection from "../Sections/StepsSection/StepsSection";
import PricingSection from "../Sections/PricingSection/PricingSection";
import PortfolioSection from "../Sections/PortfolioSection/PortfolioSection";
import AboutSection from "../Sections/AboutSection/AboutSection";
import CallToActionSection from "../Sections/CallToActionSection/CallToActionSection";

const Main = () => {
  const [activeSection, setActiveSection] = useState("hero");

  const isMobile = window.innerWidth <= 900;
  const [navbarIsOpen, setNavbarIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { id: "hero", text: "Home" },
    { id: "column", text: "The Solution" },
    { id: "steps", text: "The Process" },
    { id: "pricing", text: "Pricing" },
    { id: "portfolio", text: "Portfolio" },
    { id: "about", text: "About Me" },
    { id: "action", text: "Ready For Action?" },
  ];

  // navbar class handler
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section");
      const viewportMiddle = window.innerHeight / 2;

      let closestSection = null;
      let closestDistance = Infinity;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionMiddle = rect.top + rect.height / 2;

        const distance = Math.abs(sectionMiddle - viewportMiddle);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestSection = section;
        }
      });

      if (closestSection) {
        setActiveSection(closestSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(true);
      window.removeEventListener("scroll", handleScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="main">
      {isMobile ? (
        scrolled && (
          <div className="main__navbar-container">
            <p
              className="main__navbar-title"
              onClick={() => setNavbarIsOpen((prev) => !prev)}
            >
              Menu
            </p>
            <div
              className={`main__navbar ${
                navbarIsOpen ? "main__navbar_open" : ""
              }`}
            >
              {navLinks.map((navLink, i) => (
                <a
                  key={i}
                  href={`#${navLink.id}`}
                  onClick={() => setNavbarIsOpen((prev) => !prev)}
                  className={`main__navbar-link ${
                    activeSection === navLink.id
                      ? "main__navbar-link_active"
                      : ""
                  }`}
                >
                  {navLink.text}
                </a>
              ))}
            </div>
          </div>
        )
      ) : (
        <div className="main__navbar-container">
          <div className="main__navbar">
            {navLinks.map((navLink, i) => (
              <a
                key={i}
                href={`#${navLink.id}`}
                className={`main__navbar-link ${activeSection == navLink.id ? "main__navbar-link_active" : ""}`}
              >
                {navLink.text}
              </a>
            ))}
          </div>
        </div>
      )}
      <div className="main__content-container">
        <HeroSection />
        <ColumnCardsSection />
        <StepsSection />
        <PricingSection />
        <PortfolioSection />
        <AboutSection />
        <CallToActionSection />
      </div>
    </div>
  );
};

export default Main;
