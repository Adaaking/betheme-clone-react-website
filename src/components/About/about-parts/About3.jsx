import React from "react";
import about1 from "../../../images/web_images/home_coffee2_about2.jpg";
const About3 = () => {
  return (
    <div className="about3">
        <div className="about3-image">
          <img className="about3-img" src={about1} />
        </div>
        <div className="about3-text">
          <h1>Nulla mauris dolor gravida a varius blandit</h1>
          <div className="underline"></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            mauris dolor, gravida a varius blandit, auctor eget purus. Phasellus
            scelerisque sapien sit amet mauris laoreet, eget scelerisque nunc
            cursus. Duis ultricies malesuada.
          </p>
        </div>
    </div>
  );
};

export default About3;
