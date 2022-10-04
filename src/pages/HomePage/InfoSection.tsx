import React from 'react';

import classes from './HomePage.module.scss'

const InfoSection = () => {
    return (
        <section className={classes.mainText}>
            <p className={classes.mainTextContent}>
                GARNIZON – федеральный провайдер услуг безопасности, создавший полноценную
                экосистему решений для защиты объектов бизнеса, частной недвижимости и
                транспортных средств.
            </p>
        </section>
    );
};

export default InfoSection;