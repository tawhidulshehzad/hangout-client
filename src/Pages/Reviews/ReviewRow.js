import { MDBBadge, MDBBtn } from "mdb-react-ui-kit";
import React from "react";
import { Link } from "react-router-dom";

const ReviewRow = ({ review, handleDelete, handleStatusUpdate }) => {
  const { _id, name, email, url, message, serviceName, price, status } = review;

  return (
    <tr>
      <td>
        <div className="d-flex align-items-center">
          <img
            src={url}
            alt=""
            style={{ width: "45px", height: "45px" }}
            className="rounded-circle"
          />
          <div className="ms-3">
            <p className="fw-bold mb-1">{name}</p>
            <p className="text-muted mb-0">{email}</p>
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1">{message}</p>
      </td>
      <td>
        <MDBBadge color="success" pill>
          {serviceName}
        </MDBBadge>
      </td>
      <td>{price}</td>
      <td>
        <MDBBtn onClick={() => handleDelete(_id)} rounded size="sm">
          x
        </MDBBtn>
      </td>
      <td>
        <MDBBtn rounded size="sm">
          <Link
            className="text-white text-decoration-none"
            to={`/update-reviews/${_id}`}
          >
            Update
          </Link>
        </MDBBtn>
      </td>
    </tr>
  );
};

export default ReviewRow;
