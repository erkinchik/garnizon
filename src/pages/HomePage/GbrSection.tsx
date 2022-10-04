import React from "react";

import classes from "./HomePage.module.scss";

const GbrSection = () => {
  return (
    <section className={classes.container}>
      <h2 className={`${classes.newTitle} ${classes.mainGbrTitle}`}>
        СЛУЖБА РЕАГИРОВАНИЯ DELTA ЭТО:
      </h2>
      <div className={classes.mainGbrBlock}>
        <div className={classes.mainGbrBlockImageWrapper}>
          <div
            className={`${classes.mainGbrBlockImage} ${classes.mainGbrBlockImage1}`}
          />
        </div>
        <p className={classes.mainGbrBlockText}>
          6 000+ экипажей <br />
          <br />
          Приедут на тревогу за 5-7 мин <br />
          <br />
          Охранники высшей категории <br />
          <br />
          Владение техниками боя <br />
          <br />
          Разрешение на огнестрельное оружие <br />
          <br />
          Навыки психологического воздействия <br />
          <br />
          Умение оказывать первую помощь <br />
          <br />
          Ежегодно подтверждают квалификацию и <br />
          повышают профориентацию
        </p>
      </div>
      <h2 className={`${classes.newTitle} ${classes.mainGbrTitle}`}>
        РЕАГИРОВАНИЕ РОСГВАРДИЕЙ ЭТО:
      </h2>
      <div className={classes.mainGbrBlock}>
        <div className={classes.mainGbrBlockImageWrapper}>
          <div
            className={`${classes.mainGbrBlockImage} ${classes.mainGbrBlockImage2}`}
          />
        </div>
        <p className={classes.mainGbrBlockText}>
          Государственные гарантии <br />
          <br />
          Преимущества проезда <br />
          по дорогам общего пользования <br />
          <br />
          Федеральная сеть реагирования <br />
          <br />
          Право на арест
        </p>
      </div>
      <h2 className={`${classes.newTitle} ${classes.mainGbrTitle}`}>
        DELTA. КОГДА МГНОВЕНИЕ ИМЕЕТ ЗНАЧЕНИЕ.
      </h2>
      <div className={classes.mainGbrFullImage} />
      <div className={classes.mainGbrInfo}>
        <strong>Поможем разобраться и определиться:</strong> <br />
        <a href="#">Как выбрать охрану?</a>
      </div>
    </section>
  );
};

export default GbrSection;
