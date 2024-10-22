import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { Col, Form, Row, Button } from "react-bootstrap";

import Header from "../01-Header/Header";

import { Helmet } from "react-helmet";

import "./Jobs.css";
import { useState } from "react";

export default function Jobs() {
  const { t } = useTranslation("global");
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    instagram: "",
    twitter: "",
    tiktok: "",
    onlyFans: "",
    // aboutYou: "",
    // doneYes: "",
    // guest: "",
    // superPower: "",
    // funnyStory: "",
    expectSalary: "",
    heardAboutThis: "",
  });

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    const mailtoLink = `mailto:info@crystalclub.ch?subject=Job Application from ${data.firstName} ${data.lastName}&body=
      Dear Crystal Club Team,%0D%0A%0D%0A
      I am interested in joining your club for the job, and I would like to submit my details for consideration.%0D%0A%0D%0A
      **Personal Details:**%0D%0A
      - Name: ${data.firstName} ${data.lastName}%0D%0A
      - Email: ${data.email}%0D%0A
      - Phone: ${data.phone}%0D%0A%0D%0A
  
      **Social Media:**%0D%0A
      - Instagram: ${data.instagram}%0D%0A
      - Twitter: ${data.twitter}%0D%0A
      - Tiktok: ${data.tiktok}%0D%0A
      - OnlyFans: ${data.onlyFans}%0D%0A%0D%0A
  
      **Additional Details:**%0D%0A
      - Expected Salary: ${data.expectSalary}%0D%0A
      - How did you hear about us?: ${data.heardAboutThis}%0D%0A%0D%0A
  
      Please consider my request for joining Crystal Club. I look forward to your response.%0D%0A%0D%0A
      Best regards,%0D%0A
      ${data.firstName} ${data.lastName}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="joinUs">
      <Helmet>
        <title>
          Jobs - Crystal Club Zurich: Premier Nightlife & Exclusive Events
        </title>
        <meta name="description" content="Crystal Club & Lounge." />
        <link rel="canonical" href="https://crystalclub.ch/" />

        <meta
          name="keywords"
          content="club, crystal club, crystal, home, about, girls, gallery, club, events, drinks, blogs, jobs, crystal club home, crystal club and lounge, crystal club and lounge home,, europe, girls, german, girls club, private party, bachelors party, birthday party, private dance, crystal club, private dance, birthday, bac party, party bachelor, party bachelor party"
        />
        <meta name="robots" content="index, follow" />

        <meta
          name="description"
          content="Experience Zurich's elite nightlife at Crystal Club. Enjoy exclusive events, VIP service, and private dance performances in a luxurious, vibrant atmosphere."
        />
      </Helmet>
      <section className="joinUsContents">
        {/* <Header /> */}
        <div className="container sectionTitle">
          <Col lg={7}>
            <h2>{t("join.joinUs")}</h2>
            <p className="mt-4" data-aos="fade-up" data-aos-delay="200">
              {t("join.contOne")}
            </p>
            <p data-aos="fade-up" data-aos-delay="350">
              {t("join.contTwo")}
            </p>
            <p data-aos="fade-up" data-aos-delay="200">
              {t("join.contThree")}
            </p>
            <p data-aos="fade-up" data-aos-delay="200">
              {t("join.contFour")}
            </p>
            <p data-aos="fade-up" data-aos-delay="200">
              {t("join.contFive")}
            </p>
            <p data-aos="fade-up" data-aos-delay="200">
              {t("join.contSix")}
            </p>
            <p data-aos="fade-up" data-aos-delay="200">
              {t("join.contSeven")}
            </p>
            <p data-aos="fade-up" data-aos-delay="200">
              {t("join.contEight")}
            </p>
            <p data-aos="fade-up" data-aos-delay="200">
              {t("join.contNine")}
            </p>
          </Col>
        </div>
      </section>
      <div className="joinUsContent">
        <div className="container sectionTitle">
          <Col lg={7}>
            <Form className="emailForm" onSubmit={handleSubmit}>
              <h3>{t("join.fillForm")}</h3>

              <Row className="gy-4">
                {/* PERSONAL DETAILS */}
                <Col lg={12}>
                  <h4>{t("join.personal")}</h4>
                </Col>
                <Col md={6}>
                  <Form.Control
                    type="text"
                    name="firstName"
                    placeholder={t("join.firstName")}
                    required
                    onChange={handleChange}
                  />
                </Col>

                <Col md={6}>
                  <Form.Control
                    type="text"
                    name="lastName"
                    placeholder={t("join.lastName")}
                    required
                    onChange={handleChange}
                  />
                </Col>

                <Col md={6}>
                  <Form.Control
                    type="text"
                    name="phone"
                    placeholder={t("join.phoneNumber")}
                    required
                    onChange={handleChange}
                  />
                </Col>

                <Col md={6}>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder={t("join.email")}
                    required
                    onChange={handleChange}
                  />
                </Col>

                {/* SOCIAL MEDIA */}
                <Col lg={12}>
                  <h4>{t("join.socialMedia")}</h4>
                </Col>
                <Col md={6}>
                  <Form.Control
                    type="text"
                    name="instagram"
                    placeholder="Instagram"
                    required
                    onChange={handleChange}
                  />
                </Col>

                <Col md={6}>
                  <Form.Control
                    type="text"
                    name="twitter"
                    placeholder="Twitter"
                    required
                    onChange={handleChange}
                  />
                </Col>

                <Col md={6}>
                  <Form.Control
                    type="text"
                    name="tiktok"
                    placeholder="Tiktok"
                    required
                    onChange={handleChange}
                  />
                </Col>

                <Col md={6}>
                  <Form.Control
                    type="text"
                    name="onlyFans"
                    placeholder="Only Fans (Optional)"
                    onChange={handleChange}
                  />
                </Col>

                {/* ADDITIONAL DETAILS */}
                {/* <Col lg={12}>
                  <h4>{t("join.additionalDetails")}</h4>
                </Col>

                <Col lg={12}>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="aboutYou"
                    placeholder={t("join.aboutYou")}
                    onChange={handleChange}
                  />
                </Col>

                <Col lg={12}>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="doneYes"
                    placeholder={t("join.doneYes")}
                    onChange={handleChange}
                  />
                </Col>

                <Col lg={12}>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="guest"
                    placeholder={t("join.guest")}
                    onChange={handleChange}
                  />
                </Col>

                <Col lg={12}>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="superPower"
                    placeholder={t("join.superPower")}
                    onChange={handleChange}
                  />
                </Col>

                <Col lg={12}>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="funnyStory"
                    placeholder={t("join.funnyStory")}
                    onChange={handleChange}
                  />
                </Col> */}

                {/* <Col lg={12}>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    placeholder={t("join.fileUpload")}
                    onChange={handleChange}
                  />
                </Col> */}

                <Col md={6}>
                  <Form.Control
                    type="text"
                    name="expectSalary"
                    placeholder={t("join.expectSalary")}
                    required
                    onChange={handleChange}
                  />
                </Col>

                <Col md={6}>
                  <Form.Control
                    type="text"
                    name="heardAboutThis"
                    placeholder={t("join.heardAboutThis")}
                    required
                    onChange={handleChange}
                  />
                </Col>

                <Col lg={12} className="text-center submitBtn">
                  <Button
                    className="getStartedBtn"
                    type="submit"
                    style={{
                      background: "#ff1a1a",
                      borderColor: "#ff1a1a",
                      color: "white",
                      width: "270px",
                    }}
                  >
                    {t("join.submit")}
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </div>
      </div>
    </div>
  );
}
