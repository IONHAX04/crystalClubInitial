import { useState } from "react";
import "./Gallery.css";

import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import img1 from "../../assets/Discover/clubOne.JPG";
import img2 from "../../assets/Discover/clubTwo.JPG";
import img3 from "../../assets/Discover/clubThree.JPG";
import img4 from "../../assets/Discover/clubEleven.JPG";
import img5 from "../../assets/Discover/clubFive.JPG";
import img6 from "../../assets/Discover/clubSix.JPG";
import img7 from "../../assets/Discover/clubSeven.JPG";
import img8 from "../../assets/Discover/clubEight.JPG";
import img9 from "../../assets/Discover/clubNine.JPG";
import img10 from "../../assets/Discover/clubTen.JPG";

import { IoCloseSharp } from "react-icons/io5";

export default function Gallery() {
  const { t } = useTranslation("global");
  const navigate = useNavigate();

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
    {
      id: 7,
      imgSrc: img7,
    },
    {
      id: 8,
      imgSrc: img8,
    },
    {
      id: 9,
      imgSrc: img9,
    },
    {
      id: 10,
      imgSrc: img10,
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
      <div className="gallery">
        <h3>{t("gallery.gallery")}</h3>

        <div className="divider"></div>
        <div className="galleryContainer">
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
