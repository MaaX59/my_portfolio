import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="app__contact">
      <div className="app__contact-content">
        <div className="app__contact-content-call">
          <h1 className="p-text">Call</h1>
          <br />
          <h1 className="p-text">+33 76 70 19 21 4</h1>
        </div>

        <div className="app__contact-content-email">
          <h1 className="p-text">Email</h1>
          <br />
          <h1 className="p-text">Maax.strandberg@gmail.com</h1>
        </div>
        <div className="app__contact-content-github">
          <a className="p-text" href="https://github.com/MaaX59"> Github</a>
        </div>
        <div className="app__contact-content-linkedin">
          <a className="p-text" href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit">
            Linkedin
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
