import React from "react";

import InfoSection from "./InfoSection";
import Services from "./Services";
import Hero from "./Hero/Hero";
import MainWorkSection from "./MainWork.Section";
import GbrSection from "./GbrSection";
import FeedFormSection from "./FeedFormSection";
import PlansSection from "./PlansSection/PlansSection";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <InfoSection />
      <Services />
      <PlansSection />
      <MainWorkSection />
      <GbrSection />
      <FeedFormSection />
    </div>
  );
};

export default HomePage;
