import React from "react";
import { FaFacebook, FaLinkedin,FaPinterest, FaTwitter } from "react-icons/fa";
import { FiMap } from "react-icons/fi";

const Map = () => {
  return (
    <div className="contact">
      <div className="map-left">
        <div className="map-icon">
          <FiMap/>
        </div>
        <div className="center-text">
          <h3>
            BeCoffee Level 13, 2 Elizabeth St, Melbourne, Victoria 3000,
            Australia
          </h3>
          <p>
            E-mail: <span className="sp">addisumotora3@gmail.com</span>
          </p>
          <p>
            Phone: <span className="sp"> +251961439185</span>
          </p>
        </div>
        <div className="myprofile">
          <h1>My profiles</h1>
          <div className="media-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter/></a>
            <a href="#"><FaPinterest/></a>
            <a href="#"><FaLinkedin/></a>
          </div>
        </div>
      </div>
      <iframe
        className="map"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=Hawassa%20ethiopia&t=&z=13&ie=UTF8&iwloc=&output=embed"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
      ></iframe>
    </div>
  );
};

export default Map;
