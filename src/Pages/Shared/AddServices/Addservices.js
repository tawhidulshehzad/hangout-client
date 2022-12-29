import { MDBTextArea } from "mdb-react-ui-kit";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import useTitle from "../../../hooks/useTitle";

const Addservices = () => {
  const { user } = useContext(AuthContext);
  useTitle("Add services");

  const handleNewServices = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const img = form.img.value;
    const price = form.price.value;
    const description = form.description.value;

    const newService = {
      title,
      img,
      price,
      description,
      time: Date(),
    };
    fetch("http://localhost:5000/services", {
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

          toast("Data added successfully");
        }
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <h2>Add your services</h2>
      <div className="p-3 ">
        <h2> Writer your Service</h2>
        <form onSubmit={handleNewServices}>
          <input
            name="img"
            type="text"
            placeholder="Photo URL"
            className="w-100 p-2 my-3 "
          />
          <input
            name="title"
            type="text"
            placeholder="Service title"
            className="w-100 my-3 p-2"
          />
          <input
            name="price"
            type="text"
            placeholder="price"
            className="w-100 my-3 p-2"
          />

          <MDBTextArea
            name="description"
            type="text"
            placeholder="Your text"
            className="w-100 my-3 py-5 text-center"
            label="Description"
            id="textAreaExample"
            rows={4}
          />
          {/* btn */}
          <input
            className="btn btn-primary"
            type="submit"
            value="Submit your services"
          />
        </form>
      </div>
    </div>
  );
};

export default Addservices;
