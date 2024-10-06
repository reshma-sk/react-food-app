import React,{useState} from "react";
import "../styles/About.css";
import { BURGER_IMG } from "../utils/constants";

const About = () => {
   const [showProfile, setShowProfile] = useState(false);
  return (
      <div className="about-container">
        <div className="show-profile">
          {
            <button className="user-btn" onClick={()=>setShowProfile(!showProfile)}>
              {showProfile ? "Hide my profile" : "Show my profile"}
            </button>
          }
        </div>

        <div className="about">
        <div className="about-left">
          <h1>
            Welcome to  The world of <br />{" "}
            <span>Spoons & Forks</span>
          </h1>
          <h4>
            "Better you will feel if you eat a <span>Spoons & Forks</span> healthy
            meal"
          </h4>
        </div>
        <div className="about-right">
          <img src={BURGER_IMG} alt="Food Image" />
        </div>
      </div>
    </div>    
  );
};

export default About;