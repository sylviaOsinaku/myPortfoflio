import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import classes from "./NavBar.module.css";
import { motion } from "framer-motion";
import IconLetterU from "../../UI/myName";
import IconHamburger from "../../UI/Menu";
import IconClose from "../../UI/Close";

const NavBar = () => {
  const [showNav, setShowNav] = useState(null);
  function refreshPage() {
    window.location.reload(false);
  }

  const showMobileNav = () => {
    setShowNav((prev) => !prev);
  };
  useEffect(() => {
    document.querySelector("body").style.overflow = !showNav
      ? "visible"
      : "hidden";
    document.querySelector("main").style.filter = showNav
      ? " blur(4px) brightness(1)"
      : " blur(0px) brightness(1)";
  }, [showNav]);
  return (
    <nav className={classes["container"]}>
      <div className={classes["nav-wrapper"]}>
        <div>
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={classes["logo"]}
            onClick={refreshPage}
          >
            <IconLetterU />
          </Link>
        </div>
        <div>
          <IconHamburger
            className={classes["menu-icon"]}
            onClick={showMobileNav}
          />
        </div>
        <motion.div
          className={
            showNav
              ? classes["right-section-wrapper-mobile"]
              : classes["right-section-wrapper-desktop"]
          }
          initial={!showNav ? { y: -250 } : { opacity: 0 }}
          animate={!showNav ? { y: 0 } : { opacity: 1 }}
          transition={{
            delay: 1,
            duration: 1,
            type: "spring",
            stiffness: 120,
            ease: "easeInOut",
          }}
        >
          <div>
            <IconClose
              className={classes["close-icon"]}
              onClick={showMobileNav}
            />
          </div>

          <Link
            activeClass="active"
            to="about_me"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={showNav && showMobileNav}
          >
            About
          </Link>

          <Link
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={showNav && showMobileNav}
          >
            Portfolio
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={showNav && showMobileNav}
          >
            Contact
          </Link>
          <a
            className={classes["resume"]}
            href="https://drive.google.com/file/d/1KNsqnmbUJBJ_Fo9_ZaCsvY4gxp8unNDZ/view"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </motion.div>
      </div>
      {showNav && (
        <div
          className={classes["content-overlay"]}
          onClick={showMobileNav}
        ></div>
      )}
    </nav>
  );
};

export default NavBar;
