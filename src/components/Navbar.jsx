import React, { Component } from "react";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from "reactstrap";

class NavBar extends Component {
  constructor(props) {
    super(props);
    // this.toggle = this.toggle.bind(this);
  }
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/" className="navbar-brand ml-5">
            <img src={logo} alt="" style={{ width: 80, height: 60 }} />
            On Time Food
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="home pl-4">
                
                  <NavLink href="/components/" className="a">
                    Home
                  </NavLink>
               
              </NavItem>
              <NavItem className="about pl-4">
                <NavLink href="#" className="a">
                  About
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className="options pl-4 a">
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem className="cartValue ml-4 mr-4">
                <NavLink className="a" disabled>
                  <span>
                    <FontAwesomeIcon icon="shopping-cart" />{" "}
                    {this.props.itemTotal}
                  </span>
                </NavLink>
              </NavItem>
              <Link to="/menu/bill/">
                <Button className="cartBtn" onClick={this.props.showBill}>
                  Show Cart
                </Button>
              </Link>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
