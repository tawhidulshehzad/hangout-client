import {
  MDBTabs,
  MDBTabsContent,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsPane,
} from "mdb-react-ui-kit";
import React, { useState } from "react";

const About = () => {
  const [basicActive, setBasicActive] = useState("tab1");

  const handleBasicClick = (value: String) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };
  return (
    <div className="p-5">
      <h2 className="text-center p-5">Three strenths of my food</h2>
      <>
        <MDBTabs className="mb-3">
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleBasicClick("tab1")}
              active={basicActive === "tab1"}
            >
              Customer Service
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleBasicClick("tab2")}
              active={basicActive === "tab2"}
            >
              Food Quality
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleBasicClick("tab3")}
              active={basicActive === "tab3"}
            >
              Food Delivery
            </MDBTabsLink>
          </MDBTabsItem>
        </MDBTabs>

        <MDBTabsContent>
          <MDBTabsPane show={basicActive === "tab1"}>
            Essentially, the 3 important qualities of customer service center
            around three “p”s: professionalism, patience, and a “people-first”
            attitude. Although customer service varies from customer to
            customer, as long as you're following these guidelines, you're on
            the right track.
          </MDBTabsPane>
          <MDBTabsPane show={basicActive === "tab2"}>
            Make Freshness a Priority. Ever wonder what makes food taste good?
            ... Eliminate Artificial Ingredients. ... Use and Promote Branded
            Ingredients. ... Work on Quality Control. ... Feature Local and
            Seasonal Foods. ... Work on Your Preparation. ... Offer Upscale
            Ingredients. ... Focus on Good-for-You Ingredients. content
          </MDBTabsPane>
          <MDBTabsPane show={basicActive === "tab3"}>
            DoorDash. Best for consistency. See at DoorDash. Uber Eats. Best for
            fast delivery. See at Uber Eats. Postmates. Best for delivery deals.
            See at Postmates. Grubhub/Seamless. Best for easy payment. See at
            Grubhub. Delivery.com. Best for more than just food.
          </MDBTabsPane>
        </MDBTabsContent>
      </>
    </div>
    
  );
};

export default About;
