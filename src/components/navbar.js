import React from 'react';
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
  DropdownItem
} from 'reactstrap';
import Logo from '../style/images/logo.JPG';
import Searchbar from "./searchBar";


export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="container">
          <Searchbar /><br /><br />
          <Navbar color="light" light expand="md" >
            <NavbarBrand href="/">
              <img className="logo" src={Logo} alt="logo" style={{ margin: '0%', float: "left", width: "50%" }} />
              <a href="/" style={{margin: '0%', float: "right", width: "50%", height: "1%" }}>
                The Green<br />
                Nephrology<br />
                Action Team.<br />
              </a>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>

                <NavItem>
                  <NavLink href="/aboutUs/">About us</NavLink>
                </NavItem>

                <UncontrolledDropdown nav inNavbar className="dialysis">
                  <DropdownToggle nav>
                    Dialysis
                </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      <NavLink href="/dialysisCentre/">In Centre</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="/dialysisHome/">At Home</NavLink>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>

                <UncontrolledDropdown nav inNavbar className="goGreen">
                  <DropdownToggle nav>
                    Going Green
                </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      <NavLink href="/greenTools/">Tools</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="/greenroadMap/">RoadMap</NavLink>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>

                <UncontrolledDropdown nav inNavbar className="resources">
                  <DropdownToggle nav>
                    Resources
                </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      <NavLink href="/resourcesResearch/">Research</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="/resourcesBlog/">Blog</NavLink>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>

                <NavItem>
                  <NavLink href="/contact/">Contact</NavLink>
                </NavItem>

              </Nav>
            </Collapse>
          </Navbar>
        </div>
    );
  }
}