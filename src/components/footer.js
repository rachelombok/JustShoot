import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import './navbar.css';

class Footer extends React.Component{

    render(){
    return(
        <div>
        <Navbar className='footergradient' fixed='bottom'>
            <Navbar.Brand >logo</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                (copyright2020)Made with love by <a href='www.rachelombok.com'>Rachel Ombok</a>
                </Navbar.Text>{' '}
                <Navbar.Text>
                Github svg + link
                </Navbar.Text>{' '}
                <Navbar.Text>
                IG svg + link
                </Navbar.Text>{' '}
                
            </Navbar.Collapse>
        </Navbar>
        </div>
    );
}

}

export default Footer;