import React from "react";
import Banner from "../components/Banner";
import WhoAreWe from "../components/WhoAreWe";
import OurWork from "../components/OurWork";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Banner />
      <WhoAreWe />
      <OurWork />
    </div>
  );
};

export default Home;
