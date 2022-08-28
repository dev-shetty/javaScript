import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodepen,
  faGithub,
  faHashnode,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <div id="contact">
      <div>
        <a href="https://twitter.com/ShettyDeveesh" target="_blank">
          <FontAwesomeIcon
            icon={faTwitter}
            size="2x"
            className="socials"
          ></FontAwesomeIcon>
        </a>
        <p>@ShettyDeveesh</p>
      </div>
      <div>
        <a href="https://github.com/Deveesh-Shetty" target="_blank">
          <FontAwesomeIcon
            icon={faGithub}
            size="2x"
            className="socials"
          ></FontAwesomeIcon>
        </a>
        <p>Deveesh-Shetty</p>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/deveesh-shetty-908539214/"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            size="2x"
            className="socials"
          ></FontAwesomeIcon>
        </a>
        <p>Deveesh Shetty</p>
      </div>
      <div>
        <a href="https://deveesh.hashnode.dev/" target="_blank">
          <FontAwesomeIcon
            icon={faHashnode}
            size="2x"
            className="socials"
          ></FontAwesomeIcon>
        </a>
        <p>Deveesh Shetty</p>
      </div>
      <div>
        <a href="https://codepen.io/deveesh_shetty_12" target="_blank">
          <FontAwesomeIcon
            icon={faCodepen}
            size="2x"
            className="socials"
          ></FontAwesomeIcon>
        </a>
        <p>@deveesh_shetty_12</p>
      </div>
      <div style={{ width: "100%", justifyContent: "center", marginTop: "2%" }}>
        <h2>Mail: deveeshshetty@gmail.com</h2>
      </div>
    </div>
  );
}

export default Contact;
