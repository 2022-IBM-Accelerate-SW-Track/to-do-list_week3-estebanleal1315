import React, { Component } from "react";
import "./About.css";
import mePic from "../assets/mePic.JPG";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="mePic"
              src={mePic}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Esteban Leal</div>
            <div className="brief_description">
            I am Esteban Leal, a 22 year old college student majoring in Computer Science at 
              the University of Texas at San Antonio. I am also currently a part time employee at Best Buy,
              working as a Product Flow Specialist and occationally as Sales Associate.
              When I am not busy at work or studying, you can usually see me out fishing, kayaking, or 
              doing both since I have alwys been in to fishing ever since I was 2 years old.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
