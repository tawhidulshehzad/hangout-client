import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Signup = () => {
  const { createUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const university = form.university.value;
    const address = form.address.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        saveUser(name, email, university, address);
        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            // local storage not the best place to store jwt token
            localStorage.setItem("food-token", data.token);
            navigate(from, { replace: true });
          });
      })
      .catch((err) => console.error(err));
  };

  const saveUser = (name, email, university, address) => {
    const user = { name, email, address, university };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("user created");
      });
  };

  return (
    <div>
      <Form
        onSubmit={handleSignUp}
        className="my-5 w-75 mx-auto shadow-3-strong p-5"
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Enter Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your university</Form.Label>
          <Form.Control
            name="university"
            type="text"
            placeholder="Enter university"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Address</Form.Label>
          <Form.Control
            name="address"
            type="text"
            placeholder="Enter Address"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Sign up
        </Button>
        <Form.Text className="text-danger">{/* {error} */}</Form.Text>
      </Form>
      <p>
        Have an account
        <Link className="ms-2" to="/login">
          Login
        </Link>{" "}
      </p>
    </div>
  );
};

export default Signup;
