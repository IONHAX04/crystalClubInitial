import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

export const TextParallaxContentExample = () => {
  return (
    <div className="bg-white">
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Collaborate"
        heading="Built for all of us."
      >
        <ExampleContent />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Quality"
        heading="Never compromise."
      >
        <ExampleContent />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1504610926078-a1611febcad3?q=80&w=2416&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Modern"
        heading="Dress for the best."
      >
        <ExampleContent />
      </TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const ExampleContent = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      Additional content explaining the above card here
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
        blanditiis soluta eius quam modi aliquam quaerat odit deleniti minima
        maiores voluptate est ut saepe accusantium maxime doloremque nulla
        consectetur possimus.
      </p>
      <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        reiciendis blanditiis aliquam aut fugit sint.
      </p>
      <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
        Learn more <FiArrowUpRight className="inline" />
      </button>
    </div>
  </div>
);

export default TextParallaxContentExample;

// HORIZONTAL INFINITE SCROLLING

// import { motion, useTransform, useScroll } from "framer-motion";
// import { useRef } from "react";
// import PropTypes from "prop-types";

// import logo1 from "../../assets/Logo/logo-black.png";
// import logo2 from "../../assets/Logo/logo-red.png";
// import logo3 from "../../assets/Logo/logo-white.png";

// import "./Example.css";

// export default function Example() {
//   const cards = [
//     {
//       url: logo1,
//       title: "Title 1",
//       id: 1,
//     },
//     {
//       url: logo2,
//       title: "Title 2",
//       id: 2,
//     },
//     {
//       url: logo3,
//       title: "Title 3",
//       id: 3,
//     },
//     {
//       url: logo1,
//       title: "Title 4",
//       id: 4,
//     },
//     {
//       url: logo2,
//       title: "Title 5",
//       id: 5,
//     },
//     {
//       url: logo3,
//       title: "Title 6",
//       id: 6,
//     },
//     {
//       url: logo1,
//       title: "Title 7",
//       id: 7,
//     },
//   ];

//   const HorizontalScrollCarousel = () => {
//     const targetRef = useRef(null);
//     const { scrollYProgress } = useScroll({
//       target: targetRef,
//     });

//     const x = useTransform(scrollYProgress, [0, 1], ["30%", "-95%"]);

//     return (
//       <section ref={targetRef} className="relative h-[300vh]">
//         <div className="sticky top-0 flex h-screen items-center overflow-hidden">
//           <motion.div style={{ x }} className="flex gap-4">
//             {cards.map((card) => {
//               return <Card card={card} key={card.id} />;
//             })}
//           </motion.div>
//         </div>
//       </section>
//     );
//   };

//   const Card = ({ card }) => {
//     return (
//       <div
//         key={card.id}
//         className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
//       >
//         <div
//           style={{
//             backgroundImage: `url(${card.url})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//           className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
//         ></div>
//         <div className="absolute inset-0 z-10 grid place-content-center">
//           <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
//             {card.title}
//           </p>
//         </div>
//       </div>
//     );
//   };

//   Card.propTypes = {
//     card: PropTypes.shape({
//       url: PropTypes.string.isRequired,
//       title: PropTypes.string.isRequired,
//       id: PropTypes.number.isRequired,
//     }).isRequired,
//   };

//   return (
//     <div>
//       <div className="homePageContents">
//         <div className="introContents">
//           <h2>Welcome to Crystal Club & Lounge</h2>
//           <p>
//             Experience unforgettable evenings full of elegance, sensuality and
//             first-class entertainment. The Crystal Club & Lounge promises
//             entertaining shows with enchanting girls and great drinks.
//           </p>
//           <p>
//             Enjoy breathtaking striptease shows and seductive table dances with
//             exotic dancers. Our range of drinks leaves nothing to be desired -
//             from champagne to cocktails and spirits. With us you will experience
//             the perfect combination of luxury and entertainment.
//           </p>
//           <p>
//             Welcome to the Crystal Club & Lounge, where nights become
//             unforgettable.
//           </p>
//         </div>

//         <div className="testimonialContents">
//           <div className="testimonials">
//             <div className="">
//               <HorizontalScrollCarousel />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
