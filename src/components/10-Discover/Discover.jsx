import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Gallery from "../04-Gallery/Gallery";
import "./Discover.css";
import Header from "../01-Header/Header";

export default function Discover() {
  const { t } = useTranslation("global");
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <div className="discoverClub">
        <div className="discoverClubIntro">
          {/* <Header /> */}
          <div className="discoverClubIntroContents col-lg-7">
            <h3 data-aos="fade-up" data-aos-delay="200">
              {t("discoverClub.clubTitle")}
            </h3>
            <div
              className="divider"
              data-aos="fade-up"
              data-aos-delay="200"
            ></div>
            <h5 data-aos="fade-up" data-aos-delay="200">
              {t("discoverClub.clubQuote")}
            </h5>
            <p data-aos="fade-up" data-aos-delay="200">
              {t("discoverClub.clubIntroOne")}
            </p>
            <p data-aos="fade-up" data-aos-delay="200">
              {t("discoverClub.clubIntroTwo")}
            </p>
            <p data-aos="fade-up" data-aos-delay="200">
              {t("discoverClub.clubIntroThree")}
            </p>
            <p data-aos="fade-up" data-aos-delay="200">
              {t("discoverClub.clubIntroFour")}
            </p>
          </div>
        </div>
        <div className="tableExperience">
          <div className="tableExperienceContents col-lg-7">
            <h3 data-aos="fade-up" data-aos-delay="200">
              {t("discoverClub.tableDanceTitle")}
            </h3>
            <div
              className="divider"
              data-aos="fade-up"
              data-aos-delay="200"
            ></div>
            <p data-aos="fade-up" data-aos-delay="200">
              {t("discoverClub.tableDanceCont")}
            </p>
          </div>
        </div>
        <div className="stripShow">
          <div className="stripShowContents col-lg-7">
            <h3 data-aos="fade-up" data-aos-delay="200">
              {t("discoverClub.stripteaseShowTitle")}
            </h3>
            <div
              className="divider"
              data-aos="fade-up"
              data-aos-delay="200"
            ></div>
            <p data-aos="fade-up" data-aos-delay="200">
              {t("discoverClub.stripteaseShowCont")}
            </p>
          </div>
        </div>
        <div className="privateDance">
          <div className="privateDanceContents col-lg-7">
            <h3 data-aos="fade-up" data-aos-delay="200">
              {t("discoverClub.privateDanceTitle")}
            </h3>
            <div
              className="divider"
              data-aos="fade-up"
              data-aos-delay="200"
            ></div>
            <p data-aos="fade-up" data-aos-delay="200">
              {t("discoverClub.privateDanceCont")}
            </p>
          </div>
        </div>
        <div className="partyGroup">
          <div className="partyGroupContents col-lg-7">
            <h3 data-aos="fade-up" data-aos-delay="200">
              {t("discoverClub.partyGroupTitle")}
            </h3>
            <div
              className="divider"
              data-aos="fade-up"
              data-aos-delay="200"
            ></div>
            <p data-aos="fade-up" data-aos-delay="200">
              {t("discoverClub.partyGroupCont")}
            </p>
          </div>
        </div>
        <div className="requestParty">
          <div className="requestPartyContents col-lg-7">
            <h3 data-aos="fade-up" data-aos-delay="200">
              {t("discoverClub.planYourParty")}
            </h3>
            <div
              className="divider"
              data-aos="fade-up"
              data-aos-delay="200"
            ></div>
            <p data-aos="fade-up" data-aos-delay="200">
              {t("discoverClub.planPartyCont")}
            </p>
            <p data-aos="fade-up" data-aos-delay="200">
              {t("discoverClub.request")}
            </p>
            <p data-aos="fade-up" data-aos-delay="200">
              {t("discoverClub.requestDesc")}
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="200"
              onClick={() => handleNavigate("/contactUs")}
            >
              {t("discoverClub.contactUs")}
            </button>
          </div>
        </div>
      </div>
      <Gallery />
    </div>
  );
}
