import React from 'react';

import { Navbar,Nav,Button, Popover, OverlayTrigger} from 'react-bootstrap'
import './navbar.css';
import logo from '../images/digcamtrans.png'

  const hstyle = {
    background:'linear-gradient(rgba(250,0,0,0.5),transparent)',
    backgroundColor: 'orange'
  }

  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Add Point</Popover.Title>
      <Popover.Content style={{color: 'white'}}>
      To share photos with the community, double click the map and upload your photo, set the correct location, and add a little writeup + details.
      </Popover.Content>
      <Popover.Title as="h3">Browse Points</Popover.Title>
      <Popover.Content style={{color: 'white'}}>
      Browse the map and search for snap spots posted by the JustShoot community, and click to see each one.
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
                  <Navbar.Brand style={{fontSize:'30px', color:'white'}} className='navfont' ><img src={logo} width='60px'></img> JustShoot </Navbar.Brand>
                      <Nav className='mr-auto'>
                      {/*<NavDropdown title="Guide" onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                        <Navbar.Text >Double Click to add Point</Navbar.Text>
                        <Navbar.Text >Click any point to see details</Navbar.Text>
          </NavDropdown>*/}
                      <OverlayTrigger trigger="click" placement="right" overlay={popover}>
    <Button variant="light" style={{border: '2px solid black'}}><strong>Click me!</strong></Button>
          </OverlayTrigger>


          {/*<OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Double click to add point<br></br>Click existing point to see details</Tooltip>} placement='right'>
  <span className="d-inline-block">
    <Button disabled style={{ pointerEvents: 'none' }} variant='light'>
      Disabled button
    </Button>
  </span>
        </OverlayTrigger>*/}
                      </Nav>
                      {/*<Nav className='ml-auto'>
                          <Nav.Link >Profile</Nav.Link>
      </Nav>*/}
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