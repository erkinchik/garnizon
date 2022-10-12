import React, { useState } from "react";

import classes from "./Hero.module.scss";

const Hero = () => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [isVisibleGuard, setIsVisibleGuard] = useState(false);
  const [isVisibleSupport, setIsVisibleSupport] = useState(false);

  const openSupportBlock = () => setIsVisibleSupport(true);
  const closeSupportBlock = () => setIsVisibleSupport(false);

  const openGuardBlock = () => setIsVisibleGuard(true);
  const closeGuardBlock = () => setIsVisibleGuard(false);

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
        {isVisibleGuard || isVisibleSupport ? null : (
          <div className={classes.heroAreaTitle} onClick={openGuardBlock}>
            ПОЛУЧИТЬ ЗАЩИТУ
          </div>
        )}
        <div
          className={`${classes.heroAreaContent} ${
            isVisibleGuard && classes.heroAreaContentVisible
          }`}
        >
          <div className={classes.heroAreaContentInner}>
            <button
              className={`${classes.btn}  ${classes.heroAreaLinkVisible} ${classes.addpulseBtn}`}
            >
              Заказать звонок
            </button>
            <div className={classes.heroAreaNav}>
              <a
                className={`${classes.heroAreaLink} ${
                  isVisibleGuard && classes.heroAreaLinkVisible
                }`}
                href="#"
              >
                <div className={classes.heroAreaIcon} />
                Видеонаблюдение
              </a>
              <a
                className={`${classes.heroAreaLink} ${
                  isVisibleGuard && classes.heroAreaLinkVisible
                }`}
                href="#"
              >
                <div className={classes.heroAreaIcon} />
                Защита квартиры
              </a>
              <a
                className={`${classes.heroAreaLink} ${
                  isVisibleGuard && classes.heroAreaLinkVisible
                }`}
                href="#"
              >
                <div className={classes.heroAreaIcon} />
                Защита коттеджа
              </a>
              <a
                className={`${classes.heroAreaLink} ${
                  isVisibleGuard && classes.heroAreaLinkVisible
                }`}
                href="#"
              >
                <div className={classes.heroAreaIcon} />
                Защита бизнеса
              </a>
              <a
                className={`${classes.heroAreaLink} ${
                  isVisibleGuard && classes.heroAreaLinkVisible
                }`}
                href="#"
              >
                <div className={classes.heroAreaIcon} />
                Защита автомобиля
              </a>
              <a
                className={`${classes.heroAreaLink} ${
                  isVisibleGuard && classes.heroAreaLinkVisible
                }`}
                href="#"
              >
                <div className={classes.heroAreaIcon} />
                Пожарная сигнализация
              </a>
              <a
                className={`${classes.heroAreaLink} ${
                  isVisibleGuard && classes.heroAreaLinkVisible
                }`}
                href="#"
              >
                <div className={classes.heroAreaIcon} />
                Физическая охрана
              </a>
              <button
                className={`${classes.heroAreaLink} ${
                  isVisibleGuard && classes.heroAreaLinkVisible
                }`}
                onClick={closeGuardBlock}
              >
                <div className={classes.heroAreaIcon} />
                Назад
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={`${classes.heroArea} ${classes.heroAreaSupport}`}>
        {isVisibleSupport || isVisibleGuard ? null : (
          <div
            onClick={openSupportBlock}
            className={`${classes.heroAreaTitle} ${
              isMouseOver ? classes.addpulse : ""
            }`}
          >
            ПОДДЕРЖКА КЛИЕНТОВ
          </div>
        )}
        <div
          className={`${classes.heroAreaContent} ${
            isVisibleSupport && classes.heroAreaContentVisible
          }`}
        >
          <div className={classes.heroAreaContentInner}>
            <div className={classes.heroAreaNav}>
              <a
                className={`${classes.heroAreaLink} ${
                  isVisibleSupport && classes.heroAreaLinkVisible
                }`}
                href="#"
              >
                <div className={classes.heroAreaIcon} />
                Личный кабинет
              </a>
              <a
                className={`${classes.heroAreaLink} ${
                  isVisibleSupport && classes.heroAreaLinkVisible
                }`}
              >
                <div className={classes.heroAreaIcon} />
                Пополнить баланс
              </a>
              <a
                className={`${classes.heroAreaLink} ${
                  isVisibleSupport && classes.heroAreaLinkVisible
                }`}
                href="#"
              >
                <div className={classes.heroAreaIcon} />
                Скачать приложение
              </a>
              <a
                className={`${classes.heroAreaLink} ${
                  isVisibleSupport && classes.heroAreaLinkVisible
                }`}
                href="#"
              >
                <div className={classes.heroAreaIcon} />
                Помощь
              </a>
              <a
                className={`${classes.heroAreaLink} ${
                  isVisibleSupport && classes.heroAreaLinkVisible
                }`}
                href="#"
              >
                <div className={classes.heroAreaIcon} />
                Акции для клиентов
              </a>
              <button
                className={`${classes.heroAreaLink} ${
                  isVisibleSupport && classes.heroAreaLinkVisible
                }`}
                onClick={closeSupportBlock}
                data-img="/static/public-v2/images/redesign/backgrounds/rightMenu/back_noBG.c93c654c3c00.png"
                data-text="Свернуть меню"
              >
                <div className={classes.heroAreaIcon} />
                Назад
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.heroSlidesWrap}>
        <div className={classes.heroAreaText} />
        <div
          className={`${classes.heroSlideEvent} ${
            isVisibleGuard || isVisibleSupport
              ? classes.heroSlideEventHidden
              : ""
          }`}
          data-target="#popup-new-app"
          data-toggle="modal"
        />
        <div
          className={`${classes.heroSlidesOverlay} ${
            isVisibleSupport || isVisibleGuard
              ? classes.heroSlidesOverlayVisible
              : ""
          }`}
        />
      </div>
      <div
        className={`${classes.heroOverlay} ${
          isVisibleGuard && classes.heroOverlayVisibleProds
        } ${
          isVisibleSupport || isVisibleGuard ? classes.heroOverlayVisible : ""
        }`}
      />
    </div>
  );
};

export default Hero;
