import React from 'react';
import { Parallax } from 'react-scroll-parallax';
function Contact() {
  return (
    <Parallax translateY={[-20, 20]} className="contact-parallax">
    <section id="contact" className="py-5 bg-light">
      <div className="container">
      <Parallax translateY={[-30, 30]} className="title-parallax">
        <h2 className="text-center mb-5 text-warning ">Contact Me</h2>
        </Parallax>
        <div className="row justify-content-center">
          <div className="col-md-8">
          <Parallax translateY={[-40, 40]} className="form-parallax">
            <form>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Name" required />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Email" required />
              </div>
              <div className="mb-3">
                <textarea className="form-control" rows="5" placeholder="Message" required></textarea>
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-warning text-white btn-lg">Send</button>
              </div>
            </form>
            </Parallax>
          </div>
        </div>
      </div>
    </section>
    </Parallax>
  );
}

export default Contact;