import { useTranslation } from "react-i18next";
import { useState } from "react";
import "./Contact.css";

import { Helmet } from "react-helmet";

export default function Contact() {
  const { t } = useTranslation("global");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:info@crystalclub.ch?subject=${encodeURIComponent(
      formData.subject
    )}&body=Hello Crystal Club Team,%0D%0A%0D%0A
    You have received a new contact form submission with the following details:%0D%0A%0D%0A
    **Name:** ${encodeURIComponent(formData.name)}%0D%0A
    **Email:** ${encodeURIComponent(formData.email)}%0D%0A%0D%0A
    **Message:** %0D%0A
    ${encodeURIComponent(formData.message)}%0D%0A%0D%0A
    Best regards,%0D%0A
    ${encodeURIComponent(formData.name)}`;

    // Redirect to mail client
    window.location.href = mailtoLink;
  };

  return (
    <div className="contactUs">
      <Helmet>
        <title>
          Contact Us - Crystal Club Zurich: Premier Nightlife & Exclusive Events
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
      <section id="contact" className="contact section col-lg-7">
        <div className="container sectionTitle" data-aos="fade-up">
          <h2>{t("contactUs.contactUs")}</h2>
          <p>
            <span>{t("contactUs.contactUsQuote")}</span>{" "}
          </p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="mb-5">
            <iframe
              style={{ width: "100%", height: "300px", borderRadius: "7px" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2701.4871976324384!2d8.676654276436285!3d47.3829262711702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479aa3bb2cf00001%3A0x2ffa1cb10914c7e!2sCrystal%20Lounge%20Club%20Gmbh!5e0!3m2!1sen!2sin!4v1726635742447!5m2!1sen!2sin"
              frameBorder="0"
              allowFullScreen=""
            ></iframe>
          </div>

          <div className="row gy-4">
            <div className="col-md-12">
              <div
                className="contactInfoItem d-flex align-items-center"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <i className="icon bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h3>{t("footer.addressTitle")}</h3>
                  <p>{t("footer.addressValue")}</p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div
                className="contactInfoItem d-flex align-items-center"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <i className="icon bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h3>{t("contactUs.email")}</h3>
                  <p>info@crystalclub.ch</p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div
                className="contactInfoItem d-flex align-items-center"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <i className="icon bi bi-clock flex-shrink-0"></i>
                <div>
                  <h3>
                    {t("contactUs.mobile")}
                    <br />
                  </h3>
                  <p>
                    <strong>+41 76 749 00 39</strong>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form
            className="contactEmailForm"
            data-aos="fade-up"
            data-aos-delay="600"
            onSubmit={handleSubmit}
          >
            <div className="row gy-4">
              <h4>Email Us</h4>
              <p>We'll Reach You Shortly !</p>
              <div className="col-md-6">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-12">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  placeholder="Subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-12">
                <textarea
                  className="form-control"
                  name="message"
                  rows="6"
                  placeholder="Message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="col-md-12 text-center">
                <button type="submit">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
