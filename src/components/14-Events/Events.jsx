import { Card, Modal, Row, Col } from "react-bootstrap";
import "./Events.css";
import { useTranslation } from "react-i18next";
import { useState } from "react";

import eventImg1 from "../../assets/Discover/privateDance.JPG";
import eventImg2 from "../../assets/Images/img5.JPG";
import eventImg3 from "../../assets/Discover/clubSeven.JPG";
import eventImg4 from "../../assets/Discover/clubEight.JPG";

import { Helmet } from "react-helmet";

const eventData = [
  {
    id: 1,
    title: "Halloween Party",
    description:
      "Get ready for a night of spine-chilling fun and eerie excitement at our Halloween Party!",
    content:
      "Join us for a terrifyingly good time at our Halloween Party! The club will be transformed into a haunted house filled with spooky decor, eerie lighting, and fog-filled dance floors. Wear your scariest, funniest, or most creative costume and compete in our epic costume contest with amazing prizes for the best outfits. Dance the night away to haunting beats by our live DJ, enjoy special Halloween-themed cocktails, and capture the moment in our ghoulish photo booth. It's going to be a night full of thrills, chills, and unforgettable memories. Get your tickets now and be part of the frightful fun!",
    img: eventImg2,
    date: "20 Uhr, 31.Oktober, 2024",
  },
  // {
  //   id: 2,
  //   title: "Upcoming Party Extravaganza",
  //   description:
  //     "Join us for an unforgettable night of fun, music, and dance at our upcoming party!",
  //   content:
  //     "Get ready for the most exciting party of the year! With top DJs spinning the latest hits, themed decorations, and an electric atmosphere, this event will be the highlight of the season. Book your tickets now and prepare for an evening of non-stop fun with special performances and surprise giveaways!",
  //   img: eventImg1,
  //   date: "November 5, 2024",
  // },
  // {
  //   id: 3,
  //   title: "Celebrity Night: Special Guests & Performances",
  //   description:
  //     "Celebrities are coming to our venue for a night of glitz, glamour, and live performances.",
  //   content:
  //     "Don’t miss the chance to party with the stars! Our upcoming celebrity night will feature live performances by renowned artists, special guest appearances, and plenty of opportunities to meet your favorite celebrities. Enjoy a VIP experience and take part in exclusive meet-and-greet sessions. Limited tickets available, so act fast!",
  //   img: eventImg3,
  //   date: "December 12, 2024",
  // },
  // {
  //   id: 4,
  //   title: "Holiday Gala & Winter Wonderland",
  //   description:
  //     "Celebrate the holiday season with our grand Holiday Gala, featuring live entertainment and themed decor.",
  //   content:
  //     "Step into a winter wonderland and celebrate the holiday season at our annual gala. Enjoy gourmet dining, live performances, and festive decorations that capture the magic of the season. Perfect for families, friends, or corporate gatherings, this event is sure to get you in the holiday spirit!",
  //   img: eventImg4,
  //   date: "December 25, 2024",
  // },
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
      <Helmet>
        <title>
          Crystal Club Zurich: Stripclub|Tabledance|Live Shows |Nightclub
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
      <div className="eventContentsPage">
        <div className="eventContents">
          <h3>{t("footer.events")}</h3>
          <div className="divider"></div>

          <Row className="mt-3">
            {eventData.map((blog) => (
              <Col
                key={blog.id}
                lg={3}
                md={4}
                sm={6}
                className="mb-4"
                style={{ width: "18rem" }}
              >
                <Card className="h-100">
                  <Card.Img variant="top" src={blog.img} />
                  <Card.Body className="d-flex flex-column">
                    <div className="flex-grow-1">
                      <Card.Title className="mt-3">{blog.title}</Card.Title>
                      <Card.Text className="mt-2">{blog.description}</Card.Text>
                    </div>
                    <div className="event-date mt-3">
                      <strong>{blog.date}</strong>
                    </div>
                    <button
                      className="blogBtn mt-3"
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
            <Modal show={showModal} onHide={handleClose} centered fullscreen>
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
