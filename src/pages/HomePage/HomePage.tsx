import React from "react";

import classes from "./HomePage.module.scss";

import InfoSection from "./InfoSection/InfoSection";
import ServicesSection from "./ServicesSection/ServicesSection";
import Hero from "./Hero/Hero";
import MainWorkSection from "./MainWorkSection/MainWorkSection";
import GbrSection from "./GbrSection/GbrSection";
import FeedFormSection from "./FeedFormSection/FeedFormSection";
import PlansSection from "./PlansSection/PlansSection";

const HomePage = () => {
  return (
    <div className={classes.home}>
      <Hero />
      <InfoSection />
      <ServicesSection />
      <PlansSection />
      <MainWorkSection />
      <GbrSection />
      <FeedFormSection />
    </div>
  );
};

export default HomePage;
