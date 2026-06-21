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
  const canvasCrossRef = useRef(null);
  const mouse = useRef({ x: -1000, y: -1000 });

  const navLinks = [
    { id: "hero", text: "Home" },
    { id: "column", text: "The Solution" },
    { id: "steps", text: "The Process" },
    { id: "pricing", text: "Pricing" },
    { id: "portfolio", text: "Portfolio" },
    { id: "about", text: "About Me" },
    { id: "action", text: "Ready For Action?" },
  ];

  // canvas effect
  useEffect(() => {
    const canvas = canvasCrossRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    // ---------- PARTICLES ----------
    const particles = [];

    const w = () => canvas.width;
    const h = () => canvas.height;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2 - 10;

    const scale = Math.max(
      0.5,
      Math.min(canvas.width / 1920, canvas.height / 1080, 1),
    );

    const COUNT = Math.floor(7000 * scale);

    const verticalHeight = 850 * scale;
    const verticalWidth = 150 * scale;

    const horizontalLength = 285 * scale;
    const horizontalWidth = 150 * scale;

    const beamY = centerY - 150 * scale;

    const verticalCount = COUNT * 0.6;
    const horizontalCount = COUNT * 0.4;

    // ---------- vertical pillar ----------
    for (let i = 0; i < verticalCount; i++) {
      const x = centerX + (Math.random() - 0.5) * verticalWidth;

      const y = centerY - verticalHeight / 2 + Math.random() * verticalHeight;

      particles.push({
        x,
        y,
        baseX: x,
        baseY: y,
        vx: 0,
        vy: 0,
        size: Math.random() * 2 + 0.6,
      });
    }

    // ---------- right horizontal beam ----------
    for (let i = 0; i < horizontalCount / 2; i++) {
      const x =
        centerX +
        horizontalLength / 2 +
        verticalWidth / 2 -
        horizontalLength / 2 +
        Math.random() * horizontalLength;

      const y = beamY + (Math.random() - 0.5) * horizontalWidth;

      particles.push({
        x,
        y,
        baseX: x,
        baseY: y,
        vx: 0,
        vy: 0,
        size: Math.random() * 2 + 0.6,
      });
    }

    // ---------- left horizontal beam ----------
    for (let i = 0; i < horizontalCount / 2; i++) {
      const x =
        centerX -
        horizontalLength / 2 -
        verticalWidth / 2 -
        horizontalLength / 2 +
        Math.random() * horizontalLength;

      const y = beamY + (Math.random() - 0.5) * horizontalWidth;

      particles.push({
        x,
        y,
        baseX: x,
        baseY: y,
        vx: 0,
        vy: 0,
        size: Math.random() * 2 + 0.6,
      });
    }

    // ---------- MOUSE ----------
    const handleMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const handleTouchMove = (e) => {
      const touch = e.touches[0];

      if (!touch) return;

      mouse.current.x = touch.clientX;
      mouse.current.y = touch.clientY;
    };

    const handleTouchStart = (e) => {
      const touch = e.touches[0];

      if (!touch) return;

      mouse.current.x = touch.clientX;
      mouse.current.y = touch.clientY;
    };

    const handleTouchEnd = () => {
      mouse.current.x = -9999;
      mouse.current.y = -9999;
    };

    window.addEventListener("mousemove", handleMove);

    window.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });

    window.addEventListener("touchmove", handleTouchMove, {
      passive: true,
    });

    window.addEventListener("touchend", handleTouchEnd);

    // ---------- ANIMATION ----------

    const animate = () => {
      ctx.clearRect(0, 0, w(), h());

      const friction = 0.89 + Math.random() * 0.095;
      const returnForce = 0.0008;
      const maxDist = 50;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        const dx = p.x - mouse.current.x;
        const dy = p.y - mouse.current.y;

        const dist = Math.sqrt(dx * dx + dy * dy);

        let force = 0;

        if (dist < maxDist) {
          force = 0.95 - dist / maxDist;

          const angle = Math.atan2(dy, dx);
          const push = force * 1.1;

          p.vx += Math.cos(angle) * push;
          p.vy += Math.sin(angle) * push;
        }

        const bx = p.baseX - p.x;
        const by = p.baseY - p.y;

        p.vx += bx * returnForce;
        p.vy += by * returnForce;

        p.vx *= friction;
        p.vy *= friction;

        p.x += p.vx;
        p.y += p.vy;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size + force * 2.5, 0, Math.PI * 2);

        ctx.fillStyle = `rgba(17,17,17,${0.4 + force * 0.8})`;
        ctx.shadowBlur = 10 * force;
        ctx.shadowColor = "white";
        ctx.fill();
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

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

  return (
    <div className="main">
      <div className="main__navbar-container">
        <div className="main__navbar">
          {navLinks.map((navLink, i) => (
            <a
              href={`#${navLink.id}`}
              className={`main__navbar-link ${activeSection == navLink.id ? "main__navbar-link_active" : ""}`}
            >
              {navLink.text}
            </a>
          ))}
        </div>
      </div>
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
