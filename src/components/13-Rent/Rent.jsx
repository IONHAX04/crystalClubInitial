import { useState } from "react";

import { Col, Row, Form, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Header from "../01-Header/Header";

import { Helmet } from "react-helmet";

import "./Rent.css";
export default function Rent() {
  const { t } = useTranslation("global");
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    eventDate: "",
    numberOfGuests: "",
    eventType: "",
    additionalDetails: "",
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

    console.log("Form Data Submitted:", formData);
    console.log(data);

    const mailtoLink = `mailto:info@crystalclub.ch?subject=Bar Rental Request from ${data.firstname} ${data.lastname}&body=
    Dear Crystal Club Team,%0D%0A%0D%0A
    I am interested in renting the bar for an event and would like to provide the following details:%0D%0A%0D%0A
    Name: ${data.firstName} ${data.lastName}%0D%0A
    Phone: ${data.phone}%0D%0A%0D%0A
    Event Date: ${data.eventDate}%0D%0A
    Number of Guests: ${data.numberOfGuests}%0D%0A
    Event Type: ${data.eventType}%0D%0A%0D%0A
    Additional Details:%0D%0A
    ${data.additionalDetails}%0D%0A%0D%0A
    Please feel free to contact me for any further information.%0D%0A%0D%0A
    Best regards,%0D%0A
    ${data.firstName} ${data.lastName}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="rentOurBar">
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
      <div className="rentBar">
        <div className="rentBarCont col-lg-7">
          {/* <Header /> */}
          <h3>{t("rentBar.rentOurBar")}</h3>
          <div className="divider"></div>
          <p>{t("rentBar.rentOne")}</p>
          <p>{t("rentBar.rentTwo")}</p>
        </div>
      </div>
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
                    type="number"
                    name="phone"
                    placeholder={t("join.phoneNumber")}
                    required
                    onChange={handleChange}
                  />
                </Col>

                <Col md={6}>
                  <Form.Control
                    type="datetime-local"
                    name="eventDate"
                    placeholder={t("rentBar.eventDate")}
                    required
                    onChange={handleChange}
                  />
                </Col>

                <Col md={6}>
                  <Form.Control
                    type="number"
                    name="numberOfGuests"
                    placeholder={t("rentBar.numberOfPerson")}
                    required
                    onChange={handleChange}
                  />
                </Col>

                <Col md={6}>
                  <Form.Select
                    name="eventType"
                    required
                    className="form-control"
                    defaultValue=""
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      {t("rentBar.eventType")}
                    </option>
                    <option value="Birthday">{t("rentBar.birthDay")}</option>
                    <option value="Bachelor Party">
                      {t("rentBar.bachelor")}
                    </option>
                    <option value="Corporate Event">
                      {t("rentBar.corporate")}
                    </option>
                    <option value="Other">{t("rentBar.others")}</option>
                  </Form.Select>
                </Col>

                {/* ADDITIONAL DETAILS */}
                <Col lg={12}>
                  <h4>{t("join.additionalDetails")}</h4>
                </Col>

                <Col lg={12}>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="additionalDetails"
                    placeholder={t("join.additionalDetails")}
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
