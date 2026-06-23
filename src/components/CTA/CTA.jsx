import { useRef } from "react";
import "./CTA.css";

const CTA = ({ type, handleClick, follow = 0.3, className, children }) => {
  // follow = 0.5
  const btnRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!follow) {
      return;
    }
    const button = btnRef.current;
    const rect = button.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    button.style.transform = `translate(${x * follow}px, ${y * follow}px)`;
  };

  const handleMouseLeave = () => {
    if (!follow) {
      return;
    }
    btnRef.current.style.transform = "translate(0px, 0px)";
  };

  return (
    <button
      ref={btnRef}
      type={type}
      onClick={handleClick}
      className={`cta ${className || ""}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
};

export default CTA;
