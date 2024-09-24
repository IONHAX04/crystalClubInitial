import {
  FaInstagram,
  FaFacebook,
  FaXTwitter,
  FaWhatsapp,
} from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Nav } from "react-bootstrap";
import "./Footer.css";

export default function Footer() {
  const { t, i18n } = useTranslation("global");
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  const handleChangeLang = (lang) => {
    i18n.changeLanguage(lang);
    window.scrollTo(0, 0);
  };

  const currentLang = i18n.language;

  return (
    <div>
      <footer className="bg-dark text-white">
        <div className="pt-16 pb-12 border-top border-slate-900 footerBg">
          <Container
            className="col-lg-12"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Row style={{ justifyContent: "space-between", width: "95%" }}>
              <Col md={4} lg={3} className="mb-4">
                <h3 className="text-white text-xl mb-3">
                  {t("footer.addressTitle")}
                </h3>
                <Nav className="flex-column">
                  <Nav.Link className="text-lg text-white hover:text-yellow-500">
                    <p>Crystal Club & Lounge,</p>
                    <p>Sandbüehlstrasse 6,</p>
                    <p>8604 Volketswil,</p>
                    <p>Switzerland.</p>
                  </Nav.Link>
                </Nav>
              </Col>
              <Col md={4} lg={3} className="mb-4">
                <h3 className="text-white text-xl mb-3">
                  {t("footer.quickLinks")}
                </h3>
                <Nav className="flex-column">
                  <Nav.Link
                    className="text-lg text-white hover:text-yellow-500"
                    onClick={() => handleNavigate("/")}
                  >
                    {t("footer.home")}
                  </Nav.Link>
                  <Nav.Link
                    className="text-lg text-white hover:text-yellow-500"
                    onClick={() => handleNavigate("/entrance")}
                  >
                    {t("footer.entrance")}
                  </Nav.Link>
                  {/* <Nav.Link
                    className="text-lg text-white hover:text-yellow-500"
                    onClick={() => handleNavigate("/gallery")}
                  >
                    {t("footer.gallery")}
                  </Nav.Link> */}
                  <Nav.Link
                    className="text-lg text-white hover:text-yellow-500"
                    onClick={() => handleNavigate("/girls")}
                  >
                    {t("footer.girls")}
                  </Nav.Link>
                  <Nav.Link
                    className="text-lg text-white hover:text-yellow-500"
                    onClick={() => handleNavigate("/rent")}
                  >
                    {t("footer.rent")}
                  </Nav.Link>
                  <Nav.Link
                    className="text-lg text-white hover:text-yellow-500"
                    onClick={() => handleNavigate("/events")}
                  >
                    {t("footer.events")}
                  </Nav.Link>
                  <Nav.Link
                    className="text-lg text-white hover:text-yellow-500"
                    onClick={(e) => {
                      e.preventDefault();
                      const newLang = currentLang === "en" ? "de" : "en";
                      handleChangeLang(newLang);
                    }}
                  >
                    Translate
                  </Nav.Link>
                  {/* <Nav.Link
                    className="text-lg text-white hover:text-yellow-500"
                    onClick={() => handleNavigate("/faq")}
                  >
                    {t("footer.faq")}
                  </Nav.Link> */}
                </Nav>
              </Col>
              <Col md={4} lg={2} className="mb-4">
                <h3 className="text-white text-xl mb-3">
                  {t("footer.aboutUs")}
                </h3>
                <Nav className="flex-column">
                  <Nav.Link
                    className="text-lg text-white hover:text-yellow-500"
                    onClick={() => handleNavigate("/experience")}
                  >
                    {t("footer.experience")}
                  </Nav.Link>
                  <Nav.Link
                    className="text-lg text-white hover:text-yellow-500"
                    onClick={() => handleNavigate("/jobs")}
                  >
                    {t("footer.jobs")}
                  </Nav.Link>
                  <Nav.Link
                    className="text-lg text-white hover:text-yellow-500"
                    onClick={() => handleNavigate("/discover")}
                  >
                    {t("footer.discoverClub")}
                  </Nav.Link>
                  <Nav.Link
                    className="text-lg text-white hover:text-yellow-500"
                    onClick={() => handleNavigate("/drinks")}
                  >
                    {t("footer.menu")}
                  </Nav.Link>
                  <Nav.Link
                    className="text-lg text-white hover:text-yellow-500"
                    onClick={() => handleNavigate("/blogs")}
                  >
                    {t("footer.blogs")}
                  </Nav.Link>
                  <Nav.Link
                    className="text-lg text-white hover:text-yellow-500"
                    onClick={() => handleNavigate("/contactUs")}
                  >
                    {t("footer.contactUs")}
                  </Nav.Link>
                </Nav>
              </Col>
              <Col md={4} lg={3} className="mb-4">
                <h3 className="text-white text-xl mb-3">
                  {t("contactUs.ourOpeningHrs")}
                </h3>
                <Nav className="flex-column">
                  <Nav.Link className="text-lg text-white hover:text-yellow-500">
                    {t("contactUs.timeOne")}
                  </Nav.Link>
                  <Nav.Link className="text-lg text-white hover:text-yellow-500">
                    {t("contactUs.timeTwo")}
                  </Nav.Link>
                  <Nav.Link className="text-lg text-white hover:text-yellow-500">
                    {t("contactUs.timeThree")}
                  </Nav.Link>
                </Nav>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="py-4 bg-black-700 border-top border-slate-900">
          <Container>
            <Row className="align-items-center">
              <Col
                md={12}
                lg={6}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                {t("footer.copyright")}
              </Col>

              <Col md={12} lg={6}>
                <Nav className="mt-3" style={{ justifyContent: "center" }}>
                  <Nav.Link
                    href="https://www.instagram.com/crystal_clublounge/"
                    target="_blank"
                    className="text-white"
                  >
                    <FaInstagram fontSize={20} />
                  </Nav.Link>
                  <Nav.Link className="text-white">
                    <FaFacebook fontSize={20} />
                  </Nav.Link>
                  <Nav.Link className="text-white">
                    <FaXTwitter fontSize={20} />
                  </Nav.Link>
                  <Nav.Link
                    className="text-white"
                    href="https://wa.me/41767490039"
                    target="_blank"
                  >
                    <FaWhatsapp fontSize={20} />
                  </Nav.Link>
                </Nav>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    </div>
  );
}
