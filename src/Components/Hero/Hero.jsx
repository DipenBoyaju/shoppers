import "./Hero.css";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>New Arrivals Only</h2>
        <div className="">
          <div className="hero-hand-icon">
            <p>New</p>
          </div>
          <p>Collections</p>
          <p>For Everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div className="">Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
