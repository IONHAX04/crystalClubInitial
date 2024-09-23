import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

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
        <div className="entranceClub">
          {/* <Header /> */}
          <h3>{t("entrance.entranceTitle")}</h3>
          <div className="divider"></div>
          <h4>{t("entrance.crystalDollar")}</h4>
          <p>{t("entrance.entranceRuleOne")}</p>
          <p>{t("entrance.entranceRuleTwo")}</p>
          <p>{t("entrance.entranceRuleThree")}</p>
        </div>
      </div>
    </div>
  );
}
