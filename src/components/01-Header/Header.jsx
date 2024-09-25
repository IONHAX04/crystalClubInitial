import { useTranslation } from "react-i18next";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { AnimatePresence, motion } from "framer-motion";

import german from "../../assets/Icons/german.png";
import english from "../../assets/Icons/english.png";

import Spinners from "../15-Spinner/Spinners";
import logo from "../../assets/Logo/logo-red.png";

import "./Header.css";

export default function Header() {
  const { t, i18n } = useTranslation("global");
  const [loading, setLoading] = useState(false);
  const [headerBg, setHeaderBg] = useState("transparent");
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
    setOpen(false);
  };

  const handleChangeLang = (lang) => {
    setLoading(true);
    setTimeout(() => {
      i18n.changeLanguage(lang);
      setLoading(false);
    }, 800);
  };

  const currentLang = i18n.language;

  const languageIcon = currentLang === "en" ? german : english;

  const navLinks = [
    { title: t("footer.home"), href: "/" },
    { title: t("footer.experience"), href: "/experience" },
    { title: t("footer.entrance"), href: "/entrance" },
    { title: t("footer.discoverClub"), href: "/discover" },
    // { title: t("footer.gallery"), href: "/gallery" },
    { title: t("footer.events"), href: "/events" },
    { title: t("footer.girls"), href: "/girls" },
    { title: t("footer.rent"), href: "/rent " },
    { title: t("footer.menu"), href: "/drinks" },
    { title: t("footer.jobs"), href: "/jobs" },
    { title: t("footer.blogs"), href: "/blogs" },
    { title: t("footer.contactUs"), href: "/contactUs" },
    // { title: "Translate", href: "/" },
  ];

  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 0, 0.36, 1],
      },
    },
  };

  const containerVariant = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  const mobileLinkVars = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0, 0.55, 0.45, 1],
      },
    },
  };

  const MobileNavLink = ({ title, href }) => {
    return (
      <motion.div
        variants={mobileLinkVars}
        className="text-2xl uppercase text-white text-center pb-2"
      >
        <p onClick={() => handleNavigate(href)}>{title}</p>
      </motion.div>
    );
  };

  MobileNavLink.propTypes = {
    title: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHeaderBg("rgb(0 0 0 / 84%)");
      } else {
        setHeaderBg("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <header
        className=""
        style={{
          backgroundColor: headerBg,
          zIndex: "100",
          position: "fixed",
          width: "100%",
        }}
      >
        {loading && <Spinners />}

        <nav
          className="flex justify-around item-center py-4 lg:py-4 px-2"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "0px 10px",
          }}
        >
          <div className="flex items-center gap-[1ch]">
            <img src={logo} height={120} width={120} />
          </div>
          <div
            className="lg:flex hidden gap-4 text-md text-[#e3304e] cursor-pointer"
            style={{
              fontWeight: "bold",
              fontSize: "17px",
              textAlign: "center",
            }}
          >
            <p onClick={() => handleNavigate("/")}>{t("footer.home")}</p>
            <p onClick={() => handleNavigate("/experience")}>
              {t("footer.experience")}
            </p>
            <p onClick={() => handleNavigate("/entrance")}>
              {t("footer.entrance")}
            </p>
            <p onClick={() => handleNavigate("/discover")}>
              {t("footer.discoverClub")}
            </p>
            <p onClick={() => handleNavigate("/events")}>
              {t("footer.events")}
            </p>
            <p onClick={() => handleNavigate("/girls")}>{t("footer.girls")}</p>
            <p onClick={() => handleNavigate("/rent")}>{t("footer.rent")}</p>
            <p onClick={() => handleNavigate("/drinks")}>{t("footer.menu")}</p>
            <p onClick={() => handleNavigate("/jobs")}>{t("footer.jobs")}</p>
            <p onClick={() => handleNavigate("/blogs")}>{t("footer.blogs")}</p>
            <p onClick={() => handleNavigate("/contactUs")}>
              {t("footer.contactUs")}
            </p>
          </div>

          <div
            className="cursor-pointer pt-px lg:hidden text-md text-white"
            onClick={toggleMenu}
          >
            Menu
          </div>
          <p
            href="#translate"
            className="me-5"
            onClick={(e) => {
              e.preventDefault();
              const newLang = currentLang === "en" ? "de" : "en";
              handleChangeLang(newLang);
            }}
          >
            <img src={languageIcon} alt="translate" height={30} width={30} />
          </p>
        </nav>
        <AnimatePresence>
          {open && (
            <motion.div
              variants={menuVars}
              initial="initial"
              animate="animate"
              exit="exit"
              style={{ zIndex: "100" }}
              // style={{ backgroundColor: "#1E293B" }}
              className="fixed left-0 top-0 w-full h-screen origin-top text-black p-10 navbarBgImg"
            >
              <div className="flex h-full flex-col w-[100%]">
                <div className="flex justify-between">
                  <h1 className="text-lg text-white">Crystal Club Lounge</h1>
                  <p
                    className="cursor-pointer pt-px text-md text-white"
                    onClick={toggleMenu}
                  >
                    Close
                  </p>
                </div>
                <motion.div
                  variants={containerVariant}
                  initial="initial"
                  animate="open"
                  exit="initial"
                  className="flex flex-col h-full justify-center items-center gap-3"
                >
                  {navLinks.map((link, index) => {
                    return (
                      <div key={index} className="overflow-hidden">
                        <MobileNavLink title={link.title} href={link.href} />
                      </div>
                    );
                  })}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}
