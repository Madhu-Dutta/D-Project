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
import '../style/navbar.css';
import Logo from '../style/images/logo.JPG';
// import Searchbar from "../components/searchBar";


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

      <Navbar color="light" light expand="lg">

        <NavbarBrand href="/">
          <img className="logo" src={Logo} alt="logo" style={{ margin: '0%', float: "left", width: "60%" }} />
          <span>
            <a href="/" style={{ margin: '0%', float: "right", width: "40%", height: "1%", fontSize: '70%', padding: '10% 4%', fontWeight: 'bolder', color: '#6A503E', textDecoration: 'none' }}>
              The Green<br />
              Nephrology<br />
              Action Team.<br />
            </a>
          </span>
        </NavbarBrand>

        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>

            <NavItem>
              <NavLink href="/aboutUs/">AboutUs</NavLink>
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
                Tools
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

    );
  }
}