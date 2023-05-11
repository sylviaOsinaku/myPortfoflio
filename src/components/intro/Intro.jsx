import React from "react";
import classes from "./Intro.module.css";
import IconGithub from "../../UI/Github";
import IconLinkedinCircled from "../../UI/LinkIned";
import IconInstagram from "../../UI/Instagram";
import IconTwitterCircled from "../../UI/Twitter";
function Intro() {
  return (
    <div className={classes["intro-wrapper"]}>
      <h3>Hi, my name is</h3>
      <h1>Ugonna Sylvia.</h1>
      <h2>I build things for the web</h2>
      <p>
        I’m a Frontend developer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I’m focused on{" "}
        building accessible, human-centered products.
      </p>
      <div className={classes["social-wrapper"]}>
        <a
          href="https://github.com/sylviaOsinaku"
          target="_blank"
          rel="noreferrer"
        >
          <IconGithub className={classes["icon"]} />
        </a>
        <a
          href="https://www.linkedin.com/in/ugonna-osinaku-ab5926242"
          rel="noreferrer"
        >
          <IconLinkedinCircled />
        </a>
        <a
          href="https://github.com/sylviaOsinaku"
          target="_blank"
          rel="noreferrer"
        >
          <IconInstagram />
        </a>
        <a
          href="https://twitter.com/SylviaOsinaku?t=NBSUDWKDpYTpUatWQlhzAA&s=09"
          target="_blank"
          rel="noreferrer"
        >
          <IconTwitterCircled />
        </a>
      </div>
    </div>
  );
}

export default Intro;
