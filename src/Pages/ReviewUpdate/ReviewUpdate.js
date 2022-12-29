import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ReviewUpdate = () => {
  const [review] = useLoaderData();
  const [reviewText, setReviewText] = useState("");
  const navigate = useNavigate();

  console.log(review);

  const handleUpdate = () => {
    console.log(reviewText);

    fetch(`http://localhost:5000/reviews/${review._id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ reviewText }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast("success");
          navigate(`/servicedetails/${review.service}`)
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <textarea
          cols="30"
          rows="10"
          placeholder="Update Review..."
          onBlur={(e) => setReviewText(e.target.value)}
          defaultValue={review?.message}
        ></textarea>
        <button onClick={handleUpdate}>Update Review</button>
      </form>
    </div>
  );
};

export default ReviewUpdate;
