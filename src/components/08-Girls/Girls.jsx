import { useTranslation } from "react-i18next";

import { useState } from "react";
import "./Girls.css";

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
      imgSrc: image12,
    },
    {
      id: 19,
      imgSrc: image13,
    },
    {
      id: 20,
      imgSrc: image14,
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
