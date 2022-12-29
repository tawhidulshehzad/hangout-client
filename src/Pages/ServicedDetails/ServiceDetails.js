import { MDBTextArea } from "mdb-react-ui-kit";
import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import {
  Link,
  Navigate,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import PrivateRoute from "../../Router/PrivateRoute/PrivateRoute";
import Reviews from "../Reviews/Reviews";
import ReviewsSpc from "../Reviews/ReviewsSpc";

const ServiceDetails = () => {
  const { _id, img, description } = useLoaderData();

  const handleToast = () => {
    toast.warn("Login First");
  };

  return (
    <div>
      <div className="d-lg-flex">
        <div className="col-lg-6 p-3">
          <Card className="w-100">
            <Card.Img style={{ height: "300px" }} variant="top" src={img} />

            <Card.Body>
              <Card.Text>{description}</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-6">
          <ReviewsSpc id={_id}></ReviewsSpc>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
