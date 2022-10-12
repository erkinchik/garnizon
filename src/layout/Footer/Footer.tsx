import React from "react";

import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerWrapper}>
        <div className={classes.topBlockWrapper}>
          <div className={classes.linkContainer}>
            <div className={classes.contactsBlock}>
              <div className={classes.phoneEmail}>
                <span className={classes.callPhone1}>
                  <a href="+996 (703) 701000">+996 (703) 701000</a>
                </span>
              </div>
              <div className={classes.socialLinks}>
                <a
                  className={`${classes.link} ${classes.social} ${classes.whatsApp}`}
                  href="https://wa.me/79260017544"
                  target="_blank"
                />
                <a
                  className={`${classes.link} ${classes.social} ${classes.telegram}`}
                  href="https://t.me/+79260017544"
                  target="_blank"
                />
                <a
                  className={`${classes.link} ${classes.social} ${classes.instagram}`}
                  href="https://t.me/+79260017544"
                  target="_blank"
                />
              </div>
              <div className={classes.appLinks}>
                <a
                  className={`${classes.link} ${classes.apple}`}
                  data-ga-category="btn_ios"
                  data-ga-type="footer"
                  href="#"
                  rel="nofollow"
                  target="_blank"
                />
                <a
                  className={`${classes.link} ${classes.google}`}
                  data-ga-category="btn_android"
                  data-ga-type="footer"
                  href="#"
                  rel="nofollow"
                  target="_blank"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={classes.bottomBlockWrapper}>
          <div className={classes.textContainer}>
            <div className={classes.text}>© 2022 Гарнизон</div>
            <div className={classes.text}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Architecto dolorem facilis nesciunt numquam praesentium. Animi
              consectetur eaque, explicabo harum illo laudantium libero,
              necessitatibus, nisi omnis quas quisquam saepe sequi vel veniam
              voluptates. Adipisci aliquam aspernatur assumenda atque doloremque
              doloribus ea earum eligendi facere fugit iure maxime molestias
              nemo nulla qui, quibusdam quidem repudiandae similique, tempora
              tempore temporibus unde voluptate voluptatibus.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
