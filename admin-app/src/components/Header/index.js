import React from "react";
import { Navbar, Nav, Container,Form } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signout } from "../../actions";

/**
 * @author
 * @function Header
 **/

const Header = (props) => {
  
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(signout());
  };

  const renderLoggedInLinks = () => {
    return (
      <Nav>
        <li className="nav-item">
          <span style={{cursor:'pointer'}} className="nav-link" onClick={logout}>
            Signout
          </span>
        </li>
      </Nav>
    );
  };

  const renderNonLoggedInLinks = () => {
    return (
      <Nav>
        <li className="nav-item">
          <NavLink to="signin" className="nav-link">
            Signin
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="signup" className="nav-link">
            Signup
          </NavLink>
        </li>
      </Nav>
    );
  };
  

  return (
    <Navbar bg="primary" fixed='top' variant="dark">
    <Container>
    <Link to="/" className="navbar-brand">
          Admin Dashboard
        </Link>
        {auth.authenticate ? renderLoggedInLinks() : renderNonLoggedInLinks()}
    </Container>
  </Navbar>
  );
};

export default Header;