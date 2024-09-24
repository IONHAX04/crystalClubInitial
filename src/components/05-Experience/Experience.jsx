import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import Header from "../01-Header/Header";

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
