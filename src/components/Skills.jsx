import React from 'react';
import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Parallax } from 'react-scroll-parallax';
import { faReact, faJs, faHtml5, faCss3Alt, faNodeJs } from '@fortawesome/free-brands-svg-icons';

function Skills() {
  const skills = [
    { name: 'React', level: 90, icon: faReact },
    { name: 'JavaScript', level: 85, icon: faJs },
    { name: 'HTML', level: 95, icon: faHtml5 },
    { name: 'CSS', level: 80, icon: faCss3Alt },
    { name: 'Node.js', level: 75, icon: faNodeJs }
  ];

  return (
    <Parallax speed={-10}>
    <section id="skills" className="skills-section py-5">
      <div className="container">
        <h2 className="text-center mb-5 text-warning">My Skills</h2>
        <div className="row">
          {skills.map((skill, index) => (
            <div key={index} className="col-md-6 mb-4">
              <div className="skill-item">
                <div className="skill-icon">
                  <FontAwesomeIcon icon={skill.icon} />
                </div>
                <div className="skill-info">
                  <h3 className="skill-name">{skill.name}</h3>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: `${skill.level}%` }}>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </Parallax>
  );
}

export default Skills;