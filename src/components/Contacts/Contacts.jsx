import React from "react";
import { motion } from "framer-motion";
import classes from "./Contacts.module.css";
import IconScroll from "../../UI/Scroll";
import { Link, animateScroll as scroll } from "react-scroll";
function Contacts() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div className={classes["contacts-container"]} id="contact">
      <p className={classes["whats-next"]}>Whats Next?</p>
      <h2>Get in touch</h2>
      <p>
        I'm available for any freelance work, feel free to reach out and say
        hello! I promise I don't bite 😉
      </p>
      <motion.a
        href="mailto:osinakusylvia@gmail.com?subject=my email address"
        whileHover={{
          scale: 1.3,
          textShadow: "0px 0px 20px rgb(221, 195, 239)",
        }}
      >
        Say Hello
      </motion.a>

      <IconScroll className={classes["scroll-wrapper"]} onClick={scrollToTop} />
    </div>
  );
}

export default Contacts;
