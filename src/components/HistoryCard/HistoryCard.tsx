import React from "react";
import classes from "./HistoryCard.module.scss";
import { Card, Rate } from "antd";

const signals = {
  0: "PENDING",
  1: "ACTIVE",
  2: "DELETED",
  3: "BANNED",
  5: "COMPLETED",
};

const HistoryCard = () => {
  return (
    <Card className={classes.historyCard}>
      <div className={classes.historyCardInner}>
        <div className={classes.info}>
          <h3>
            {`Сигнал от Jhon Jhon. Статус `}
            <span style={{ color: signals[1] === "DELETED" ? "red" : "green" }}>
              {signals[5]}
            </span>
            <br />
            <br />
            <span>{`Принял вызов -  James Jemson `}</span>
          </h3>
        </div>

        <div>
          <p
            style={{ marginTop: "10px" }}
          >{`Дата и время -  ${new Date().toLocaleString()}`}</p>
          <Rate disabled={true} count={5} value={4} />
        </div>
      </div>
    </Card>
  );
};

export default HistoryCard;
