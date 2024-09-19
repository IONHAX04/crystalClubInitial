import { useTranslation } from "react-i18next";

import { useState } from "react";
import "./Girls.css";

import img1 from "../../assets/Images/img2.JPG";
import img2 from "../../assets/Images/img7.JPG";
import img3 from "../../assets/Images/img4.JPG";
import img4 from "../../assets/Images/img5.JPG";
import img5 from "../../assets/Images/img6.JPG";
import img6 from "../../assets/Images/img3.JPG";

import { IoCloseSharp } from "react-icons/io5";

export default function Girls() {
  const { t } = useTranslation("global");
  const [model, setModal] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");
  const images = [
    {
      id: 1,
      imgSrc: img1,
    },
    {
      id: 2,
      imgSrc: img2,
    },
    {
      id: 3,
      imgSrc: img3,
    },
    {
      id: 4,
      imgSrc: img4,
    },
    {
      id: 5,
      imgSrc: img5,
    },
    {
      id: 6,
      imgSrc: img6,
    },
  ];

  const getItem = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModal(true);
  };

  return (
    <div>
      <div className={model ? "model open" : "model"}>
        <img src={tempImgSrc} />
        <IoCloseSharp onClick={() => setModal(false)} />
      </div>
      <div className="girls">
        <h3>{t("footer.girls")}</h3>

        <div className="divider"></div>
        <div className="girlsContainer">
          {images.map((item, index) => {
            return (
              <div
                className="pics"
                key={index}
                data-aos="fade-in"
                data-aos-delay="200"
                onClick={() => getItem(item.imgSrc)}
              >
                <img
                  src={item.imgSrc}
                  style={{ width: "95%", margin: "5px" }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
