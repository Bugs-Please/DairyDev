import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <section classname="footer">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-6">
            © Copyright DairyDev. All Rights Reserved.
          </div>
          <div className="col-md-2">Terms & Conditions</div>
          <div className="col-md-2 rej">Privacy Policy</div>
          <div className="col-md-2">
            <span className="px-3">
              <FontAwesomeIcon icon={faFacebookF} size="xl" />
            </span>
            <span className="px-3">
              <FontAwesomeIcon icon={faTwitter} size="xl" />
            </span>
            <span className="px-3">
              <FontAwesomeIcon icon={faInstagram} size="xl"/>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
