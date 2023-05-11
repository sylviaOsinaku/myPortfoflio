import IconGithub from "../../UI/Github";
import IconShareBoxLine from "../../UI/LiveShare";
import classes from "./Project.module.css";
import projectsData from "../../Project.json";
function Project() {
  return (
    <div className={classes["project-container"]}>
      <h2>Other Noteworthy Projects</h2>

      <div className={classes["project-wrapper"]}>
        {projectsData.map((project, i) => {
          return (
            <div>
              <div className={classes["icon-wrapper"]}>
                <a
                  href={`${project.github_link}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconGithub />
                </a>
                <a
                  href={`${project.live_link}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconShareBoxLine />
                </a>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={classes['stacks-wrapper']}>
                {project.stacks_used.map((stack, i) => (
                  <span>{stack}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Project;
