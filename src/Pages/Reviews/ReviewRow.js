import { MDBBadge, MDBBtn } from "mdb-react-ui-kit";
import React from "react";
import { Link } from "react-router-dom";

const ReviewRow = ({ review, handleDelete, handleStatusUpdate }) => {
  const { _id, name, email, url, message, serviceName, price, status } = review;

  return (
    <tr>
      <td>
        <div className="d-flex align-items-center">
          <div className="ms-3">
            <p className="text-muted mb-0">{name}</p>
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1">{message}</p>
      </td>
      <td>
        <MDBBtn onClick={() => handleDelete(_id)} rounded size="sm">
          x
        </MDBBtn>
      </td>
    </tr>
  );
};

export default ReviewRow;
