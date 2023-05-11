// icon:linkedin-circled | Entypo http://entypo.com/ | Daniel Bruce
import * as React from "react";
import classes from "./ui.module.css";
function IconLinkedinCircled(props) {
  return (
    <svg
      viewBox="0 0 960 1000"
      fill="currentColor"
      height="2em"
      width="2em"
      {...props}
      className={classes["icon"]}
    >
      <path d="M480 20c133.333 0 246.667 46.667 340 140s140 206.667 140 340c0 132-46.667 245-140 339S613.333 980 480 980c-132 0-245-47-339-141S0 632 0 500c0-133.333 47-246.667 141-340S348 20 480 20M362 698V386h-96v312h96m-48-352c34.667 0 52-16 52-48s-17.333-48-52-48c-14.667 0-27 4.667-37 14s-15 20.667-15 34c0 32 17.333 48 52 48m404 352V514c0-44-10.333-77.667-31-101s-47.667-35-81-35c-44 0-76 16.667-96 50h-2l-6-42h-84c1.333 18.667 2 52 2 100v212h98V518c0-12 1.333-20 4-24 8-25.333 24.667-38 50-38 32 0 48 22.667 48 68v174h98" />
    </svg>
  );
}

export default IconLinkedinCircled;
