import { useTranslation } from "react-i18next";
import { useNavigate } from "react";
import pdf from "../../assets/PDF/menu.pdf";
import "./Drinks.css";
import Header from "../01-Header/Header";

export default function Drinks() {
  const { t } = useTranslation("global");

  const handleViewPDF = () => {
    window.open(pdf, "_blank");
  };

  return (
    <div>
      <div className="drinksMenuContents">
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
