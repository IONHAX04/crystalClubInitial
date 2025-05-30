import { useTranslation } from "react-i18next";

import { Card, Modal, Row, Col } from "react-bootstrap";

import { useState } from "react";
import "./Girls.css";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

import freya from "../../assets/GirlsImg/Freya/img1.JPG";
import maroona from "../../assets/GirlsImg/Maroona/img1.JPG";
import angelique from "../../assets/GirlsImg/Angelique/img1.JPG";
import noemi from "../../assets/GirlsImg/Noemi/img1.JPG";
import mylla from "../../assets/GirlsImg/Mylla/img1.jpg";
import amber from "../../assets/GirlsImg/Amber/img1.JPG";
import linda from "../../assets/GirlsImg/Linda/img2.JPG";
import chanel from "../../assets/GirlsImg/chanel/chanel.png";

import freya1 from "../../assets/GirlsImg/Freya/img1.png";
import freya2 from "../../assets/GirlsImg/Freya/img2.png";
import freya3 from "../../assets/GirlsImg/Freya/img3.png";

import maroona1 from "../../assets/GirlsImg/Maroona/img1.png";
import maroona2 from "../../assets/GirlsImg/Maroona/img2.png";
import maroona3 from "../../assets/GirlsImg/Maroona/img3.png";

import angelique1 from "../../assets/GirlsImg/Angelique/img1.JPG";
import angelique2 from "../../assets/GirlsImg/Angelique/img2.JPG";
import angelique3 from "../../assets/GirlsImg/Angelique/img3.jpg";

import noemi1 from "../../assets/GirlsImg/Noemi/img1.png";
import noemi2 from "../../assets/GirlsImg/Noemi/img2.png";
import noemi3 from "../../assets/GirlsImg/Noemi/img3.png";

import mylla1 from "../../assets/GirlsImg/Mylla/img1.png";
import mylla2 from "../../assets/GirlsImg/Mylla/img2.png";
import mylla3 from "../../assets/GirlsImg/Mylla/img1.jpg";

import amber1 from "../../assets/GirlsImg/Amber/img1.png";
import amber2 from "../../assets/GirlsImg/Amber/img2.png";

import linda1 from "../../assets/GirlsImg/Linda/img1.png";
import linda2 from "../../assets/GirlsImg/Linda/img2.png";
import linda3 from "../../assets/GirlsImg/Linda/img3.png";

import chanel1 from "../../assets/GirlsImg/chanel/chanel1.png";
import chanel2 from "../../assets/GirlsImg/chanel/chanel2.png";
import chanel3 from "../../assets/GirlsImg/chanel/chanel3.png";

import ashley1 from "../../assets/GirlsImg/Ashley/ashley1.png";
import ashley2 from "../../assets/GirlsImg/Ashley/ashley2.png";
import ashley3 from "../../assets/GirlsImg/Ashley/ashley3.png";
import ashley4 from "../../assets/GirlsImg/Ashley/ashley4.png";

const blogData = [
  {
    id: 1,
    title: "Freya",
    img: freya,
    galleryImages: [freya1, freya2, freya3],
  },
  {
    id: 2,
    title: "Maroona ",
    img: maroona,
    galleryImages: [maroona1, maroona2, maroona3],
  },
  {
    id: 3,
    title: "Angelique",
    img: angelique,
    galleryImages: [angelique1, angelique2, angelique3],
  },
  {
    id: 4,
    title: "Noemi",
    img: noemi,
    galleryImages: [noemi1, noemi2, noemi3],
  },
  {
    id: 5,
    title: "Mylla",
    img: mylla,
    galleryImages: [mylla1, mylla2, mylla3],
  },
  {
    id: 6,
    title: "Amber",
    img: amber,
    galleryImages: [amber1, amber2],
  },
  {
    id: 7,
    title: "Linda",
    img: linda,
    galleryImages: [linda1, linda2, linda3],
  },
  {
    id: 8,
    title: "Chanel",
    img: chanel,
    galleryImages: [chanel1, chanel2, chanel3],
  },
  {
    id: 9,
    title: "Ashley",
    img: ashley1,
    galleryImages: [ashley1, ashley2, ashley3, ashley4],
  },
];

export default function Girls() {
  const { t } = useTranslation("global");

  const navigate = useNavigate();

  const handleShow = (blog) => {
    const images = {
      1: [freya1, freya2, freya3],
      2: [maroona1, maroona2, maroona3],
      3: [angelique1, angelique2, angelique3],
      4: [noemi1, noemi2, noemi3],
      5: [mylla1, mylla2, mylla3],
      6: [amber1, amber2],
      7: [linda1, linda2, linda3],
      8: [chanel1, chanel2, chanel3],
      9: [ashley1, ashley2, ashley3, ashley4],
    };

    navigate("/girlsGallery", {
      state: { name: blog.title, images: images[blog.id] },
    });
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <Helmet>
        <title>
          Crystal Club Zurich: Stripclub | Tabledance | Live Shows | Nightclub
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

      <div className="girls">
        {/* <Header /> */}
        <h3>{t("footer.girls")}</h3>
        <div className="divider"></div>
        <Row className="col-lg-10 mt-4" style={{ justifyContent: "center" }}>
          {blogData.map((blog) => (
            <Col key={blog.id} lg={3} md={4} sm={6} className="mb-4">
              <Card className="h-100" onClick={() => handleShow(blog)}>
                <Card.Img variant="top" src={blog.img} />
                <Card.Body className="d-flex flex-column">
                  <div className="flex-grow-1">
                    <Card.Title className="">{blog.title}</Card.Title>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
