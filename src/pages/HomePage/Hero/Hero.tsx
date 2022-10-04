import React, { useState } from "react";

import classes from "./Hero.module.scss";

const Hero = () => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  return (
    <div className={classes.hero}>
      <div className={classes.heroMobile}>
        <div className={`${classes.heroMobileBlock}`}>
          <div
            className={`${classes.heroMobilePerson} ${classes.heroMobilePersonProducts}`}
          />
          <div className={classes.heroMobileTitle}>
            ПОЛУЧИТЬ <br />
            <span>ЗАЩИТУ</span>
          </div>
        </div>
        <div className={`${classes.heroMobileBlock}`}>
          <div
            className={`${classes.heroMobilePerson} ${classes.heroMobilePersonSupport}`}
          />
          <div className={classes.heroMobileTitle}>
            <span>ПОДДЕРЖКА</span> <br />
            КЛИЕНТОВ
          </div>
        </div>
      </div>
      <div className={`${classes.heroArea} ${classes.heroAreaProducts}`}>
        <div className={classes.heroAreaTitle}>ПОЛУЧИТЬ ЗАЩИТУ</div>
      </div>
      <div className={`${classes.heroArea} ${classes.heroAreaSupport}`}>
        <div
          className={`${classes.heroAreaTitle} ${
            isMouseOver ? classes.addpulse : ""
          }`}
        >
          ПОДДЕРЖКА КЛИЕНТОВ
        </div>
      </div>
      <div className={classes.heroSlidesWrap}>
        <div className={classes.heroAreaText} />
        <div
          className={classes.heroSlideEvent}
          data-target="#popup-new-app"
          data-toggle="modal"
        />
        <div className={classes.heroSlidesOverlay} />
      </div>
      <div className={classes.heroOverlay} />
    </div>
  );
};

export default Hero;
