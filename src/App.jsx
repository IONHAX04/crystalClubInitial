import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/01-Header/Header";
import Home from "./components/02-Home/Home";
import Join from "./components/03-Join/Join";
import Gallery from "./components/04-Gallery/Gallery";
import Experience from "./components/05-Experience/Experience";
import Drinks from "./components/06-Drinks/Drinks";
import Entrance from "./components/07-Entrance/Entrance";
import Girls from "./components/08-Girls/Girls";
import Jobs from "./components/09-Jobs/Jobs";
import Footer from "./components/10-Footer/Footer";
import Discover from "./components/10-Discover/Discover";
import Contact from "./components/11-ContactUs/Contact";
import Rent from "./components/13-Rent/Rent";
import Events from "./components/14-Events/Events";

import { IoCloseSharp } from "react-icons/io5";

import bannerimage from "./assets/banners/banners.jpeg";

import TextParallaxContentExample from "./components/Example/Example";

import whatsApp from "./assets/Icons/whatsapp.png";
import "./App.css";

import AOS from "aos";
import "aos/dist/aos.css";
import Blogs from "./components/12-Blogs/Blogs";
import GirlsGallery from "./components/08-Girls/GirlsGallery";

export default function App() {
  const [model, setModal] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      mirror: true,
      anchorPlacement: "top-bottom",
    });
  }, []);
  // comments
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  return (
    <>
      <div className={model ? "model open opened" : "model"}>
        <img src={bannerimage} />
        <IoCloseSharp onClick={() => setModal(false)} />
      </div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/entrance" element={<Entrance />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/girls" element={<Girls />} />
          <Route path="/girlsGallery" element={<GirlsGallery />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/join" element={<Join />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/events" element={<Events />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/drinks" element={<Drinks />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contactUs" element={<Contact />} />
          <Route path="/example" element={<TextParallaxContentExample />} />
        </Routes>
        <Footer />
      </Router>
      <div className="chatBotButton">
        <div
          className="fixed-bottom chatBot right-100"
          style={{
            zIndex: "10",
            left: "initial",
            margin: "5px",
            background: "transparent",
          }}
        >
          <a
            href="https://wa.me/41767490039"
            target="_blank"
            style={{ background: "transparent", backdropFilter: "blur 2rem" }}
          >
            <img src={whatsApp} className="whatsAppImage" alt="WhatsApp" />
          </a>
        </div>
      </div>
    </>
  );
}
