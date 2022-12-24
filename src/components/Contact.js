import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { send } from "emailjs-com";
export const Contact = () => {
  const formInitialDetails = {
    from_name: "",
    to_name: "",
    message: "",
    reply_to: "",
  };
  const [toSend, setToSend] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    send("service_7psysuk", "template_ewdwr1d", toSend, "GX-BW5g0MG1OJXeV3")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setButtonText("Send");
        setToSend(formInitialDetails);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>
                  <form onSubmit={onSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          placeholder="First Name"
                          value={toSend.from_name}
                          name="from_name"
                          onChange={handleChange}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          name="to_name"
                          value={toSend.to_name}
                          placeholder="Last Name"
                          onChange={handleChange}
                        />
                      </Col>
                      <Col size={12} className="px-1 col-12">
                        <input
                          type="email"
                          name="reply_to"
                          value={toSend.reply_to}
                          placeholder="Email Address"
                          onChange={handleChange}
                        />
                      </Col>

                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          name="message"
                          value={toSend.message}
                          placeholder="Message"
                          onChange={handleChange}
                        ></textarea>
                        <button type="submit">
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                      {status.message && (
                        <Col>
                          <p
                            className={
                              status.success === false ? "danger" : "success"
                            }
                          >
                            {status.message}
                          </p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
