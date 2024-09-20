import { useState } from "react";

import { Col, Row, Form, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import "./Rent.css";
export default function Rent() {
  const { t } = useTranslation("global");
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
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

    console.log("Form Data Submitted:", formData);

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    console.log(data);

    const mailtoLink = `mailto:info@crystalclub.ch?subject=Bar Rental Request from ${data.firstname} ${data.lastname}&body=
    Dear Crystal Club Team,%0D%0A%0D%0A
    I am interested in renting the bar for an event and would like to provide the following details:%0D%0A%0D%0A
    Name: ${data.firstname} ${data.lastname}%0D%0A
    Phone: ${data.phone}%0D%0A%0D%0A
    Event Date: ${data.eventDate}%0D%0A
    Number of Guests: ${data.numberOfGuests}%0D%0A
    Event Type: ${data.eventType}%0D%0A%0D%0A
    Additional Details:%0D%0A
    ${data.additionalDetails}%0D%0A%0D%0A
    Please feel free to contact me for any further information.%0D%0A%0D%0A
    Best regards,%0D%0A
    ${data.firstname} ${data.lastname}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="rentOurBar">
      <div className="rentBar">
        <div className="rentBarCont col-lg-7">
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
                    type="text"
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
