import React, { useContext, useEffect, useState } from "react";
import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import ReviewRow from "./ReviewRow";
import { toast } from "react-toastify";
import useTitle from "../../hooks/useTitle";

const Reviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useTitle("My Review");

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("food-token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setReviews(data));
  }, [user?.email]);

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
            toast("Successfully deleted");
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
      <h2>
        {reviews.length === 0 ? (
          <p className="text-center my-5">No reviews were added</p>
        ) : (
          reviews.length + " Reviews added"
        )}
      </h2>

      <MDBTable align="middle">
        <MDBTableHead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Review</th>
            <th scope="col">Service Name</th>
            <th scope="col">Price</th>
            <th scope="col">Delete</th>
            <th scope="col">Edit</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {reviews?.map((review) => (
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

export default Reviews;
