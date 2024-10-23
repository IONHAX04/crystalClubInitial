import { Card, Modal, Row, Col } from "react-bootstrap";
import "./Blogs.css";
import { useTranslation } from "react-i18next";
import { useState } from "react";

import Header from "../01-Header/Header";

import { Helmet } from "react-helmet";

import blogImg from "../../assets/Discover/privateDance.JPG";
import blogImg2 from "../../assets/Images/img5.JPG";
import blogImg3 from "../../assets/Discover/clubSeven.JPG";
import blogImg4 from "../../assets/Discover/clubEight.JPG";

const blogData = [
  {
    id: 1,
    title: "Host Unforgettable Events at Crystal Club & Lounge",
    description:
      "Discover the perfect venue for your celebration with Crystal Club’s elegant bar rental experience.",
    content:
      "Detailed content about hosting events at Crystal Club & Lounge...",
    img: blogImg,
  },
  {
    id: 2,
    title: "Exclusive Private Dance Lessons",
    description: "Join our private dance sessions and learn from the best.",
    content: "Information about private dance lessons offered at our venue...",
    img: blogImg2,
  },
  {
    id: 3,
    title: "Cocktail Masterclass",
    description: "Learn the art of mixology with our expert bartenders.",
    content: "Details about the cocktail masterclass we offer...",
    img: blogImg3,
  },
  {
    id: 4,
    title: "Themed Parties",
    description: "Host unique themed parties at our venue.",
    content: "Explore the different themes available for your events...",
    img: blogImg4,
  },
];

export default function Blogs() {
  const { t } = useTranslation("global");
  const [showModal, setShowModal] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleShow = (blog) => {
    setSelectedBlog(blog);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedBlog(null);
  };

  return (
    <div>
      <Helmet>
        <title>
          Crystal Club Zurich: Stripclub|Tabledance|Live Shows |Nightclub 
        </title>
        <meta name="description" content="Crystal Club & Lounge." />
        <link rel="canonical" href="https://crystalclub.ch/" />

        <meta
          name="keywords"
          content="club, crystal club, crystal, home, about, girls, gallery, club, events, drinks, blogs, jobs, crystal club home, crystal club and lounge, crystal club and lounge home,, europe, girls, german, girls club, private party, bachelors party, birthday party, private dance, crystal club, private dance, birthday, bac party, party bachelor, party bachelor party, crystal club , private dance, live shows, dancers, party , bachelors party, birthday party, nightclub , volketswil, nightclub in zurich"
        />
        <meta name="robots" content="index, follow" />

        <meta
          name="description"
          content="Top-Nachtclub in Volketswil. Erlebe Live-Shows und gutes Ambiente. Grosser Club mit Fumoir. Jetzt mehr erfahren."
        />
      </Helmet>
      <div className="blogContentsPage">
        <div className="blogContents">
          {/* <Header /> */}
          <h3>{t("footer.blogs")}</h3>
          <div className="divider"></div>

          <Row>
            {blogData.map((blog) => (
              <Col key={blog.id} lg={3} md={4} sm={6} className="mb-4">
                <Card className="h-100">
                  <Card.Img variant="top" src={blog.img} />
                  <Card.Body className="d-flex flex-column">
                    <div className="flex-grow-1">
                      <Card.Title className="mt-3">{blog.title}</Card.Title>
                      <Card.Text className="mt-2">{blog.description}</Card.Text>
                    </div>
                    <button
                      className="blogBtn mt-auto"
                      onClick={() => handleShow(blog)}
                    >
                      View Blog
                    </button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {selectedBlog && (
            <Modal show={showModal} onHide={handleClose} centered>
              <Modal.Header closeButton>
                <Modal.Title>{selectedBlog.title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <img
                  src={selectedBlog.img}
                  alt={selectedBlog.title}
                  className="img-fluid mb-3"
                />
                <p>{selectedBlog.content}</p>
              </Modal.Body>
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
}
