import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import { Parallax } from 'react-scroll-parallax';


function Header() {
  return (
    <Parallax translateY={[-20, 20]} className="header-parallax">
    <header className="py-5 w-100" style={{width: '100vw', minHeight: '100vh', display: 'flex', alignItems: 'center'}}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
          <Parallax translateY={[-30, 30]} className="name-parallax">
            <h1 className="text-warning  mb-4">Sandip Jadhav</h1>
            <p className="lead">Web Developer & Designer</p>
            </Parallax>
          </div>
          <div className="col-md-6">
          <Parallax translateY={[-40, 40]} className="nav-parallax">
            <nav className='mb-4'>
              <ul className="nav justify-content-end">
              <li className="nav-item"><a class="mb-4" className="nav-link text-warning" href="#introduction"><HomeIcon color="primary" /></a></li>

                <li className="nav-item"><a className="nav-link  text-warning font-weight-bold" href="#introduction">About</a></li>
                <li className="nav-item"><a className=" mb-4 nav-link  text-warning" href="#projects">Projects</a></li>
                <li className="nav-item"><a className="nav-link text-warning" href="#skills">Skills</a></li>
                <li className="nav-item"><a className="nav-link text-warning" href="#contact">Contact</a></li>
              </ul>
            </nav>
            </Parallax>
          </div>
        </div>
      </div>
    </header>
    </Parallax>
  );
}

export default Header;