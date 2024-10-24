import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

import "./Entrance.css";
import Header from "../01-Header/Header";

export default function Entrance() {
  const { t } = useTranslation("global");
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <div className="entranceClubContent">
        <Helmet>
          <title>
            Crystal Club Zurich: Stripclub|Tabledance|Live Shows |Nightclub 
          </title>
          <meta name="description" content="Crystal Club & Lounge." />
          <link rel="canonical" href="https://www.crystalclub.ch/" />

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
        <div className="entranceClub">
          {/* <Header /> */}
          <h3>{t("entrance.entranceTitle")}</h3>
          <div className="divider"></div>
          <h4>{t("entrance.crystalDollar")}</h4>
          <p>{t("entrance.entranceRuleOne")}</p>
          {/* <p>{t("entrance.entranceRuleTwo")}</p> */}
          <p>{t("entrance.entranceRuleThree")}</p>
          <p>Zahlungsmittel</p>
          <p>Twint</p>
          <p>Debit/Kreditkarte</p>
          <p>*Keine American Express</p>
          <p>Bargeld/Cash</p>
          <p>*Wir akzeptieren nur Bargeld für Separee & Tabledances</p>
        </div>
      </div>
    </div>
  );
}
