import React from "react";
import classes from "./Portfolio.module.css";
import imge1 from "../../assets/rest-country.jpg";
import IconGithub from "../../UI/Github";
import myPortfolio from "../../portfolio.json";
import IconShareBoxLine from "../../UI/LiveShare";
function Portfolio() {
  return (
    <div className={classes["portfolio-container"]} id="portfolio">
      <h2>Portfolio</h2>

      {myPortfolio.map((portfolio) => {
        return (
          <div className={classes["portfolio-wrapper"]} key={portfolio.title}>
            <div
              style={{ backgroundImage: `url(${portfolio.image})` }}
              className={classes["image-wrapper"]}
            >
              <div className={classes["overlay"]}></div>
            </div>

            <div className={classes["content-wrapper"]}>
              <h4>Featured Project</h4>
              <h3>{portfolio.title}</h3>
              <div className={classes["portfolio-description-wrapper"]}>
                <div className={classes["portfolio-description"]}>
                  {portfolio.description}
                </div>
                <div className={classes["stacks-wrapper"]}>
                  {portfolio.stacks_used.map((stack, i) => (
                    <span key={i}>{`${(i ? "," : "") + stack}`}</span>
                  ))}
                </div>
                <div>
                  <a
                    href={`${portfolio.github_link}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <IconGithub />
                  </a>
                  <a
                    href={`${portfolio.live_link}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <IconShareBoxLine />
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Portfolio;
