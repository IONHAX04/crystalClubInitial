import {
  FaInstagram,
  FaFacebook,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Nav } from "react-bootstrap";
import "./Footer.css";

export default function Footer() {
  const { t } = useTranslation("global");
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-dark text-slate-400">
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
          <Row style={{ justifyContent: "space-between" }}>
            <Col md={4} lg={3} className="mb-4">
              <h3 className="text-white text-xl mb-3">
                {t("footer.addressTitle")}
              </h3>
              <Nav className="flex-column">
                <Nav.Link
                  href="javascript:void(0)"
                  className="text-lg text-slate-400 hover:text-yellow-500"
                >
                  {t("footer.addressValue")}
                </Nav.Link>
              </Nav>
            </Col>
            <Col md={4} lg={3} className="mb-4">
              <h3 className="text-white text-xl mb-3">
                {t("footer.quickLinks")}
              </h3>
              <Nav className="flex-column">
                <Nav.Link
                  className="text-lg text-slate-400 hover:text-yellow-500"
                  onClick={() => handleNavigate("/entrance")}
                >
                  {t("footer.entrance")}
                </Nav.Link>
                <Nav.Link
                  className="text-lg text-slate-400 hover:text-yellow-500"
                  onClick={() => handleNavigate("/gallery")}
                >
                  {t("footer.gallery")}
                </Nav.Link>
                <Nav.Link
                  className="text-lg text-slate-400 hover:text-yellow-500"
                  onClick={() => handleNavigate("/girls")}
                >
                  {t("footer.girls")}
                </Nav.Link>
                <Nav.Link
                  className="text-lg text-slate-400 hover:text-yellow-500"
                  onClick={() => handleNavigate("/faq")}
                >
                  {t("footer.faq")}
                </Nav.Link>
              </Nav>
            </Col>
            <Col md={4} lg={3} className="mb-4">
              <h3 className="text-white text-xl mb-3">{t("footer.aboutUs")}</h3>
              <Nav className="flex-column">
                <Nav.Link
                  className="text-lg text-slate-400 hover:text-yellow-500"
                  onClick={() => handleNavigate("/experience")}
                >
                  {t("footer.experience")}
                </Nav.Link>
                <Nav.Link
                  className="text-lg text-slate-400 hover:text-yellow-500"
                  onClick={() => handleNavigate("/jobs")}
                >
                  {t("footer.jobs")}
                </Nav.Link>
                <Nav.Link
                  className="text-lg text-slate-400 hover:text-yellow-500"
                  onClick={() => handleNavigate("/discover")}
                >
                  {t("footer.discoverClub")}
                </Nav.Link>
                <Nav.Link
                  className="text-lg text-slate-400 hover:text-yellow-500"
                  onClick={() => handleNavigate("/drinks")}
                >
                  {t("footer.menu")}
                </Nav.Link>
              </Nav>
            </Col>
            <Col md={4} lg={3} className="mb-4">
              <h3 className="text-white text-xl mb-3">
                {t("footer.getInTouch")}
              </h3>
              <Nav className="flex-column">
                <Nav.Link
                  className="text-lg text-slate-400 hover:text-yellow-500"
                  onClick={() => handleNavigate("/contactUs")}
                >
                  {t("footer.contactUs")}
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
                  className="text-slate-400"
                >
                  <FaInstagram fontSize={20} />
                </Nav.Link>
                <Nav.Link className="text-slate-400">
                  <FaFacebook fontSize={20} />
                </Nav.Link>
                <Nav.Link className="text-slate-400">
                  <FaXTwitter fontSize={20} />
                </Nav.Link>
                <Nav.Link className="text-slate-400">
                  <FaYoutube fontSize={20} />
                </Nav.Link>
              </Nav>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
}
