import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Gallery from "../04-Gallery/Gallery";
import "./Discover.css";
import { Helmet } from "react-helmet";

export default function Discover() {
  const { t } = useTranslation("global");
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <Helmet>
        <title>
          Crystal Club Zurich: Stripclub|Tabledance|Live Shows |Nightclub 
        </title>
        <meta name="description" content="Crystal Club & Lounge." />
        <link rel="canonical" href="https://crystalclub.ch/" />

        <meta
          name="keywords"
          content="club, crystal club, crystal, home, about, girls, gallery, club, events, drinks, blogs, jobs, crystal club home, crystal club and lounge, crystal club and lounge home,, europe, girls, german, girls club, private party, bachelors party, birthday party, private dance, crystal club, private dance, birthday, bac party, party bachelor, party bachelor party, crystal club , private dance, live shows, dancers, party , bachelors party, birthday party, nightclub , volketswil, nightclub in zurich"
        />
        <meta name="robots" content="index, follow" />

        <meta
          name="description"
          content="Top-Nachtclub in Volketswil mit Live-Shows und toller Atmosphäre! Geräumiger Club mit rauchiger Atmosphäre für unvergessliche Nächte. Jetzt mehr entdecken!"
        />
      </Helmet>
      <div className="discoverClub">
        <div className="discoverClubIntro">
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
