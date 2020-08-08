import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap'
import './navbar.css';
import github from '../images/ghsvg.svg'
import instagram from '../images/igsvg.png'

class Footer extends React.Component{

    render(){
    return(
        <div>
        <Navbar className='footergradient' fixed='bottom'>
            <Navbar.Brand ></Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse >
            <Navbar.Text >
                Made with ♡ by <a href='https://rachelombok.com'>Rachel Ombok</a>
                </Navbar.Text>
            </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
               <a href='https://github.com/rachelombok/JustShoot'><img src={github} style={{width: '20px', marginRight: '10px'}} alt='Github svg link'/></a>
                </Navbar.Text>{'   '}

                <Navbar.Text>
                <a href='https://www.instagram.com/rachelombok/'><img src={instagram} style={{width: '20px'}} alt='Rachel Ombok IG'/></a>
                </Navbar.Text>{' '}
            </Navbar.Collapse>
        </Navbar>
        </div>
    );
}

}

export default Footer;