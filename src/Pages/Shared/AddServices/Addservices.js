import {
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalContent,
  MDBModalDialog,
  MDBModalFooter,
  MDBModalHeader,
  MDBModalTitle,
  MDBTextArea,
} from "mdb-react-ui-kit";
import ProfileModal from "../../Shared/ProfileModal/ProfileModal";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Addservices = () => {
  const { user } = useContext(AuthContext);
  const [userProfile, setuserProfile] = useState([]);
  const { name, email, address, university, _id } = userProfile;

  const [centredModal, setCentredModal] = useState(false);
  const toggleShow = () => setCentredModal(!centredModal);

  useEffect(() => {
    fetch(`http://localhost:5000/userProfile/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setuserProfile(data));
  }, []);
  const handleId = () => {};

  const handledit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const address = form.address.value;
    const university = form.university.value;

    const user = { name, address, university };
    fetch(`http://localhost:5000/user/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("user updated");
        window.location.reload(false);
      });
  };
  return (
    <div className="p-3 ">
      <h3 className="text-decoration-underline">User Profile:</h3>
      <h5>Name : {name}</h5>
      <h5>Email : {email}</h5>
      <h5>Address : {address}</h5>
      <h5>University : {university}</h5>
      <>
        <MDBBtn onClick={toggleShow}>Edit Porfile</MDBBtn>
        <MDBModal tabIndex="-1" show={centredModal} setShow={setCentredModal}>
          <MDBModalDialog centered>
            <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle>Edit Profile</MDBModalTitle>
                <MDBBtn
                  className="btn-close"
                  color="none"
                  onClick={toggleShow}
                ></MDBBtn>
              </MDBModalHeader>
              <MDBModalBody>
                <div className="p-3 ">
                  <form onSubmit={handledit}>
                    <input
                      name="name"
                      type="text"
                      placeholder="New name"
                      className="w-100 p-2 my-2 "
                    />
                    <input
                      name="email"
                      type="email"
                      placeholder={email}
                      className="w-100 my-2 p-2"
                      readOnly
                    />
                    <input
                      name="address"
                      type="text"
                      placeholder="address"
                      className="w-100 my-2 p-2"
                    />
                    <input
                      name="university"
                      type="text"
                      placeholder="university"
                      className="w-100 my-2 p-2"
                    />

                    {/* btn */}
                    <input
                      className="btn btn-primary"
                      onClick={toggleShow}
                      type="submit"
                      value="Save changes"
                    />
                  </form>
                </div>
              </MDBModalBody>
              <MDBModalFooter>
                <MDBBtn color="secondary" onClick={toggleShow}>
                  Close
                </MDBBtn>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
      </>
    </div>
  );
};

export default Addservices;
