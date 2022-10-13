import React from "react";

import classes from "./PlansSection.module.scss";

import { Button, Divider, notification, Space } from "antd";
import type { NotificationPlacement } from "antd/es/notification";
import { getNoun } from "../../../utils/getNoun";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { token } from "../../../utils";

const plans = [
  { title: "Стандартный", price: 500, callsQuantity: 1 },
  { title: "Семейный (1+3)", price: 1600, callsQuantity: 5 },
  {
    title: "VIP(1+3)",
    price: 3000,
    callsQuantity: "Без ограничений",
    isPopular: true,
  },
  {
    title: " Коммерческий (Индивидуальный)",
    price: "По договору",
    callsQuantity: "По договору",
  },
];

const PlansSection = () => {
  const { isAuth } = useAppSelector((s) => s.auth);

  const openNotification = () => {
    notification.error({
      message: `Вы не Авторизованы!`,
      description: "Для покупки подписки авторизуйтесь",
      placement: "topLeft",
    });
  };
  const openModal = () => {
    notification.error({
      message: `12122112`,
      description: "21122112",
      placement: "topLeft",
    });
  };

  return (
    <section className={classes.section}>
      <div className={classes.container}>
        {plans.map((plan) => {
          return (
            <div className={classes.column}>
              <div className={`${classes.pricingCard} ${classes.basic}`}>
                {plan.isPopular && <div className={classes.popular}>популярный</div>}
                <div className={classes.pricingHeader}>
                  <span className={classes.planTitle}>{plan.title}</span>
                  {typeof plan.price !== "string" && (
                    <div className={classes.priceCircle}>
                      <span className={classes.priceTitle}>
                        <span>
                          <small>{plan.price}сом</small>
                        </span>
                      </span>
                    </div>
                  )}
                </div>
                {/*<div className={classes.badgeBox}>*/}
                {/*  <span>Save 35%</span>*/}
                {/*</div>*/}
                <ul>
                  <li>
                    <strong>{plan.callsQuantity}</strong> &nbsp;
                    {typeof plan.callsQuantity == "number" &&
                      getNoun(
                        plan.callsQuantity,
                        "Вызов",
                        "Вызовов",
                        "Вызовов"
                      )}
                  </li>
                </ul>
                <div
                  className={classes.buyButtonBox}
                  onClick={isAuth ? openModal : openNotification}
                >
                  <button className={classes.buyNow}>Купить</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PlansSection;
