import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
  } from "react-router-dom";
  import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
  import './navbar.css';

  const hstyle = {
    background:'linear-gradient(rgba(250,0,0,0.5),transparent)',
    backgroundColor: 'orange'
  }

  class NavigationBar extends React.Component{
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.state = {
          dropdownOpen: false
        };
      }
    
      toggle() {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
      }
    
      onMouseEnter() {
        this.setState({dropdownOpen: true});
      }
    
      onMouseLeave() {
        this.setState({dropdownOpen: false});
      }
      render(){
          return(
              <div>
                  <Navbar className='navgradient'>
                  <Navbar.Brand> Brand </Navbar.Brand>
                      <Nav className='mr-auto'>
                      <NavDropdown title="Guide" onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                        <Navbar.Text >Double Click to add Point</Navbar.Text>
                        <Navbar.Text >Click any point to see details</Navbar.Text>
                      </NavDropdown>
                      </Nav>
                      <Nav className='ml-auto'>
                          <Nav.Link >Profile</Nav.Link>
                      </Nav>
                      {/*<Navbar.Collapse >
                        <Navbar.Text>
                        Double Click to add Point
                        </Navbar.Text>
                      </Navbar.Collapse>*/}
                      
                  </Navbar>

              </div>

          );
      }
  }

  export default NavigationBar;