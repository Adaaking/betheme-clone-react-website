import React from "react";
import home2 from '../../../images/web_images/home_coffee2_pic1.jpg'
const Home2 = () => {
  return (
    <div className="home2">
      <div className="home2-left">
        <img className="home2-img" src={home2} />
      </div>
      <div className="home2-right">
        <span className="span">Vivamus in diam</span>
        <span className="span">condimentum</span>
        <span className="span">maximus</span>
        <div className="underline"></div>
        <p className="desc">
            Maecenas non laoreet odio. Fusce labortis
            porttitor purus, vel vestibulum libero pharetra vel.
            pellentesque lorem aungue,fermentum nec nibh
            et,fringilla sallicitudin orci. Integer pharetra
            magna non ante blandit labortis. sed mollis
        </p>
      </div>
    </div>
  );
};

export default Home2;
