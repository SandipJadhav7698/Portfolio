import React from 'react';
import './Projects.css';
import projectPic from '../images/portfolio.jpg';
import projectPic1 from '../images/chat.png';
import projectPic2 from '../images/user.jpg';
import { Parallax } from 'react-scroll-parallax';



function Projects() {
  const projects = [
    { 
      id: 1, 
      title: 'Portfolio', 
      description: 'Description of project 1', 
      image: projectPic,
      link: 'https://project1.com'
    },
    { 
      id: 2, 
      title: 'Chat Application', 
      description: 'Description of project 2', 
      image: projectPic1,
      link: 'https://project2.com'
    },
    { 
      id: 3, 
      title: 'User Managment', 
      description: 'Description of project 3', 
      image: projectPic2,
      link: 'https://project3.com'
    },
  ];

  return (
    <Parallax translateY={[-20, 20]} className="projects-parallax">
     <section id="contact" className="py-5 bg-light" style={{minHeight: '100vh', display: 'flex', alignItems: 'center'}}>
      <div className="container">
      <Parallax translateY={[-30, 30]} className="title-parallax">
        <h2 className="text-center mb-5 text-warning">My Projects</h2>
        </Parallax>
        <div className="row">
          {projects.map((project, index) => (
            <div key={project.id} className="col-md-4 mb-4">
            <Parallax translateY={[-40 + index * 10, 40 - index * 10]} className="project-parallax">
              <div className="project-card">
                <img src={project.image} className="project-image" alt={project.title} />
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <a href={project.link} className="btn btn-warning text-white" target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
              </div>
              </Parallax>
            </div>
          ))}
        </div>
      </div>
    </section>
    </Parallax>
  );
}

export default Projects;