import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { Col, Form, Row, Button } from "react-bootstrap";

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
    streetFrom: "",
    cityFrom: "",
    roomsFrom: "",
    floorFrom: "",
    streetTo: "",
    cityTo: "",
    roomsTo: "",
    floorTo: "",
    driver: "",
    additional: "",
    materials: "",
    fromDate: "",
    toDate: "",
    message: "",
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

    console.log(data);

    const mailtoLink = `mailto:info@crystalclub.ch?subject=Contact Request from ${data.name}&body=
    Dear Movenpack Team,%0D%0A%0D%0A
    I would like to get in touch with you regarding the following:%0D%0A%0D%0A
    Name: ${data.name}%0D%0A
    Email: ${data.email}%0D%0A%0D%0A
    Message:%0D%0A
    ${data.message}%0D%0A%0D%0A
    Please feel free to reach out to me at your earliest convenience.%0D%0A%0D%0A
    Best regards,%0D%0A
    ${data.name}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="joinUs">
      <section className="joinUsContents">
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
                    name="firstName"
                    placeholder="Instagram"
                    required
                    onChange={handleChange}
                  />
                </Col>

                <Col md={6}>
                  <Form.Control
                    type="text"
                    name="lastName"
                    placeholder="Twitter"
                    required
                    onChange={handleChange}
                  />
                </Col>

                <Col md={6}>
                  <Form.Control
                    type="text"
                    name="phone"
                    placeholder="Tiktok"
                    required
                    onChange={handleChange}
                  />
                </Col>

                <Col md={6}>
                  <Form.Control
                    type="text"
                    name="email"
                    placeholder="Only Fans"
                    required
                    onChange={handleChange}
                  />
                </Col>

                {/* ADDITIONAL DETAILS */}
                <Col lg={12}>
                  <h4>{t("join.additionalDetails")}</h4>
                </Col>

                <Col lg={12}>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    placeholder={t("join.aboutYou")}
                    onChange={handleChange}
                  />
                </Col>

                <Col lg={12}>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    placeholder={t("join.doneYes")}
                    onChange={handleChange}
                  />
                </Col>

                <Col lg={12}>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    placeholder={t("join.guest")}
                    onChange={handleChange}
                  />
                </Col>

                <Col lg={12}>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    placeholder={t("join.superPower")}
                    onChange={handleChange}
                  />
                </Col>

                <Col lg={12}>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    placeholder={t("join.funnyStory")}
                    onChange={handleChange}
                  />
                </Col>

                <Col lg={12}>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    placeholder={t("join.fileUpload")}
                    onChange={handleChange}
                  />
                </Col>

                <Col md={6}>
                  <Form.Control
                    type="text"
                    name="email"
                    placeholder={t("join.expectSalary")}
                    required
                    onChange={handleChange}
                  />
                </Col>

                <Col md={6}>
                  <Form.Control
                    type="text"
                    name="email"
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
