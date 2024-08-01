import React from 'react';
import profilePic from '../images/sandipjadhav.jpg';
import Avatar from '@mui/material/Avatar';
import './Introduction.css';
import { Parallax } from 'react-scroll-parallax';


function Introduction() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `https://drive.google.com/file/d/1xWnX-EJJ_fzrSDgzoS04kP8ZmI_oUKHH/view?usp=sharing`;
    link.download = 'SandipJadhav.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <Parallax speed={-10}>
    <section id="introduction" className="py-5 introduction-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="mb-4 text-warning">About Me</h2>
            <p className="lead ">Hello! I'm a passionate web developer with experience in React and other modern technologies.I am Sandip Baban Jadhav, a recent Computer Science graduate from Karmaveer Bhaurao Patil College of Engineering with a passion for web development. I have gained proficiency in HTML, CSS, JavaScript, and web frameworks through my coursework and personal projects. I am completed Internship in Java Developer as a Backend Developer as well as Completed the course Full Stack Developer.</p>
            <p>I love creating beautiful and functional websites that solve real-world problems.</p>
            
<button onClick={handleDownload} type="button" class="btn btn-warning text-white" href="../Resume/SandipJadhav.pdf" download = "SandipJadhav.pdf">Resume</button>
          </div>
          <div className="col-md-6 image-section"> 
            {/* <img src= alt="Your Name" className="img-fluid rounded-circle" /> */}
            <Avatar alt="Sandip Jadhav" src={profilePic} sx={{ width: 200, height: 200 } }/>
          </div>
        </div>
      </div>
    </section>
    </Parallax>
  );
}

export default Introduction;