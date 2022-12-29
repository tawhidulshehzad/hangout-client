import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import React from "react";

const Banner = () => {
  return (
    <div className="d-lg-flex py-5 ">
      <div className="col-lg-3 col-sm-12 px-2">
        <h2 className="">Best Home made food In Town</h2>
        <p className="p-2">
          You will be able to choose your favorite items, with best price . Hope
          to see you soon
        </p>
      </div>
      <div className="col-lg-9">
        <MDBCarousel showIndicators showControls fade>
          <MDBCarouselItem
            className="w-100 d-block"
            itemId={1}
            src="https://cdn.pixabay.com/photo/2017/01/30/13/49/pancakes-2020863__340.jpg"
            alt="..."
          >
            <h5>Basic Items</h5>
            <p>Economic services</p>
          </MDBCarouselItem>

          <MDBCarouselItem
            className="w-100 d-block"
            itemId={2}
            src="https://cdn.pixabay.com/photo/2014/06/11/17/00/food-366875__340.jpg"
            alt="..."
          >
            <h5>Advanced Services</h5>
            <p>You will be glad to know</p>
          </MDBCarouselItem>

          <MDBCarouselItem
            className="w-100 d-block"
            itemId={3}
            src="https://cdn.pixabay.com/photo/2017/08/30/17/12/waffle-hearts-2697904__340.jpg"
            alt="..."
          >
            <h5>Premium service</h5>
            <p>Best in town</p>
          </MDBCarouselItem>
        </MDBCarousel>
      </div>
    </div>
  );
};

export default Banner;
