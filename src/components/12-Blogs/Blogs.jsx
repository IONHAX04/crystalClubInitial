import "./Blogs.css";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

import blogImg2 from "../../assets/Images/img5.JPG";
import { useNavigate } from "react-router-dom";

export default function Blogs() {
  const { t } = useTranslation("global");
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
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
      <div className="blogContentsPage">
        <div className="blogContents">
          {/* <Header /> */}
          <h3>{t("footer.blogs")}</h3>
          <div className="divider"></div>

          <section id="blog-posts" className="blog-posts section">
            <div className="container">
              <div className="row gy-4">
                <div className="col-lg-4">
                  <article
                    onClick={() =>
                      handleNavigate(
                        "/making-memories-top-reasons-crystal-club-bucket-list"
                      )
                    }
                  >
                    <div className="post-img">
                      <img src={blogImg2} alt="" />
                    </div>

                    <p className="post-category">Crystal Club</p>

                    <h2 className="title">
                      <a>
                        Making Memories: Top Reasons Crystal Club Should Be on
                        Your Bucket List{" "}
                      </a>
                    </h2>

                    <div className="d-flex align-items-center">
                      <img
                        src={blogImg2}
                        alt=""
                        className="img-fluid post-author-img flex-shrink-0"
                      />
                      <div className="post-meta">
                        <p className="post-author">Patrizia</p>
                        <p className="post-date">
                          <time dateTime="2022-01-01">Nov 5, 2024</time>
                        </p>
                      </div>
                    </div>
                  </article>
                </div>

                <div className="col-lg-4">
                  <article
                    onClick={() =>
                      handleNavigate(
                        "/elevate-your-night-exclusive-vibe-crystal-club"
                      )
                    }
                  >
                    <div className="post-img">
                      <img src={blogImg2} alt="" className="img-fluid" />
                    </div>

                    <p className="post-category">Crystal Club</p>

                    <h2 className="title">
                      <a>
                        Elevate Your Night: Discover the Exclusive Vibe at
                        Crystal Club
                      </a>
                    </h2>

                    <div className="d-flex align-items-center">
                      <img
                        src={blogImg2}
                        alt=""
                        className="img-fluid post-author-img flex-shrink-0"
                      />
                      <div className="post-meta">
                        <p className="post-author">Patrizia</p>
                        <p className="post-date">
                          <time dateTime="2022-01-01">Nov 6, 2024</time>
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </section>

          {/* <Row>
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
          )} */}
        </div>
      </div>
    </div>
  );
}
