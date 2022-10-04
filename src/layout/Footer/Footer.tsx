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
                  <a href="tel:+74957774147">+7 (495) 777-41-47</a>
                </span>
                <button
                  className="btn btn-primary btn-rounded footer__button uni-form-trigger mr-4"
                  data-target="#modal-write-us"
                  data-toggle="modal"
                >
                  Написать нам
                </button>
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
            <div className={classes.text}>© 2022 Дельта</div>
            <div className={classes.text}>
              Применяемые на данном интернет-сайте названия: Компания Дельта,
              Дельта, Федеральная компания Дельта — это предприятия, работающие
              под брендом и оказывающие услуги по организации охраны
              недвижимости, имущества, транспортных средств, и имеющие все
              необходимые лицензии и разрешения. Данный интернет-сайт носит
              исключительно справочно-информационный, аналитический, обзорный
              характер и ни при каких условиях не является публичной офертой,
              определяемой положениями Статьи 437 Гражданского кодекса РФ, и не
              имеет в качестве основной цели продвижение услуг на рынке.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
