import React from "react";
import "./index.css";
import line from "../../assets/line.svg"

const About = () => {
  return (
    <div className="about">
        <div className="year">
        <h2>2019</h2>
        <h2>2019</h2>
        <h2>2019</h2>
        <h2>2019</h2>
      </div>
<img src={line} style={{marginBottom:"50px", width:"64rem", marginLeft:'10px'}} />
      <div className="timeline">

      
        <hr />

        <div className="timeline-year">
            
          
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="timeline-year">
          
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="timeline-year">
          
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="timeline-year">
          
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default About;
