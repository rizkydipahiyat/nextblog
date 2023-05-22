import React from "react";
import classes from "./footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2>About the App</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
            beatae veritatis commodi eos non sequi accusantium illum rem et
            nostrum.
          </p>
        </div>
        <div className={classes.col}>
          <h2>Contact</h2>
          <span>Phone +62 824 2938 9988</span>
          <span>Youtube: WebDev Daily</span>
          <span>Github: github/rizkydipahiyat</span>
        </div>
        <div className={classes.col}>
          <h2>Location</h2>
          <span>Continent: Asia</span>
          <span>Country: Japan</span>
          <span>Current Location: Japan</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
