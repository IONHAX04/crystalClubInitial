import { useTranslation } from "react-i18next";
import { useNavigate } from "react";
import pdf from "../../assets/PDF/menu.pdf";
import "./Drinks.css";
import Header from "../01-Header/Header";

import { Helmet } from "react-helmet";

export default function Drinks() {
  const { t } = useTranslation("global");

  const handleViewPDF = () => {
    window.open(pdf, "_blank");
  };

  return (
    <div>
      <div className="drinksMenuContents">
        <Helmet>
          <title>Menu - Crystal Club & Lounge</title>
          <meta name="description" content="Crystal Club & Lounge." />
          <link rel="canonical" href="https://crystalclub.ch/" />

          <meta
            name="keywords"
            content="club, crystal club, crystal, home, about, girls, gallery, club, events, drinks, blogs, jobs, crystal club home, crystal club and lounge, crystal club and lounge home,, europe, girls, german, girls club, private party, bachelors party, birthday party, private dance"
          />
          <meta name="robots" content="index, follow" />

          <meta
            name="description"
            content="Experience unforgettable evenings full of elegance, sensuality and first-class entertainment."
          />
        </Helmet>
        {/* <Header /> */}
        <div className="drinkMenuItems">
          <h3>{t("menu.menu")}</h3>
          <div className="divider"></div>
          <button onClick={handleViewPDF}>Menu Items</button>{" "}
        </div>
      </div>
    </div>
  );
}
