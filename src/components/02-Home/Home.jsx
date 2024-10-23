import { useTranslation } from "react-i18next";
import "./Home.css";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <title>
          Crystal Club Zurich: Stripclub|Tabledance|Live Shows |Nightclub 
        </title>
        <meta name="description" content="Crystal Club & Lounge." />
        <link rel="canonical" href="https://crystalclub.ch/" />

        <link rel="canonical" href="https://crystalclub.ch/" />

        <meta
          name="keywords"
          content="club, crystal club, crystal, home, about, girls, gallery, club, events, drinks, blogs, jobs, crystal club home, crystal club and lounge, crystal club and lounge home,, europe, girls, german, girls club, private party, bachelors party, birthday party, private dance,  crystal club, private dance, birthday, bac party, party bachelor, party bachelor party, crystal club , private dance, live shows, dancers, party , bachelors party, birthday party, nightclub , volketswil, nightclub in zurich"
        />
        <meta name="robots" content="index, follow" />

        <meta
          name="description"
          content="Top-Nachtclub in Volketswil mit Live-Shows und toller Atmosphäre! Geräumiger Club mit rauchiger Atmosphäre für unvergessliche Nächte. Jetzt mehr entdecken!"
        />
      </Helmet>
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

        {/* <section className="contentSection qualityContent">
          <h1 data-aos="fade-in" data-aos-delay="200">
            {t("home.quality")}
          </h1>
          <h2 data-aos="fade-in" data-aos-delay="200">
            {t("home.never")}
          </h2>
        </section> */}
      </div>
    </div>
  );
}
