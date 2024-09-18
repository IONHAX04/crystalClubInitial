import "./Header.css";
import { useState } from "react";
import PropTypes from "prop-types";
import { AnimatePresence, motion } from "framer-motion";

import logo from "../../assets/Logo/logo-black.png";

export default function Header() {
  const navLinks = [
    { title: "Home", href: "/" },
    { title: "The Experience", href: "/experience" },
    { title: "Entrance", href: "/entrance" },
    { title: "Discover Club", href: "/discover" },
    { title: "Gallery", href: "/gallery" },
    { title: "Girls", href: "/girls" },
    { title: "Contact & Reservations", href: "/join" },
    { title: "Menu Card & Bar", href: "/drinks" },
    { title: "Jobs", href: "/jobs" },
    { title: "Translate", href: "/" },
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
        <p href={href}>{title}</p>
      </motion.div>
    );
  };

  MobileNavLink.propTypes = {
    title: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  };

  return (
    <div>
      <header>
        <nav
          className="flex justify-around item-center py-4 lg:py-4 px-2"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <div className="flex items-center gap-[1ch]">
            {/* <span className="text-lg font-semibold tracking-widest cursor-pointer">
              Crystal Club Lounge
            </span> */}
            <img src={logo} height={120} width={120} />
          </div>
          <div className="lg:flex hidden gap-12 text-md text- -400 cursor-pointer">
            <p>Home</p>
            <p>The Experience</p>
            <p>Entrance</p>
            <p>Discover Club</p>
            <p>Gallery</p>
            <p>Girls</p>
            <p>Contact & Reservations</p>
            <p>Menu Card & Bar</p>
            <p>Jobs</p>
          </div>
          <div
            className="cursor-pointer pt-px lg:hidden text-md text-black"
            onClick={toggleMenu}
          >
            Menu
          </div>
        </nav>
        <AnimatePresence>
          {open && (
            <motion.div
              variants={menuVars}
              initial="initial"
              animate="animate"
              exit="exit"
              style={{ zIndex: "99", background: "#1E293B" }}
              // style={{ backgroundColor: "#1E293B" }}
              className="fixed left-0 top-0 w-full h-screen origin-top text-black p-10"
            >
              <div className="flex h-full flex-col">
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
