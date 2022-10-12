import React from "react";

import classes from './Services.module.scss';

const ServicesSection = () => {
  return (
    <div>
      <section className={classes.services}>
        {/* <a
          className={`${classes.servicesItem} ${classes.servicesItemSolo}`}
          href="#"
          target="_blank"
        >
          <div className={classes.servicesItemTitle}>G-SOS (мобильная тревожная кнопка)</div>
        </a> */}
        {/* <a
          className={`${classes.servicesItem} ${classes.servicesItemTriple}`}
          href="#"
          target="_blank"
        >
          <div className={classes.servicesItemTitle}>Управление доступом</div>
        </a> */}
        {/* <a
          className={`${classes.servicesItem} ${classes.servicesItemDouble}`}
          href="#"
          target="_blank"
        >
          <div className={classes.servicesItemTitle}>
            Противопожарная система
          </div>
        </a> */}
      </section>
      <section className={classes.services}>
        <a
          className={`${classes.servicesItem} ${classes.servicesItemDouble}`}
          href="#"
          target="_blank"
        >
          <div>
            <div className={classes.servicesItemTitle}>
             Личная охрана
            </div>
          </div>
        </a>
        <a
          className={`${classes.servicesItem} ${classes.servicesItemDouble}`}
          data-form-type="automatization"
          data-target="#leadForm"
          data-toggle="modal"
        >
          <div>
            <div className={classes.servicesItemTitle}>Охрана недвижимости</div>
          </div>
        </a>
      </section>
      <section className={classes.services}>
        <a
          className={`${classes.servicesItem} ${classes.servicesItemSolo}`}
          href="#"
          target="_blank"
        >
          <div>
            <div className={classes.servicesItemTitle}>Физическая охрана</div>
          </div>
        </a>
      </section>
    </div>
  );
};

export default ServicesSection;
