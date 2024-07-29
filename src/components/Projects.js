import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/passguard.png";
import projImg2 from "../assets/img/luxium.png";
import projImg3 from "../assets/img/hacku.png";
import projImg4 from "../assets/img/simon.png";
import projImg5 from "../assets/img/chatbot.png";
import projImg6 from "../assets/img/fleetflow.png";
import projImg7 from "../assets/img/radius.png";
import projImg8 from "../assets/img/F1.png";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Real Estate App",
      description: "Full-stack real estate web application that helps homebuyers, renters, brokers, and administrators.",
      imgUrl: projImg2,
      url: "https://github.com/Zineb2a/Luxium",
      category: "Fullstack",
      stack: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Fleetflow",
      description: "Scheduling software designed to optimize appointment processes for vehicle service businesses.",
      imgUrl: projImg6,
      url: "https://github.com/Zineb2a/Fleetflow",
      category: "Fullstack",
      stack: ["Java", "MySQL", "HTML", "CSS"],
      award: true // Add this line to indicate the project won an award
    },
    {
      title: "Radius 15",
      description: "An application designed to promote sustainable living by visualizing essential services within a 15-minute walking radius.",
      imgUrl: projImg7,
      url: "https://github.com/Zineb2a/Radius15",
      category: "Fullstack",
      stack: ["React", "Google Maps API", "Google Places API"],
    },
    {
      title: "Passguard",
      description: "Check passwords & generate secure ones.",
      imgUrl: projImg1,
      url: "https://github.com/Zineb2a/PassGuard",
      category: "Frontend",
      stack: ["React", "Bootstrap", "CSS"],
    },
    {
      title: "Haiku Generator",
      description: "Generates Haikus based on user input, utilizing natural language processing.",
      imgUrl: projImg3,
      url: "https://github.com/Zineb2a/hacku",
      category: "Backend",
      stack: ["Node.js", "Express", "MongoDB"],
    },
    {
      title: "Chatbot",
      description: "A chatbot coded in Python with a MySQL database to simulate written conversations with human users.",
      imgUrl: projImg5,
      url: "https://github.com/Zineb2a/Chatbot",
      category: "Backend",
      stack: ["Python", "MySQL"],
    },
    {
      title: "Simon Game",
      description: "Recreates the classic Simon game with tones and lights.",
      imgUrl: projImg4,
      url: "https://github.com/Zineb2a/Simon-Game",
      category: "Frontend",
      stack: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "F1 Race Analysis Project",
      description: "Analyzes the performance and various aspects of the F1 Montreal Grand Prix 2024 using data analysis techniques. The analysis includes driver performance, pit stop strategies, tire strategies, weather impact, and incidents during the race.",
      imgUrl: projImg8,
      url: "https://github.com/Zineb2a/F1_Montreal2024_Analysis",
      category: "Backend",
      stack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Requests"]
    }
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>In this Projects section, discover my passion for coding brought to life – where every line of code transforms my ideas into tangible, functional creations.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="fullstack">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                        <Nav.Link eventKey="fullstack">Fullstack</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="frontend">Frontend</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="backend">Backend</Nav.Link>
                      </Nav.Item>
                 
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="frontend">
                        <Row>
                          {
                            projects.filter(project => project.category === "Frontend").map((project, index) => {
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
                      <Tab.Pane eventKey="backend">
                        <Row>
                          {
                            projects.filter(project => project.category === "Backend").map((project, index) => {
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
                      <Tab.Pane eventKey="fullstack">
                        <Row>
                          {
                            projects.filter(project => project.category === "Fullstack").map((project, index) => {
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
                    </Tab.Content>
                  </Tab.Container>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
