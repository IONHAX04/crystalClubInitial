import { useTranslation } from "react-i18next";

import { useRef } from "react";
import PropTypes from "prop-types";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import img1 from "../../assets/Images/img4.JPG";
import Header from "../01-Header/Header";

export default function Home() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  const IMG_PADDING = 12;
  const { t } = useTranslation("global");

  const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
    return (
      <div>
        <div className="relative h-[120vh] homePageContx">
          {/* <Header /> */}
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
          borderRadius: "10px",
          height: `calc(100vh - ${IMG_PADDING * 2}px)`,
          top: IMG_PADDING,
          scale,
        }}
        ref={targetRef}
        className="sticky overflow-hidden rounded-3xl"
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

  const ExampleContent = ({ title, paragraphs, buttonText, onClick }) => (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
      <h2 className="col-span-1 text-3xl text-[white] font-bold md:col-span-4">
        {title}
      </h2>
      <div className="col-span-1 md:col-span-8">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="mb-8 text-xl text-[white] md:text-2xl">
            {paragraph}
          </p>
        ))}
        <button
          className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit"
          onClick={onClick}
        >
          {buttonText} <FiArrowUpRight className="inline" />
        </button>
      </div>
    </div>
  );

  ExampleContent.propTypes = {
    title: PropTypes.string.isRequired,
    paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
    buttonText: PropTypes.string,
    onClick: PropTypes.func.isRequired,
  };

  TextParallaxContent.propTypes = {
    imgUrl: PropTypes.string.isRequired,
    subheading: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    children: PropTypes.node,
  };

  StickyImage.propTypes = {
    imgUrl: PropTypes.string.isRequired,
  };

  OverlayCopy.propTypes = {
    subheading: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
  };

  const contentData1 = {
    title: t("home.aboutOurClub"),
    paragraphs: [
      t("home.homeIntroOne"),
      t("home.homeIntroTwo"),
      t("home.homeIntroThree"),
    ],
    buttonText: t("gallery.galleryClubContact"),
  };

  const contentData2 = {
    title: t("home.aboutUs"),
    paragraphs: [t("home.aboutUsCont")],
    buttonText: t("home.discoverClub"),
  };

  return (
    <div className="bg-white">
      <TextParallaxContent
        subheading={t("home.welcome")}
        imgUrl={img1}
        heading="Crystal Club & Lounge"
      >
        <div className="contentOne">
          <ExampleContent
            {...contentData1}
            onClick={() => handleNavigate("/contactUs")}
          />
        </div>
      </TextParallaxContent>

      <TextParallaxContent
        subheading={t("home.quality")}
        imgUrl={img1}
        heading={t("home.never")}
      >
        <div className="contentTwo">
          <ExampleContent
            {...contentData2}
            onClick={() => handleNavigate("/discover")}
          />
        </div>
      </TextParallaxContent>
    </div>
  );
}
