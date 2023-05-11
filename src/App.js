import "./App.css";
import React from "react";

import NavBar from "./components/Navigation/NavBar";
import Intro from "./components/intro/Intro";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Project from "./components/OtherProjects/Projects";
import Contacts from "./components/Contacts/Contacts";
import { motion } from "framer-motion";

// {
//   "image": "./assets/Dictionary-Api.png",
//   "title": "Bmi(Age) Calculator",
//   "description": "A react application that enables user to check their bmi based on user input,calculate their age and get health tips corresponding to the users BMI ",
//   "live_link": "https://sylviadictionary.netlify.app",
//   "github_link": "https://github.com/sylviaOsinaku/dictionary-api",
//   "stacks_used": ["Html", "Css", "Javascript", "React"]
// }
const containerVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      delay: 1.5,
      duration: 1.5,
      opacity: { ease: "linear" },
    },
  },
};
function App() {
  return (
    <>
      <NavBar />

      <motion.main
        className="container"
        variants={containerVariant}
        initial="hidden"
        animate="visible"
      >
        <Intro />
        <About />
        <Portfolio />
        <Project />
        <Contacts />
      </motion.main>
    </>
  );
}

export default App;
