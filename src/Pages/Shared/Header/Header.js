import { GoogleAuthProvider } from "firebase/auth";
import { MDBBtn } from "mdb-react-ui-kit";
import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo1 from "../../../assets/food-bar.png";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { providerLogin, user, logOut } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            // local storage not the best place to store jwt token
            localStorage.setItem("food-token", data.token);
          });
      })
      .catch((error) => console.error(error));
  };

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.error(error));
  };

  const menuItems = (
    <>
      <Link className=" fw-semibold text-decoration-none text-dark" to="/">
        Home
      </Link>
      <Link
        className=" fw-semibold ms-3 text-decoration-none text-dark"
        to="/allservices"
      >
        Media
      </Link>
      {user?.email ? (
        <>
          <Link
            className=" fw-semibold text-decoration-none text-dark ms-3"
            to="/reviews"
          >
            Message
          </Link>
          <Link
            className=" fw-semibold text-decoration-none text-dark ms-3"
            to="/addservices"
          >
            About Us
          </Link>
          <button
            onClick={handleLogOut}
            className="border-0 bg-transparent fw-semibold text-decoration-none text-dark ms-3"
          >
            Sign Out
          </button>
        </>
      ) : (
        <Link
          className=" fw-semibold text-decoration-none text-dark ms-3"
          to="/login"
        >
          Login
        </Link>
      )}
    </>
  );

  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
      <Container>
        <Navbar.Brand href="#home">
          <Link to="/" className="text-decoration-none text-dark">
            <div className="d-flex">
              <p className="d-flex fw-bold align-items-center ps-2 mb-0">
                Hangout
              </p>
            </div>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>{menuItems}</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets"></Nav.Link>
            <Nav.Link eventKey={2} href="#memes"></Nav.Link>
          </Nav>
          <MDBBtn onClick={handleGoogleSignIn} outline color="success">
            Login with Google
          </MDBBtn>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
