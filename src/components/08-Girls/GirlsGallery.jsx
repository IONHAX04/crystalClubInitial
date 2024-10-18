import { useRef, useState } from "react";
import PropTypes from "prop-types"; // Importing prop-types
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

import { useLocation } from "react-router-dom";

import "./Girls.css";

export default function GirlsGallery() {
  const location = useLocation();
  const { name, images } = location.state || { name: "Unknown", images: [] };

  return (
    <section className="relative grid min-h-screen w-full place-content-center overflow-hidden bg-neutral-950">
      <h2 className="relative z-0 text-[20vw] font-black text-neutral-800 md:text-[200px]">
        {name}
      </h2>
      <Cards images={images} />
    </section>
  );
}

const Cards = ({ images = [] }) => {
  const containerRef = useRef(null);

  const generateDynamicStyles = (index, total) => {
    const top = `${Math.random() * 30 + index * 5}%`; // Random but spaced by index
    const left = `${Math.random() * 30 + index * 2}%`; // Random but spaced by index
    const rotate = `${(index % 2 === 0 ? 1 : -1) * (Math.random() * 15)}deg`; // Random rotation

    return { top, left, rotate };
  };

  return (
    <div className="absolute inset-0 z-10" ref={containerRef}>
      {images.map((image, index) => {
        const dynamicStyles = generateDynamicStyles(index, images.length);
        return (
          <Card
            key={index}
            containerRef={containerRef}
            src={image}
            alt={`Image ${index + 1}`}
            {...dynamicStyles} // Spread the dynamically generated styles
            className="w-96 h-96 md:w-44 md:h-64"
          />
        );
      })}
    </div>
  );
};

Cards.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
};

const Card = ({ containerRef, src, alt, top, left, rotate, className }) => {
  const [zIndex, setZIndex] = useState(0);

  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");

    let maxZIndex = -Infinity;

    els.forEach((el) => {
      let zIndex = parseInt(
        window.getComputedStyle(el).getPropertyValue("z-index")
      );

      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });

    setZIndex(maxZIndex + 1);
  };

  return (
    <motion.img
      onMouseDown={updateZIndex}
      style={{
        top,
        left,
        rotate,
        zIndex,
        width: "350px",
        objectFit: "contain",
        height: "560px",
      }}
      className={twMerge(
        "drag-elements absolute w-48 bg-neutral-200 p-1 pb-4",
        className
      )}
      src={src}
      alt={alt}
      drag
      dragConstraints={containerRef}
      dragElastic={0.65}
    />
  );
};

// Define prop types for Card
Card.propTypes = {
  containerRef: PropTypes.object,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  top: PropTypes.string.isRequired,
  left: PropTypes.string.isRequired,
  rotate: PropTypes.string,
  className: PropTypes.string,
};
