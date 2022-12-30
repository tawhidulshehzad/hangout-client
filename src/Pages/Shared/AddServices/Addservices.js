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
import profileModal from "../AddServices/profileModal";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Addservices = () => {
  const { user } = useContext(AuthContext);
  const [userProfile, setuserProfile] = useState([]);

  const [centredModal, setCentredModal] = useState(false);
  const toggleShow = () => setCentredModal(!centredModal);

  useEffect(() => {
    fetch("http://localhost:5000/userProfile/")
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

    const user = { name };
    fetch("http://localhost:5000/user", {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("user updated");
      });
  };
  return (
    <div className="p-3 ">
      <h3 className="text-decoration-underline">User Profile:</h3>
      {userProfile.map((user) => (
        <profileModal user={user}></profileModal>
      ))}

      <>
        <MDBModal tabIndex="-1" show={centredModal} setShow={setCentredModal}>
          <MDBModalDialog centered>
            <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle>Edid Profile</MDBModalTitle>
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
                      placeholder={user.email}
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
// {
//    <>
//       <MDBBtn onClick={toggleShow}>Vertically centered modal</MDBBtn>

//       <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
//         <MDBModalDialog centered>
//           <MDBModalContent>
//             <MDBModalHeader>
//               <MDBModalTitle>Modal title</MDBModalTitle>
//               <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
//             </MDBModalHeader>
//             <MDBModalBody>
//               <p>
//                 Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
//                 egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
//               </p>
//             </MDBModalBody>
//             <MDBModalFooter>
//               <MDBBtn color='secondary' onClick={toggleShow}>
//                 Close
//               </MDBBtn>
//               <MDBBtn>Save changes</MDBBtn>
//             </MDBModalFooter>
//           </MDBModalContent>
//         </MDBModalDialog>
//       </MDBModal>
//     </>
// }
//  <div className="p-3 ">
//         <form onSubmit={handledit}>
//           <input
//             name="name"
//             type="text"
//             placeholder="New name"
//             className="w-100 p-2 my-2 "
//           />
//           <input
//             name="email"
//             type="email"
//             placeholder="email"
//             className="w-100 my-2 p-2"
//           />
//           <input
//             name="address"
//             type="text"
//             placeholder="address"
//             className="w-100 my-2 p-2"
//           />
//           <input
//             name="university"
//             type="text"
//             placeholder="university"
//             className="w-100 my-2 p-2"
//           />

//           {/* btn */}
//           <input
//             className="btn btn-primary"
//             type="submit"
//             value="Submit your services"
//           />
//         </form>
//       </div>
