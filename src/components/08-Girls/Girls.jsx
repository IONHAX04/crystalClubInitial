import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

// Importing all images
import amber1 from "../../assets/GirlsImg/Amber/img1.JPG";
import amber2 from "../../assets/GirlsImg/Amber/img2.JPG";

import angelique1 from "../../assets/GirlsImg/Angelique/img1.JPG";
import angelique2 from "../../assets/GirlsImg/Angelique/img2.JPG";
import angelique3 from "../../assets/GirlsImg/Angelique/img3.JPG";

import Freya1 from "../../assets/GirlsImg/Freya/img1.JPG";
import Freya2 from "../../assets/GirlsImg/Freya/im2.JPG";
import Freya3 from "../../assets/GirlsImg/Freya/img3.JPG";

import Linda1 from "../../assets/GirlsImg/Linda/img1.JPG";
import Linda2 from "../../assets/GirlsImg/Linda/img2.JPG";
import Linda3 from "../../assets/GirlsImg/Linda/img3.JPG";
import Linda4 from "../../assets/GirlsImg/Linda/img4.JPG";

import Maroona1 from "../../assets/GirlsImg/Maroona/img1.JPG";
import Maroona2 from "../../assets/GirlsImg/Maroona/img2.JPG";
import Maroona3 from "../../assets/GirlsImg/Maroona/img3.JPG";

import Mylla1 from "../../assets/GirlsImg/Mylla/img1.jpg";
import Mylla2 from "../../assets/GirlsImg/Mylla/img2.jpg";
import Mylla3 from "../../assets/GirlsImg/Mylla/img3.jpg";

import Noemi1 from "../../assets/GirlsImg/Noemi/img1.JPG";
import Noemi2 from "../../assets/GirlsImg/Noemi/img2.JPG";
import Noemi3 from "../../assets/GirlsImg/Noemi/img3.JPG";

export default function Girls() {
  return (
    <section className="relative grid min-h-screen w-full place-content-center overflow-hidden bg-neutral-950">
      <h2 className="relative z-0 text-[20vw] font-black text-neutral-800 md:text-[200px]">
        Crystal Club Girls
      </h2>
      <Cards />
    </section>
  );
}

const Cards = () => {
  const containerRef = useRef(null);

  return (
    <div className="absolute inset-0 z-10" ref={containerRef}>
      <Card
        containerRef={containerRef}
        src={amber1}
        alt="Amber image 1"
        rotate="6deg"
        top="20%"
        left="25%"
        className="w-36 md:w-56"
      />
      <Card
        containerRef={containerRef}
        src={amber2}
        alt="Amber image 2"
        rotate="-8deg"
        top="30%"
        left="35%"
        className="w-40 md:w-60"
      />
      <Card
        containerRef={containerRef}
        src={angelique1}
        alt="Angelique image 1"
        rotate="12deg"
        top="45%"
        left="60%"
        className="w-24 md:w-48"
      />
      <Card
        containerRef={containerRef}
        src={angelique2}
        alt="Angelique image 2"
        rotate="-10deg"
        top="50%"
        left="70%"
        className="w-36 md:w-56"
      />
      <Card
        containerRef={containerRef}
        src={angelique3}
        alt="Angelique image 3"
        rotate="15deg"
        top="55%"
        left="80%"
        className="w-40 md:w-60"
      />
      <Card
        containerRef={containerRef}
        src={Freya1}
        alt="Freya image 1"
        rotate="-6deg"
        top="20%"
        left="40%"
        className="w-52 md:w-80"
      />
      <Card
        containerRef={containerRef}
        src={Freya2}
        alt="Freya image 2"
        rotate="8deg"
        top="40%"
        left="50%"
        className="w-36 md:w-60"
      />
      <Card
        containerRef={containerRef}
        src={Freya3}
        alt="Freya image 3"
        rotate="-12deg"
        top="30%"
        left="60%"
        className="w-44 md:w-72"
      />
      <Card
        containerRef={containerRef}
        src={Linda1}
        alt="Linda image 1"
        rotate="8deg"
        top="50%"
        left="40%"
        className="w-48 md:w-72"
      />
      <Card
        containerRef={containerRef}
        src={Linda2}
        alt="Linda image 2"
        rotate="-6deg"
        top="55%"
        left="50%"
        className="w-40 md:w-64"
      />
      <Card
        containerRef={containerRef}
        src={Linda3}
        alt="Linda image 3"
        rotate="10deg"
        top="60%"
        left="65%"
        className="w-48 md:w-72"
      />
      <Card
        containerRef={containerRef}
        src={Linda4}
        alt="Linda image 4"
        rotate="-15deg"
        top="40%"
        left="70%"
        className="w-52 md:w-80"
      />
      <Card
        containerRef={containerRef}
        src={Maroona1}
        alt="Maroona image 1"
        rotate="18deg"
        top="20%"
        left="65%"
        className="w-40 md:w-64"
      />
      <Card
        containerRef={containerRef}
        src={Maroona2}
        alt="Maroona image 2"
        rotate="-10deg"
        top="30%"
        left="75%"
        className="w-44 md:w-72"
      />
      <Card
        containerRef={containerRef}
        src={Maroona3}
        alt="Maroona image 3"
        rotate="14deg"
        top="25%"
        left="80%"
        className="w-48 md:w-76"
      />
      <Card
        containerRef={containerRef}
        src={Mylla1}
        alt="Mylla image 1"
        rotate="-3deg"
        top="35%"
        left="55%"
        className="w-24 md:w-48"
      />
      <Card
        containerRef={containerRef}
        src={Mylla2}
        alt="Mylla image 2"
        rotate="10deg"
        top="45%"
        left="65%"
        className="w-36 md:w-60"
      />
      <Card
        containerRef={containerRef}
        src={Mylla3}
        alt="Mylla image 3"
        rotate="-6deg"
        top="50%"
        left="75%"
        className="w-44 md:w-72"
      />
      <Card
        containerRef={containerRef}
        src={Noemi1}
        alt="Noemi image 1"
        rotate="19deg"
        top="54%"
        left="17%"
        className="w-48 md:w-72"
      />
      <Card
        containerRef={containerRef}
        src={Noemi2}
        alt="Noemi image 2"
        rotate="-12deg"
        top="60%"
        left="25%"
        className="w-40 md:w-64"
      />
      <Card
        containerRef={containerRef}
        src={Noemi3}
        alt="Noemi image 3"
        rotate="16deg"
        top="65%"
        left="30%"
        className="w-48 md:w-72"
      />
    </div>
  );
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
