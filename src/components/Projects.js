import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Passguard.png";
import projImg2 from "../assets/img/Luxium.png";
import projImg3 from "../assets/img/Hacku.png";
import projImg4 from "../assets/img/Simon.png";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Passguard",
      description: "Check passwords & generate secure ones. ",
      imgUrl: projImg1,
      url: "http://passguard.tech",
    },
    {
      title: "Real Estate App",
      description: "Full-stack real estate web application that aims to be used by: Homebuyers, Property renters, system administrator(s), and (real-state) brokers.",
      imgUrl: projImg2,
      url: "https://github.com/6amigos-concordia/6amigos-soen341projectF2023",
    },
    {
      title: "Haiku Generator",
      description: "This application generates Haiku for you according to your needs. Describe an emotion that you are feeling in the moment and it may reveal something about you.",
      imgUrl: projImg3,
      url: "https://github.com/zitatorocsik/nlp-equipe1",
    },
    {
      title: "Simon Game",
      description: "It creates a series of tones and lights and requires a user to repeat the sequence. If the user succeeds, the series becomes progressively longer and more complex.",
      imgUrl: projImg4,
      url: "",
    },
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>In this Projects section, discover my passion for coding brought to life – where every line of code transforms my ideas into tangible, functional creations.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                   
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

    </section>
  )
}