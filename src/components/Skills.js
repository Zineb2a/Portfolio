import React from 'react';

import eightyfive from "../assets/img/85.png";
import eighty from "../assets/img/80.png";
import seventyfive from "../assets/img/75.png";
import seventy from "../assets/img/70.png";
import sixtyfive from "../assets/img/65.png";
import sixty from "../assets/img/60.png";
import fiftyfive from "../assets/img/55.png";
import fifty from "../assets/img/50.png";




export const Skills = () => {
  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>I am an aspiring Full Stack Developer honing my skills in Web Development and Object-Oriented Programming. Passionate and persistent, I am committed to learning and growing in these areas.</p>
                        
                        <div className="skill-category">
                            <h3>Web Development</h3>
                            <div className="skill-grid">
                                <div className="skill-item"><img src={eightyfive} alt="HTML Skill Meter" /><span>HTML</span></div>
                                <div className="skill-item"><img src={eighty} alt="CSS Skill Meter" /><span>CSS</span></div>
                                <div className="skill-item"><img src={eighty} alt="Javascript Skill Meter" /><span>Javascript</span></div>
                                <div className="skill-item"><img src={eighty} alt="React Skill Meter" /><span>React</span></div>
                                <div className="skill-item"><img src={seventy} alt="Bootstrap Skill Meter" /><span>Bootstrap</span></div>
                                <div className="skill-item"><img src={eighty} alt="SQL Skill Meter" /><span>SQL</span></div>
                                
                               
                            </div>
                        </div>
                        <div className="skill-category">
                            <h3>Object-Oriented Programming</h3>
                            <div className="skill-grid">
                            <div className="skill-item"><img src={eightyfive} alt="CSS Skill Meter" /><span>Java</span></div>
                                <div className="skill-item"><img src={seventyfive} alt="HTML Skill Meter" /><span>Python</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
  );
}

