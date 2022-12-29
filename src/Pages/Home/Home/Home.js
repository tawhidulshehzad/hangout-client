import React from "react";
import useTitle from "../../../hooks/useTitle";
import About from "../About/About";
import Banner from "../Banner/Banner";
import ProgressOfRes from "../ProgressOfRes/ProgressOfRes";
import Services from "../Services/Services";

const Home = () => {
  useTitle("Cloud Food");
  return (
    <div >
      <Banner></Banner>
      <Services></Services>
      <About></About>
      <ProgressOfRes></ProgressOfRes>
    </div>
  );
};

export default Home;
