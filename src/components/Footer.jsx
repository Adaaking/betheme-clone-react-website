import React from "react";
import { FaAngleUp } from "react-icons/fa";
import { footer } from "../data";
const Footer = () => {
  return (
    <div className="footer">
      <div className="info">
        {footer.map((element, indx) => {
          const { icon, title, info } = element;

          return (
            <div className="my-info" key={indx}>
              <h1 className="icon" style={{ color: "rgb(250, 129, 37)" }}>
                {icon}
              </h1>
              <h3 className="title" style={{ margin: "1rem 0" }}>
                {title}
              </h3>
              <p className="footer-desc">{info}</p>
            </div>
          );
        })}
      </div>
      <div className="powered_by">
        <div className="hr"></div>
        <div className="footer-bottom">
          <p>
            @ 2022 Betheme-clone by <span className="name">Addisu Motora</span>{" "}
            | All Rights Reserved | Powered by{" "}
            <span className="name">React js</span>
          </p>
          <span className="spn">
            <FaAngleUp />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
