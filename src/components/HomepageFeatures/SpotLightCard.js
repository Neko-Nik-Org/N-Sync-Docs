import React, { useRef, useEffect } from "react";
import styles from "./styles.module.css";

const SpotlightCard = ({ 
  children, 
  className = "", 
  spotlightColor = "rgba(46, 204, 113, 0.3)"
}) => {
  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    divRef.current.style.setProperty("--mouse-x", `${x}px`);
    divRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  // Set the spotlight color from props
  useEffect(() => {
    if (divRef.current) {
      divRef.current.style.setProperty("--spotlight-color", spotlightColor);
    }
  }, [spotlightColor]);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      className={`${styles.cardSpotlight} ${className}`}
    >
      {children}
    </div>
  );
};

export default SpotlightCard;
