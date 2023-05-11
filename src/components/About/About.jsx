import React from "react";
import classes from "./About.module.css";
import myImage from "../../assets/my-image.jpg";

function About() {
  const mySkills = [
    "Html",
    "CSS",
    "Bootstrap",
    "Javascript",
    "React",
    "Git",
    "FireBase",
    "GitHub",
    "Responive Design",
    "Web accessbility",
    "NodeJs",
  ];

  return (
    <div className={classes["about-container"]} id="about_me">
      <h2>About Me</h2>

      <div className={classes["about-wrapper"]}>
        <div>
          <p>
            Hello! My name is Sylvia, I love seeing
            <span> functional and easygoing</span>
            <br />
            website with great user experience. I remember the first time <br />
            i created a html page that links one to youtube in the browser.
            <br /> A whole new world of possibilities appeared before my eyes
          </p>
          <p>
            <span> Frontend development satisfies my need for creativity.</span>
          </p>
          <p>
            I believe i have the quality of putting great attention to details.
            <br /> I love all the{" "}
            <span>little technical and aesthetics problems,</span>
            how it all <br />
            comes together bit by bit
          </p>
          <div>
            <h3>Skills and tools</h3>
            <div className={classes["skills-wrapper"]}>
              {mySkills.map((skill, i) => (
                <span key={i}>{skill}</span>
              ))}
            </div>
          </div>
        </div>
        <div className={classes["image-wrapper"]}>
          <img src={myImage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
