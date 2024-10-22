import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import Header from "../01-Header/Header";
import { Helmet } from "react-helmet";

import "./Experience.css";

export default function Experience() {
  const { t } = useTranslation("global");
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <div className="experienceOfClub">
        <Helmet>
          <title>
            Experience - Crystal Club Zurich: Premier Nightlife & Exclusive
            Events
          </title>
          <meta name="description" content="Crystal Club & Lounge." />
          <link rel="canonical" href="https://crystalclub.ch/" />

          <meta
            name="keywords"
            content="club, crystal club, crystal, home, about, girls, gallery, club, events, drinks, blogs, jobs, crystal club home, crystal club and lounge, crystal club and lounge home,, europe, girls, german, girls club, private party, bachelors party, birthday party, private dance, crystal club, private dance, birthday, bac party, party bachelor, party bachelor party"
          />
          <meta name="robots" content="index, follow" />

          <meta
            name="description"
            content="Experience Zurich's elite nightlife at Crystal Club. Enjoy exclusive events, VIP service, and private dance performances in a luxurious, vibrant atmosphere."
          />
        </Helmet>
        {/* <Header /> */}
        <div className="clubExperience">
          <h3>{t("experience.crystalExperienceTitle")}</h3>

          <div className="divider"></div>

          <h4>{t("experience.peepShow")}</h4>
          <p>{t("experience.peepTime")}</p>

          <h4>{t("experience.briefEncounter")}</h4>
          {/* <p>{t("experience.briefTimeOne")}</p> */}
          <p>{t("experience.briefTimeTwo")}</p>

          <h4>{t("experience.partyRoom")}</h4>
          {/* <p>{t("experience.partyRoomOne")}</p>
          <p>{t("experience.partyRoomTwo")}</p>
          <p>{t("experience.partyRoomTime")}</p>

          <div className="dividerDash"></div> */}

          <p>{t("experience.privateFunRoom")}</p>
          <p>{t("experience.privateFunRoomTime")}</p>
        </div>

        <div className="bookClubCont">
          <h4>{t("experience.bookToday")}</h4>
          <div className="divider"></div>
          <p className="col-lg-6">{t("experience.bookTodayCont")}</p>
          <button onClick={() => handleNavigate("/contactUs")}>
            {t("experience.contactUsToday")}
          </button>
        </div>
      </div>
    </div>
  );
}
