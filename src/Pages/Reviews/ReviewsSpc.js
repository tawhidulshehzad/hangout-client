import { MDBTableBody, MDBTableHead, MDBTable } from "mdb-react-ui-kit";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

import ReviewRow from "./ReviewRow";

const ReviewsSpc = ({ id }) => {
  console.log(id)
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  
  

  useEffect(() => {
    fetch(`http://localhost:5000/reviews/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setReviews(data);
        console.log(data);
      })
      .catch
      ((error) => console.error(error));
  }, []);

  // useEffect(() => {
  //   fetch("http://localhost:5000/services")
  //     .then((res) => res.json())
  //     .then((data) => setServices(data));
  // }, []);

  // delete function
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete");
    if (proceed) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Deleted successfully");
            const remaining = reviews.filter((rvw) => rvw._id !== id);
            setReviews(remaining);
            toast.success("Successfully deleted");
          }
        });
    }
  };

  const handleStatusUpdate = (id) => {
    fetch(`http://localhost:5000/reviews/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "Edited" }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = reviews.filter((rvw) => rvw._id !== id);
          const editing = reviews.find((rvw) => rvw._id === id);
          editing.status = "Edited";
          const newReviews = [...remaining, editing];

          setReviews(newReviews);
        }
      });
  };

  return (
    <div>
      <h2>Comments</h2>
      <MDBTable align="middle">
        <MDBTableHead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Comment</th>       
            <th scope="col">Delete</th>
            
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {reviews.map((review) => (
            <ReviewRow
              key={review._id}
              handleDelete={handleDelete}
              review={review}
              handleStatusUpdate={handleStatusUpdate}
            ></ReviewRow>
          ))}
        </MDBTableBody>
      </MDBTable>
    </div>
  );
};

export default ReviewsSpc;
