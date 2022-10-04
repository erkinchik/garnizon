import React from "react";

import classes from "./PlansSection.module.scss";

const PlansSection = () => {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div className={classes.column}>
          <div className={`${classes.pricingCard} ${classes.basic}`}>
            <div className={classes.pricingHeader}>
              <span className={classes.planTitle}>Стандартный</span>
              <div className={classes.priceCircle}>
                <span className={classes.priceTitle}>
                  <span>
                    <small>500сом</small>
                  </span>
                </span>
                {/*<span className={classes.info}>/ Month</span>*/}
              </div>
            </div>
            {/*<div className={classes.badgeBox}>*/}
            {/*  <span>Save 35%</span>*/}
            {/*</div>*/}
            <ul>
              <li>
                <strong>1</strong> Вызов
              </li>
            </ul>
            <div className={classes.buyButtonBox}>
              <a href="#" className={classes.buyNow}>
                Купить
              </a>
            </div>
          </div>
        </div>
        <div className={classes.column}>
          <div className={`${classes.pricingCard} ${classes.eco}`}>
            <div className={classes.pricingHeader}>
              <span className={classes.planTitle}>Семейный (1+3)</span>
              <div className={classes.priceCircle}>
                <span className={classes.priceTitle}>
                  <span>
                    <small>1600 сом</small>
                  </span>
                </span>
                {/*<span className={classes.info}>/ Month</span>*/}
              </div>
            </div>
            {/*<div className={classes.badgeBox}>*/}
            {/*  <span>Save 15%</span>*/}
            {/*</div>*/}
            <ul>
              <li>
                До <strong>5</strong> Вызовов
              </li>
            </ul>
            <div className={classes.buyButtonBox}>
              <a href="#" className={classes.buyNow}>
                Купить
              </a>
            </div>
          </div>
        </div>
        <div className={classes.column}>
          <div className={`${classes.pricingCard} ${classes.pro}`}>
            <div className={classes.popular}>популярный</div>
            <div className={classes.pricingHeader}>
              <span className={classes.planTitle}>VIP(1+3)</span>
              <div className={classes.priceCircle}>
                <span className={classes.priceTitle}>
                  <span>
                    <small>3000 сом</small>
                  </span>
                </span>
                {/*<span className={classes.info}>/ Month</span>*/}
              </div>
            </div>
            {/*<div className={classes.badgeBox}>*/}
            {/*  <span>Save 8%</span>*/}
            {/*</div>*/}
            <ul>
              <li>
                <strong>Без ограничений</strong>
              </li>
            </ul>
            <div className={classes.buyButtonBox}>
              <a href="#" className={classes.buyNow}>
                Купить
              </a>
            </div>
          </div>
        </div>
        <div className={classes.column}>
          <div className={`${classes.pricingCard} ${classes.business}`}>
            <div className={classes.pricingHeader}>
              <span className={classes.planTitle}>
                Коммерческий (Индивидуальный)
              </span>
              {/*<div className={classes.priceCircle}>*/}
              {/*  <span className={classes.priceTitle}>*/}
              {/*    <span>по договору</span>*/}
              {/*  </span>*/}
              {/*  /!*<span className={classes.info}>/ Month</span>*!/*/}
              {/*</div>*/}
            </div>
            {/*<div className={classes.badgeBox}>*/}
            {/*  <span>Save 5%</span>*/}
            {/*</div>*/}
            <ul>
              <li>
                <strong>Согласно договору</strong>
              </li>
            </ul>
            <div className={classes.buyButtonBox}>
              <a href="#" className={classes.buyNow}>
                Купить
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
