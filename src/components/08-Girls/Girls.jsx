import { useTranslation } from "react-i18next";

import { useState } from "react";
import "./Girls.css";
import { Helmet } from "react-helmet";

import Header from "../01-Header/Header";

import img1 from "../../assets/Images/img2.JPG";
import img2 from "../../assets/Images/img7.JPG";
import img3 from "../../assets/Images/img4.JPG";
import img4 from "../../assets/Images/img5.JPG";
import img5 from "../../assets/Images/img6.JPG";
import img6 from "../../assets/Images/img3.JPG";

import image1 from "../../assets/Girls/image1.jpeg";
import image2 from "../../assets/Girls/image2.jpeg";
import image3 from "../../assets/Girls/image3.jpeg";
import image4 from "../../assets/Girls/image4.jpeg";
import image5 from "../../assets/Girls/image5.jpeg";
import image6 from "../../assets/Girls/image6.jpeg";
import image7 from "../../assets/Girls/image7.jpeg";
import image8 from "../../assets/Girls/image8.jpeg";
import image9 from "../../assets/Girls/image9.jpeg";
import image10 from "../../assets/Girls/image10.jpeg";
import image11 from "../../assets/Girls/image11.jpeg";
import image12 from "../../assets/Girls/image12.jpeg";
import image13 from "../../assets/Girls/image13.jpeg";
import image14 from "../../assets/Girls/image14.jpeg";
import image15 from "../../assets/Girls/image15.jpeg";
import image16 from "../../assets/Girls/image16.jpeg";
import image17 from "../../assets/Girls/image17.jpeg";
import image18 from "../../assets/Girls/image18.jpeg";
import image19 from "../../assets/Girls/image19.jpeg";
import image20 from "../../assets/Girls/image20.jpeg";
import image21 from "../../assets/Girls/image21.jpeg";
import image22 from "../../assets/Girls/image22.jpeg";
import image23 from "../../assets/Girls/image23.jpeg";
import image24 from "../../assets/Girls/image24.jpeg";
import image25 from "../../assets/Girls/image25.jpeg";
import image26 from "../../assets/Girls/image26.jpeg";
import image27 from "../../assets/Girls/image27.jpeg";
import image28 from "../../assets/Girls/image28.jpeg";
import image29 from "../../assets/Girls/image28.jpeg";
import image30 from "../../assets/Girls/image30.jpeg";
import image31 from "../../assets/Girls/image31.jpeg";
import image32 from "../../assets/Girls/image32.jpeg";
import image33 from "../../assets/Girls/image33.jpeg";
import image34 from "../../assets/Girls/image34.jpeg";
import image35 from "../../assets/Girls/image35.jpeg";
import image36 from "../../assets/Girls/image36.jpeg";
import image37 from "../../assets/Girls/image37.jpeg";
import image38 from "../../assets/Girls/image38.jpeg";
import image39 from "../../assets/Girls/image39.jpeg";
import image40 from "../../assets/Girls/image40.jpeg";
import image41 from "../../assets/Girls/image41.jpeg";
import image42 from "../../assets/Girls/image42.jpeg";
import image43 from "../../assets/Girls/image43.jpeg";
import image44 from "../../assets/Girls/image44.jpeg";
import image45 from "../../assets/Girls/image45.jpeg";
import image46 from "../../assets/Girls/image46.jpeg";
import image47 from "../../assets/Girls/image47.jpeg";
import image48 from "../../assets/Girls/image48.jpeg";
import image49 from "../../assets/Girls/image49.jpeg";
import image50 from "../../assets/Girls/image50.jpeg";
import image51 from "../../assets/Girls/image51.jpeg";
import image52 from "../../assets/Girls/image52.jpeg";
import image53 from "../../assets/Girls/image53.jpeg";
import image54 from "../../assets/Girls/image54.jpeg";
import image55 from "../../assets/Girls/image55.jpeg";
import image56 from "../../assets/Girls/image56.jpeg";
import image57 from "../../assets/Girls/image57.jpeg";
import image58 from "../../assets/Girls/image58.jpeg";
import image59 from "../../assets/Girls/image59.jpeg";
import image60 from "../../assets/Girls/image60.jpeg";
import image61 from "../../assets/Girls/image61.jpeg";
import image62 from "../../assets/Girls/image62.jpeg";
import image63 from "../../assets/Girls/image63.jpeg";
import image64 from "../../assets/Girls/image64.jpeg";
import image65 from "../../assets/Girls/image65.jpeg";
import image66 from "../../assets/Girls/image66.jpeg";

import { IoCloseSharp } from "react-icons/io5";

export default function Girls() {
  const { t } = useTranslation("global");
  const [model, setModal] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");
  const [visibleCount, setVisibleCount] = useState(20);
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
      imgSrc: image1,
    },
    {
      id: 8,
      imgSrc: image2,
    },
    {
      id: 9,
      imgSrc: image3,
    },
    {
      id: 10,
      imgSrc: image4,
    },
    {
      id: 11,
      imgSrc: image5,
    },
    {
      id: 12,
      imgSrc: image6,
    },
    {
      id: 13,
      imgSrc: image7,
    },
    {
      id: 14,
      imgSrc: image8,
    },
    {
      id: 15,
      imgSrc: image9,
    },
    {
      id: 16,
      imgSrc: image10,
    },
    {
      id: 17,
      imgSrc: image11,
    },
    {
      id: 18,
      imgSrc: image19,
    },
    {
      id: 19,
      imgSrc: image13,
    },
    {
      id: 20,
      imgSrc: image14,
    },
    {
      id: 21,
      imgSrc: image15,
    },
    {
      id: 22,
      imgSrc: image16,
    },
    {
      id: 23,
      imgSrc: image17,
    },
    {
      id: 24,
      imgSrc: image18,
    },
    {
      id: 25,
      imgSrc: image12,
    },
    {
      id: 26,
      imgSrc: image20,
    },
    {
      id: 27,
      imgSrc: image21,
    },
    {
      id: 28,
      imgSrc: image22,
    },
    {
      id: 29,
      imgSrc: image23,
    },
    {
      id: 30,
      imgSrc: image24,
    },
    {
      id: 31,
      imgSrc: image25,
    },
    {
      id: 32,
      imgSrc: image26,
    },
    {
      id: 33,
      imgSrc: image27,
    },
    {
      id: 34,
      imgSrc: image28,
    },
    {
      id: 35,
      imgSrc: image29,
    },
    {
      id: 36,
      imgSrc: image30,
    },
    {
      id: 37,
      imgSrc: image34,
    },
    {
      id: 38,
      imgSrc: image32,
    },
    {
      id: 39,
      imgSrc: image33,
    },
    {
      id: 40,
      imgSrc: image31,
    },
    {
      id: 41,
      imgSrc: image35,
    },
    {
      id: 42,
      imgSrc: image36,
    },
    {
      id: 43,
      imgSrc: image37,
    },
    {
      id: 44,
      imgSrc: image38,
    },
    {
      id: 45,
      imgSrc: image39,
    },
    {
      id: 46,
      imgSrc: image40,
    },
    {
      id: 47,
      imgSrc: image41,
    },
    {
      id: 48,
      imgSrc: image42,
    },
    {
      id: 49,
      imgSrc: image43,
    },
    {
      id: 50,
      imgSrc: image44,
    },
    {
      id: 51,
      imgSrc: image45,
    },
    {
      id: 52,
      imgSrc: image46,
    },
    {
      id: 53,
      imgSrc: image47,
    },
    {
      id: 54,
      imgSrc: image48,
    },
    {
      id: 55,
      imgSrc: image49,
    },
    {
      id: 56,
      imgSrc: image50,
    },
    {
      id: 57,
      imgSrc: image51,
    },
    {
      id: 58,
      imgSrc: image52,
    },
    {
      id: 59,
      imgSrc: image53,
    },
    {
      id: 60,
      imgSrc: image54,
    },
    {
      id: 61,
      imgSrc: image55,
    },
    {
      id: 62,
      imgSrc: image56,
    },
    {
      id: 63,
      imgSrc: image57,
    },
    {
      id: 64,
      imgSrc: image58,
    },
    {
      id: 65,
      imgSrc: image59,
    },
    {
      id: 66,
      imgSrc: image60,
    },
    {
      id: 67,
      imgSrc: image61,
    },
    {
      id: 68,
      imgSrc: image62,
    },
    {
      id: 69,
      imgSrc: image63,
    },
    {
      id: 70,
      imgSrc: image64,
    },
    {
      id: 71,
      imgSrc: image65,
    },
    {
      id: 72,
      imgSrc: image66,
    },
  ];

  const getItem = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModal(true);
  };

  const showMoreImages = () => {
    setVisibleCount((prevCount) => prevCount + 20);
  };

  return (
    <div>
      <Helmet>
        <title>Girls - Crystal Club & Lounge</title>
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
      <div className={model ? "model open" : "model"}>
        <img src={tempImgSrc} />
        <IoCloseSharp onClick={() => setModal(false)} />
      </div>
      <div className="girls">
        {/* <Header /> */}
        <h3>{t("footer.girls")}</h3>
        <div className="divider"></div>
        {/* <div className="girlsContainer">
          {images.slice(0, visibleCount).map((item, index) => (
            <div
              className="pics"
              key={index}
              data-aos="fade-in"
              data-aos-delay="200"
              onClick={() => getItem(item.imgSrc)}
            >
              <img src={item.imgSrc} style={{ width: "95%", margin: "5px" }} />
            </div>
          ))}
        </div>

        {visibleCount < images.length && (
          <div className="showMoreContainer">
            <button
              className="showMoreBtn"
              onClick={showMoreImages}
              data-aos="fade-in"
            >
              Show More
            </button>
          </div>
        )} */}
      </div>
    </div>
  );
}
