import React from "react";
import me from "../../public/images/me.png";

export default () => (
  <div className="content-container">
    <div className="me">
        <img alt="Picture of me and my family" className="me-picture show-for-larger" src={me} />
      <div className="me-info">
        <img alt="Picture of me and my family" className="me-picture show-for-mobile me-picture-small" src={me} />
        My name is Ryan Rickert and I am a React web developer with a bit of NodeJS experience.  
        I received my bachelor's degree in Chemistry from the University of Houston Downtown in 2015.  A few months later my first son was born 
        and soon after I found a lab tech position.  After about a year, the demanding schedule of 12 hour day/night shifts while working mostly weekends 
        began to take its toll on my sanity and family time so I started to teach myself how to code in my free time.  
        I have spent around a year self-teaching with sites like Khan Academy, CodeAcademy, FreeCodeCamp, Coursera and some other personal projects.  
        At the beginning of March 2018 I felt the need to accelerate my learning so I quit my job and purchased two Udemy courses, one for NodeJS and one for ReactJS.  
        Now that I have finished both courses I am focusing on ReactJS.
      </div>
    </div>
  </div>
);