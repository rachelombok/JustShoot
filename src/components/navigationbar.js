import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
  } from "react-router-dom";
  import { Navbar,Nav,NavDropdown,Form,FormControl,Button, Popover, OverlayTrigger, Tooltip } from 'react-bootstrap'
  import './navbar.css';

  const hstyle = {
    background:'linear-gradient(rgba(250,0,0,0.5),transparent)',
    backgroundColor: 'orange'
  }

  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Add Point</Popover.Title>
      <Popover.Content>
      Get inspired by photographers in the area, find great spots to take photos, and share your own.
      To share photos with the community, double click the map and upload your photo, set the correct location, and add a little writeup + details.
      </Popover.Content>
      <Popover.Title as="h3">Browse Points</Popover.Title>
      <Popover.Content>
      Browse the map and search for snap spots posted by the JustShoot community.
      </Popover.Content>
    </Popover>
  );


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
                  <Navbar className='navgradient' fixed="top">
                  <Navbar.Brand className='navfont'> JustShoot </Navbar.Brand>
                      <Nav className='mr-auto'>
                      {/*<NavDropdown title="Guide" onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                        <Navbar.Text >Double Click to add Point</Navbar.Text>
                        <Navbar.Text >Click any point to see details</Navbar.Text>
          </NavDropdown>*/}
                      <OverlayTrigger trigger="click" placement="right" overlay={popover}>
    <Button variant="success">Click me to see</Button>
          </OverlayTrigger>


          <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Double click to add point<br></br>Click existing point to see details</Tooltip>} placement='right'>
  <span className="d-inline-block">
    <Button disabled style={{ pointerEvents: 'none' }}>
      Disabled button
    </Button>
  </span>
</OverlayTrigger>
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