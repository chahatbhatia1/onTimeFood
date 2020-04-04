import React, { Component } from "react";
import logo from "./logo.png";
import "./footer.css";
import "bootstrap/dist/css/bootstrap.css";
import { SocialMediaIconsReact } from "social-media-icons-react";
import { FaMapMarkerAlt, FaMailBulk, FaPhone  } from 'react-icons/fa';



const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer-distributed">
        <div className="footer-left">
          <img src={logo} />
          <h3>
            About<span>On Time Food</span>
          </h3>

          <p className="footer-links">
            <a href="#">Home</a>|<a href="#">Blog</a>|<a href="#">About</a>|
            <a href="#">Contact</a>
          </p>

          <p className="footer-company-name">
            © 2019 On Time Foods Pvt. Ltd.
          </p>
        </div>

        <div className="footer-center">
          <div>
            <FaMapMarkerAlt color="white" iconSize="7"/>{" "}
            <p>
              <span>309 - Rupa Solitaire, Bldg. No. A - 1, Sector - 1</span>
              Mahape, Navi Mumbai - 400710
            </p>
          </div>

          <div>
            <FaPhone color="white" iconSize="7"/>{" "}
            <p>+91 22-27782183</p>
          </div>
          <div>
            <FaMailBulk color="white" iconSize="7"/>{" "}
            <p>
              <a href="mailto:support@eduonix.com">support@eduonix.com</a>
            </p>
          </div>
        </div>
        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the company</span>
            We offer training and skill building courses across Technology,
            Design, Management, Science and Humanities.
          </p>
          <div className="footer-icons">
          <SocialMediaIconsReact
              icon="facebook"
              backgroundColor="none"
              iconSize="7"
            ></SocialMediaIconsReact>

            <SocialMediaIconsReact
              icon="twitter"
              backgroundColor="none"
              iconSize="7"
            ></SocialMediaIconsReact>

            <SocialMediaIconsReact
              icon="youtube"
              backgroundColor="none"
              iconSize="7"
            ></SocialMediaIconsReact>

            <SocialMediaIconsReact
              icon="instagram"
              backgroundColor="none"
              iconSize="7"
            ></SocialMediaIconsReact>

            <SocialMediaIconsReact
              icon="linkedin"
              backgroundColor="none"
              iconSize="7"
            ></SocialMediaIconsReact>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
