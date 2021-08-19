
import React from "react";
/* 3 ways to create components: const, function, class
/*  this component can be created also  as a function*/
/* then in app.js  when you import you should write this way :
import About  from "./components/Pages/About"; */
/*function About(){
  return(
    <div>
      <h1>About</h1>
    </div>
  )
}
export default About*/
/**********const*******************/
export const About= () => {
  return (
    <div>

      <h1  id="about" className="about-info">About Info</h1>
    </div>
  );
};
