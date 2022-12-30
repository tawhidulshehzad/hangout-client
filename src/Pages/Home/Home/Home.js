import React from "react";

import About from "../About/About";
import Banner from "../Banner/Banner";
import ProgressOfRes from "../ProgressOfRes/ProgressOfRes";
import Services from "../Services/Services";
import profileModal from "../../Shared/AddServices/profileModal";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <profileModal></profileModal>
    </div>
  );
};

export default Home;
