import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavbarText } from "reactstrap";

import {Link} from "react-router-dom";

import { UserContext } from "../context/UserContext";


const Header = () => {
  return(
    <Navbar color="warning" light expand="md">
      <NavbarBrand>
        <Link to="/" className="text-dark">
          R - Github User Search
        </Link>
      </NavbarBrand>
      <NavbarToggler>

      </NavbarToggler>
      <Collapse navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink className="text-dark">SignUp</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="text-dark">SignIn</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="text-dark">LogOut</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default Header;