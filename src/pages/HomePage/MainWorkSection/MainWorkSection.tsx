import React from "react";

import classes from "./MainWorkSection.module.scss";
const MainWorkSection = () => {
  return (
    <section className={`${classes.container} ${classes.howWork}`}>
      <p className={classes.howWorkText}>
        На протяжении … лет обеспечиваем безопасность частных лиц и
        разнообразных объектов в Кыргызстане. <br />
        <br />
        Все сотрудники компании — профессионалы, бывшие военные, прошедшие
        спецподготовку и готовы вступить в бой в любую секунду. «Гарнизон»
        предлагает комплексное решение организации личной безопасности, охраны
        объектов, сопровождения грузов, ценных вещей и пр. Нам доверяют самое
        ценное, потому что мы ПРОФЕССИОНАЛЫ! Позаботьтесь о БЕЗОПАСНОСТИ своего
        жилья, бизнеса, детей уже сегодня! Широкий спектр оказываемых услуг.
      </p>
      <div className={classes.howWorkImage} />
      {/*<h2 className={`${classes.newTitle} ${classes.howWorkTitle}`}>*/}
      {/*  ОСНОВНЫЕ ПРИНЦИПЫ СОВРЕМЕННОЙ ЭКОСИСТЕМЫ БЕЗОПАСНОСТИ*/}
      {/*</h2>*/}
      {/*<p className={classes.howWorkText}>*/}
      {/*  Все процессы, отвечающие за обеспечение мониторинга и реагирования,*/}
      {/*  автоматизированы и соединены в единую бесшовную инфраструктуру. Для*/}
      {/*  пользователя это значит только то, что человек не вмешивается в алгоритм*/}
      {/*  обеспечения безопасности и выполняет администрирующую функцию.*/}
      {/*  <br />*/}
      {/*  <br />*/}
      {/*  Система по средствам защищенной инфраструктуры самостоятельно и*/}
      {/*  автономно обменивается сигналами между объектами, станциями мониторинга*/}
      {/*  и экипажами реагирования. <br />*/}
      {/*  <br />*/}
      {/*  Также в автоматическом режиме происходит расстановка и назначение*/}
      {/*  экипажа в случае тревоги и расчет оптимального маршрута прибытия к*/}
      {/*  объекту. То, что недавно казалось фантастикой, уже реализовано*/}
      {/*  экспертами DELTA.*/}
      {/*</p>*/}
    </section>
  );
};

export default MainWorkSection;
