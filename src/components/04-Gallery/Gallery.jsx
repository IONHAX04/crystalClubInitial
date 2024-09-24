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
import img11 from "../../assets/Discover/clubEleven.JPG";
import img12 from "../../assets/Discover/clubTwelve.JPG";
import img13 from "../../assets/Discover/clubThirteen.JPG";
import img14 from "../../assets/Discover/clubFourteen.JPG";
import img15 from "../../assets/Discover/clubFifteen.JPG";
import img16 from "../../assets/Discover/clubSixteen.JPG";
import img17 from "../../assets/Discover/clubSeventeen.JPG";
import img18 from "../../assets/Discover/clubEighteen.JPG";
import img19 from "../../assets/Discover/clubNineteen.JPG";
import img20 from "../../assets/Discover/discover.JPG";
import img21 from "../../assets/Discover/heartOne.JPG";
import img22 from "../../assets/Discover/lamp.JPG";
import img23 from "../../assets/Discover/lampOne.JPG";
import img24 from "../../assets/Discover/lampTwo.JPG";
import img25 from "../../assets/Discover/lightOne.JPG";
import img26 from "../../assets/Discover/lightTwo.JPG";
import img27 from "../../assets/Discover/mirror.JPG";
import img28 from "../../assets/Discover/privateDance.JPG";
import img29 from "../../assets/Discover/room.JPG";
import img30 from "../../assets/Discover/strip.JPG";
import img31 from "../../assets/Discover/table.JPG";

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
    {
      id: 11,
      imgSrc: img11,
    },
    {
      id: 12,
      imgSrc: img12,
    },
    {
      id: 13,
      imgSrc: img13,
    },
    // {
    //   id: 14,
    //   imgSrc: img14,
    // },
    // {
    //   id: 15,
    //   imgSrc: img15,
    // },
    // {
    //   id: 16,
    //   imgSrc: img16,
    // },
    // {
    //   id: 17,
    //   imgSrc: img17,
    // },
    // {
    //   id: 18,
    //   imgSrc: img18,
    // },
    // {
    //   id: 19,
    //   imgSrc: img19,
    // },
    // {
    //   id: 20,
    //   imgSrc: img20,
    // },
    // {
    //   id: 21,
    //   imgSrc: img21,
    // },
    // {
    //   id: 22,
    //   imgSrc: img22,
    // },
    // {
    //   id: 23,
    //   imgSrc: img23,
    // },
    // {
    //   id: 24,
    //   imgSrc: img24,
    // },
    // {
    //   id: 25,
    //   imgSrc: img25,
    // },
    // {
    //   id: 26,
    //   imgSrc: img26,
    // },
    // {
    //   id: 27,
    //   imgSrc: img27,
    // },
    // {
    //   id: 28,
    //   imgSrc: img28,
    // },
    // {
    //   id: 29,
    //   imgSrc: img29,
    // },
    // {
    //   id: 30,
    //   imgSrc: img30,
    // },
    // {
    //   id: 31,
    //   imgSrc: img31,
    // },
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
