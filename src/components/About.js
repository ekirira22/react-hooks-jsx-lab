import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui quos hic ratione vitae at praesentium sunt quas laboriosam, commodi est repellat quae, eaque iusto eveniet repellendus ea dicta tempore exercitationem?</p>
      <img src={image} alt="I made this"></img>
    </div>
  )
}

export default About;
