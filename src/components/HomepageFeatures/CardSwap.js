import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import gsap from "gsap";
import styles from "./styles.module.css"; // Use module CSS properly

export const Card = forwardRef(({ customClass = "", ...rest }, ref) => (
  <div
    ref={ref}
    {...rest}
    className={`${styles.card} ${customClass} ${rest.className || ""}`.trim()}
  />
));
Card.displayName = "Card";

// Slot function for card position
const makeSlot = (i, distX, distY, total) => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i,
});

// Initial placement of a card
const placeNow = (el, slot, skew) => {
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: "center center",
    zIndex: slot.zIndex,
    force3D: true,
  });
};

const CardSwap = ({
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = false,
  onCardClick,
  skewAmount = 6,
  easing = "elastic",
  children,
}) => {
  const containerRef = useRef(null);
  const cards = useMemo(
    () => Children.toArray(children).filter(isValidElement),
    [children]
  );
  const cardRefs = useRef([]);
  const [paused, setPaused] = useState(false);
  const easingStyle =
    easing === "elastic"
      ? "elastic.out(0.6,0.9)"
      : easing === "bounce"
      ? "bounce.out"
      : "power2.out";

  useEffect(() => {
    const total = cards.length;
    if (total < 2) return;

    cardRefs.current = cardRefs.current.slice(0, total);

    // Initial position
    cardRefs.current.forEach((el, i) => {
      const slot = makeSlot(i, cardDistance, verticalDistance, total);
      placeNow(el, slot, skewAmount);
    });

    let interval;
    const rotateCards = () => {
      const [first, ...rest] = cardRefs.current;
      cardRefs.current = [...rest, first];

      cardRefs.current.forEach((el, i) => {
        const slot = makeSlot(i, cardDistance, verticalDistance, total);
        gsap.to(el, {
          ...slot,
          skewY: skewAmount,
          xPercent: -50,
          yPercent: -50,
          zIndex: slot.zIndex,
          duration: 1.2,
          ease: easingStyle,
        });
      });
    };

    if (!paused) {
      interval = setInterval(rotateCards, delay);
    }

    return () => clearInterval(interval);
  }, [cards, cardDistance, verticalDistance, skewAmount, delay, paused, easing]);

  return (
    <div
      ref={containerRef}
      className={styles.container}
      onMouseEnter={() => pauseOnHover && setPaused(true)}
      onMouseLeave={() => pauseOnHover && setPaused(false)}
    >
      {cards.map((card, index) =>
        cloneElement(card, {
          ref: (el) => (cardRefs.current[index] = el),
          key: index,
          onClick: () => onCardClick?.(index),
        })
      )}
    </div>
  );
};

export default CardSwap;
