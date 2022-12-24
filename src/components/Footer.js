import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/NABWY Logo - Original - 5000x5000 (2).png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/github.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/mahmoud-ashraf-elnabwy-4358191a5/"
                target="_blank"
              >
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="https://github.com/MahmoudAshraf2899" target="_blank">
                <img className="github_icon" src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>Thank you for attention</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
