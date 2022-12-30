import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";

import { MDBTextArea } from "mdb-react-ui-kit";
import { toast } from "react-toastify";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const ServiceCard = ({ service }) => {
  
  const { title, img, description, _id, like } = service;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [newLike, setnewLike] = useState([]);
  const [istaking, setistaking] = useState([]);

  const handleComment = (event) => {
    event.preventDefault();
    const form = event.target;
    const message = form.message.value;

    const reviews = {
      service: _id,
      message,
      time: Date(),
    };

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviews),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("comment has taken");
          form.reset();
        }
      })
      .catch((error) => console.error(error));
  };

  const handleToast = () => {
    toast.warn("Login First");
  };

  const handleLike = () => {
    setistaking(false);
    const plike = like;
    const originalLike = parseInt(plike);
    let sum;
    const asumedLike = 1;
    sum = asumedLike + originalLike;
    setnewLike(sum);

    fetch(`http://localhost:5000/post/${_id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ sum }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="col-lg-4 col-md-6 col-sm-12 my-2">
      <Card className="w-100">
        <PhotoProvider>
          <PhotoView src={img}>
            <Card.Img style={{ height: "300px" }} variant="top" src={img} />
          </PhotoView>
        </PhotoProvider>
        <button onClick={handleLike} className="border-0 bg-transparent ">
          <Link className="d-flex text-decoration-none p-2 pb-0">
            <h6 className="p-0">
              <span className="bg-primary rounded-4 px-1">
                {" "}
                <FontAwesomeIcon className="text-white p-0" icon={faThumbsUp} />
              </span>
            </h6>
            {istaking ? (
              <p className="text-secondary ps-1" style={{ marginTop: "-4px" }}>
                <small>{like}</small>
              </p>
            ) : (
              <p className="text-secondary ps-1" style={{ marginTop: "-4px" }}>
                <small>{newLike}</small>
              </p>
            )}
          </Link>
        </button>
        <div className="px-3 ">
          <form onSubmit={handleComment}>
            <MDBTextArea
              name="message"
              type="text"
              placeholder="Your text"
              className="w-100 my-3  text-center"
              label="Comment"
              id="textAreaExample"
              rows={1}
            />
            {/* btn */}
            {user?.email ? (
              <div className="d-flex justify-content-end">
                <input
                  className="btn  btn-sm border-primary"
                  type="submit"
                  value="Submit"
                />
              </div>
            ) : (
              <div className="d-flex justify-content-end">
                <Link
                  to="/login"
                  onClick={handleToast}
                  state={{ from: location }}
                  replace
                  className="btn btn-sm btn-primary"
                >
                  Submit
                </Link>
              </div>
            )}
          </form>
        </div>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description.length > 150 ? (
              <p>{description.slice(0, 120) + "..."} </p>
            ) : (
              <p>{description}</p>
            )}
          </Card.Text>

          {user?.email ? (
            <Link
              className="text-decoration-none btn btn-sm btn-primary pb-0"
              to={`/servicedetails/${_id}`}
            >
              <p className=" mb-2">View details</p>
            </Link>
          ) : (
            <Link
              to="/login"
              onClick={handleToast}
              state={{ from: location }}
              replace
              className="btn btn-sm btn-primary"
            >
              View details
            </Link>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServiceCard;
