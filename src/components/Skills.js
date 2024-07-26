import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faBootstrap, faJava, faPython, faNodeJs, faGit, faGithub, faDocker } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faTools } from '@fortawesome/free-solid-svg-icons';
import { faFlask, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';

export const Skills = () => {
  const iconStyle = { marginRight: '10px', color: '#000' };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <h1>Skills</h1>
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <div className="skill-category">
                <h3>Web Development</h3>
                <div className="skill-grid">
                  <div className="skill-item"><FontAwesomeIcon icon={faHtml5} style={{ ...iconStyle, color: '#e34c26' }} size="3x" /><span>HTML</span></div>
                  <div className="skill-item"><FontAwesomeIcon icon={faCss3Alt} style={{ ...iconStyle, color: '#264de4' }} size="3x" /><span>CSS</span></div>
                  <div className="skill-item"><FontAwesomeIcon icon={faJs} style={{ ...iconStyle, color: '#f0db4f' }} size="3x" /><span>Javascript</span></div>
                  <div className="skill-item"><FontAwesomeIcon icon={faReact} style={{ ...iconStyle, color: '#61DBFB' }} size="3x" /><span>React</span></div>
                  <div className="skill-item"><FontAwesomeIcon icon={faDatabase} style={{ ...iconStyle, color: '#4DB33D' }} size="3x" /><span>SQL</span></div>
                  <div className="skill-item"><FontAwesomeIcon icon={faJava} style={{ ...iconStyle, color: '#007396' }} size="3x" /><span>Java</span></div>
                  <div className="skill-item"><FontAwesomeIcon icon={faPython} style={{ ...iconStyle, color: '#306998' }} size="3x" /><span>Python</span></div>
                </div>
              </div>
              <div className="skill-category">
                <h3>Frameworks</h3>
                <div className="skill-grid">
                  <div className="skill-item"><FontAwesomeIcon icon={faProjectDiagram} style={{ ...iconStyle, color: '#6DB33F' }} size="3x" /><span>Spring Boot</span></div>
                  <div className="skill-item"><FontAwesomeIcon icon={faReact} style={{ ...iconStyle, color: '#61DBFB' }} size="3x" /><span>React.js</span></div>
                  <div className="skill-item"><FontAwesomeIcon icon={faNodeJs} style={{ ...iconStyle, color: '#68A063' }} size="3x" /><span>Node.js</span></div>
                  <div className="skill-item"><FontAwesomeIcon icon={faFlask} style={{ ...iconStyle, color: '#000' }} size="3x" /><span>Flask</span></div>
                  <div className="skill-item"><FontAwesomeIcon icon={faDatabase} style={{ ...iconStyle, color: '#092E20' }} size="3x" /><span>Django</span></div>
                  <div className="skill-item"><FontAwesomeIcon icon={faBootstrap} style={{ ...iconStyle, color: '#563d7c' }} size="3x" /><span>Bootstrap</span></div>
                </div>
              </div>
              <div className="skill-category">
                <h3>Tools</h3>
                <div className="skill-grid">
                  <div className="skill-item"><FontAwesomeIcon icon={faGit} style={{ ...iconStyle, color: '#F05032' }} size="3x" /><span>Git</span></div>
                  <div className="skill-item"><FontAwesomeIcon icon={faGithub} style={{ ...iconStyle, color: '#000' }} size="3x" /><span>GitHub</span></div>
                  <div className="skill-item"><FontAwesomeIcon icon={faTools} style={{ ...iconStyle, color: '#6DB33F' }} size="3x" /><span>Postman</span></div>
                  <div className="skill-item"><FontAwesomeIcon icon={faDocker} style={{ ...iconStyle, color: '#0db7ed' }} size="3x" /><span>Docker</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
