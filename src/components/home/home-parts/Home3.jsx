import React from "react";
import { FaAngleRight } from "react-icons/fa";
import coffee from "../../../images/web_images/home_coffee2_pic5.png";
import centerImage from "../../../images/web_images/home_coffee2_pic4.png";
import coffee2 from "../../../images/web_images/home_coffee2_pic6.png";
const Home3 = () => {
  return (
    <div className="home3">
      <div className="home3-left">
        <div className="left-card">
          <img className="left-card-image" src={coffee} />
          <h3>Fusce interdum justo quis liberto ultricies</h3>
          <div className="underline"></div>
          <p className="desc">
            Fusce ut velit laoreet, tempus arcu eu,molestie tortor. Nam vel
            justo cursus,faucibus lorem eget, egestas eros
          </p>
        </div>
      </div>
      <div className="home3-image">
        <img className="centerImage" src={centerImage} />
      </div>
      <div className="home3-right">
        <div className="right-card">
          <div className="right-top">
            <h3>Fusce ut velit</h3>
            <h1>$ 15,99</h1>
            <button className="right-top-btn">
              READ MORE
              <FaAngleRight style={{ color: "coral", textAlign: "center",marginLeft:"1rem",marginTop:".5rem"}} />
            </button>
          </div>
          <img className="right-card-image" src={coffee2} />
        </div>
      </div>
    </div>
  );
};

export default Home3;
