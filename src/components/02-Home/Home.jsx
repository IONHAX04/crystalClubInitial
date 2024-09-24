import { useTranslation } from "react-i18next";
import "./Home.css";
import img1 from "../../assets/Images/img4.JPG";
import video from "../../assets/Video/introVide.mp4";

import { useNavigate } from "react-router-dom";

export default function Home() {
  const { t } = useTranslation("global");
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <div className="homeContainer">
      {/* Background video */}
      {/* <video autoPlay muted loop playsInline className="backgroundVideo">
        <source src={video} type="video/mp4" />
      </video> */}

      {/* Scrollable content */}
      <div className="contentContainer">
        <section className="contentSection welcomeContent">
          <h1 data-aos="fade-in" data-aos-delay="200">
            {t("home.welcome")}
          </h1>
          <h2 data-aos="fade-in" data-aos-delay="200">
            {t("home.homeTitle")}
          </h2>
        </section>

        <section className="contentSection welcomeIntro">
          <h2
            data-aos="fade-in"
            data-aos-delay="200"
            style={{ textTransform: "uppercase" }}
          >
            {t("home.aboutOurClub")}
          </h2>
          <p data-aos="fade-in" data-aos-delay="200">
            {t("home.homeIntroOne")}
          </p>
          <p data-aos="fade-in" data-aos-delay="200">
            {t("home.homeIntroTwo")}
          </p>
          <p data-aos="fade-in" data-aos-delay="200">
            {t("home.homeIntroThree")}
          </p>
          <p data-aos="fade-in" data-aos-delay="200">
            {t("home.homeIntroFour")}
          </p>
          <button
            className="contactButton"
            data-aos="fade-in"
            data-aos-delay="200"
            onClick={() => handleNavigate("/contactUs")}
          >
            {t("discoverClub.contactUs")}
          </button>
        </section>

        <section className="contentSection qualityContent">
          <h1 data-aos="fade-in" data-aos-delay="200">
            {t("home.quality")}
          </h1>
          <h2 data-aos="fade-in" data-aos-delay="200">
            {t("home.never")}
          </h2>
        </section>

        <section className="contentSection aboutUsContent">
          <h3 data-aos="fade-in" data-aos-delay="200">
            {t("home.aboutUs")}
          </h3>
          <p className="col-lg-6" data-aos="fade-in" data-aos-delay="200">
            {t("home.aboutUsCont")}
          </p>
          <button
            data-aos="fade-in"
            data-aos-delay="200"
            className="discoverButton"
            onClick={() => handleNavigate("/discover")}
          >
            {t("home.discoverClub")}
          </button>
        </section>
      </div>
    </div>
  );
}
