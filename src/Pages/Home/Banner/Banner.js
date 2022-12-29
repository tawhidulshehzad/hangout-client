import { MDBTextArea } from "mdb-react-ui-kit";
import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import useTitle from "../../../hooks/useTitle";

const Addservices = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  useTitle("Add services");

  const handleNewServices = (event) => {
    event.preventDefault();
    const form = event.target;
    const img = form.img.value;
    const description = form.description.value;
    const like = 0;
    const newService = {
      img,
      description,
      time: Date(),
      like,
    };
    fetch("http://localhost:5000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newService),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          form.reset();

          toast.success("Post done");
        }
      })
      .catch((error) => console.error(error));
  };
  const handleToast = () => {
    toast.warn("Login First");
  };
  return (
    <div className="d-flex justify-content-center">
      <div className="p-3 my-3 w-75 shadow-3">
        <p> What's On Your Mind</p>
        <form onSubmit={handleNewServices}>
          <MDBTextArea
            name="description"
            type="text"
            placeholder="Your text"
            className="w-100 my-3  text-center"
            label="Description"
            id="textAreaExample"
            rows={2}
          />
          <input
            name="img"
            type="text"
            placeholder="Photo URL"
            className="w-100 p-2 mb-2 "
          />
          {/* btn */}

          {user?.email ? (
            <div>
              <input
                className="btn btn-sm btn-primary"
                type="submit"
                value="Post"
              />
            </div>
          ) : (
            <div>
              <Link
                to="/login"
                onClick={handleToast}
                state={{ from: location }}
                replace
                className="btn btn-sm btn-primary"
              >
                Post
              </Link>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Addservices;
