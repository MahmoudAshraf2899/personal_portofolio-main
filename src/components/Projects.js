import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { CertificateCard } from "./CertificateCard";
import projImg6 from "../assets/img/burger.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import procoor from "../assets/img/Procoor-Egypt-24462-1502608158-og.png";
import AlAhram from "../assets/img/Al-AhramLogo.jpg";
import comingSoon from "../assets/img/coming-soon2.jpg";
import PmProject from "../assets/img/PmProcoor.jpg";
import FmProject from "../assets/img/FmEdited_1140.jpg";
import DoctorApp from "../assets/img/DoctorApp_2048x1140.png";
import RealEstateProject from "../assets/img/ProcoorRealEstate.avif";
import FawryApi from "../assets/img/FawryEdited.png";
import AhramOnline from "../assets/img/AhramOnline_Edited.jpg";
import Cs50Certificate from "../assets/img/CS50x_.jpg";
import CS50EDX from "../assets/img/HarvardX_CS50x_Certificate___edX.jpg";
import frontEndItShark from "../assets/img/Front-EndITShark.jpg";
import EducationDashboard from "../assets/img/Education DashBoard.png";
import GehanWebSite from "../assets/img/GehanWebSite.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      url: "https://gate.ahram.org.eg/",
      imgUrl: AlAhram,
    },
    {
      url: "https://www.procoor.com/",
      imgUrl: procoor,
    },
    {
      url: "#",
      imgUrl: comingSoon,
    },
  ];
  const personal_projects = [
    {
      imgUrl: PmProject,
    },
    {
      imgUrl: FmProject,
    },
    {
      imgUrl: RealEstateProject,
    },
    {
      imgUrl: DoctorApp,
    },
    {
      imgUrl: FawryApi,
    },
    {
      imgUrl: AhramOnline,
    },
    {
      imgUrl: EducationDashboard,
    },
    {
      imgUrl: GehanWebSite,
    },
  ];
  const personal_Certificates = [
    {
      imgUrl: Cs50Certificate,
      url: "https://certificates.cs50.io/9407994e-68d0-4a45-9628-0ade04083053.pdf?size=letter",
    },
    {
      imgUrl: CS50EDX,
      url: "https://courses.edx.org/certificates/1f0069a8201444e8a85974f8643ca494",
    },
    {
      imgUrl: frontEndItShark,
      url: "#",
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={3}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Experience</h2>
                  <p>I Show To You All Projects I Had Worked On.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills d-flex mb-5 justify-content-center g-5 align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Companies</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">
                          Projects And Personal Project
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Certificates</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {personal_projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {personal_Certificates.map((project, index) => {
                            return <CertificateCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
