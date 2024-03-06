import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import UnlockCapabilities from "../../components/UnlockCapabilities/UnlockCapabilities";
import AboutUs from "../../components/AboutUs/AboutUs";
import ReferAndEarn from "../../components/ReferAndEarn/ReferAndEarn";
import PreRegister from "../../components/PreRegister/PreRegister";
import ProtectingYourPeaceOfMind from "../../components/ProtectingYourPeaceOfMind/ProtectingYourPeaceOfMind";
import GetExclusiveRewards from "../../components/GetExclusiveRewards/GetExclusiveRewards";
import Services from "../../components/Services/Services";
import classes from "./Home.module.css";
import VirtualCards from "../../components/VirtualCards/VirtualCards";

const Home = () => {
  return (
    <div>
      <HeroSection />

      <UnlockCapabilities />
      <AboutUs />
      <div className={classes.referAndRegister}>
        <ReferAndEarn />
        <PreRegister />
      </div>
      <VirtualCards />
      <ProtectingYourPeaceOfMind />
      <GetExclusiveRewards />
      <Services />
    </div>
  );
};

export default Home;
