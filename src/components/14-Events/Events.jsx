import { Card, Modal, Row, Col } from "react-bootstrap";
import "./Events.css";
import { useTranslation } from "react-i18next";
import { useState } from "react";

import eventImg1 from "../../assets/Discover/privateDance.JPG";
import eventImg2 from "../../assets/Images/img5.JPG";
import eventImg3 from "../../assets/Discover/clubSeven.JPG";
import eventImg4 from "../../assets/Discover/clubEight.JPG";

const eventData = [
  {
    id: 1,
    title: "Upcoming Party Extravaganza",
    description:
      "Join us for an unforgettable night of fun, music, and dance at our upcoming party!",
    content:
      "Get ready for the most exciting party of the year! With top DJs spinning the latest hits, themed decorations, and an electric atmosphere, this event will be the highlight of the season. Book your tickets now and prepare for an evening of non-stop fun with special performances and surprise giveaways!",
    img: eventImg1,
  },
  {
    id: 2,
    title: "Bachelor Party Bonanza",
    description:
      "Host your ultimate bachelor party at our venue with exclusive VIP sections and customized experiences.",
    content:
      "Looking for the perfect spot to celebrate your bachelor party? Look no further! We offer VIP sections, personalized drinks, and party packages to make your night unforgettable. Whether you want a laid-back evening with friends or a wild celebration, our venue has everything you need to create the bachelor party of your dreams.",
    img: eventImg2,
  },
  {
    id: 3,
    title: "Celebrity Night: Special Guests & Performances",
    description:
      "Celebrities are coming to our venue for a night of glitz, glamour, and live performances.",
    content:
      "Don’t miss the chance to party with the stars! Our upcoming celebrity night will feature live performances by renowned artists, special guest appearances, and plenty of opportunities to meet your favorite celebrities. Enjoy a VIP experience and take part in exclusive meet-and-greet sessions. Limited tickets available, so act fast!",
    img: eventImg3,
  },
  {
    id: 4,
    title: "Holiday Gala & Winter Wonderland",
    description:
      "Celebrate the holiday season with our grand Holiday Gala, featuring live entertainment and themed decor.",
    content:
      "Step into a winter wonderland and celebrate the holiday season at our annual gala. Enjoy gourmet dining, live performances, and festive decorations that capture the magic of the season. Perfect for families, friends, or corporate gatherings, this event is sure to get you in the holiday spirit!",
    img: eventImg4,
  },
];

export default function Events() {
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
      <div className="eventContentsPage">
        <div className="eventContents">
          <h3>{t("footer.events")}</h3>
          <div className="divider"></div>

          <Row>
            {eventData.map((blog) => (
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
                      View Event Details
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
