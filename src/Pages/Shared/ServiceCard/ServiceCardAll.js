import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import useTitle from "../../../hooks/useTitle";

const ServiceCard = ({ service }) => {
  useTitle("service");
  const { title, img, price, description, _id } = service;

  return (
    <div className="col-lg-4 col-md-6 col-sm-12 my-2">
      <Card className="w-100">
        <PhotoProvider>
          <PhotoView src={img}>
            <Card.Img style={{ height: "300px" }} variant="top" src={img} />
          </PhotoView>
        </PhotoProvider>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description.length > 80 ? (
              <p>{description.slice(0, 60) + "..."} </p>
            ) : (
              <p>{description}</p>
            )}
          </Card.Text>
          <p>Price: ${price}</p>
          <Link
            className="text-decoration-none btn btn-primary pb-0 "
            to={`/servicedetails/${_id}`}
          >
            <p>View details</p>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServiceCard;