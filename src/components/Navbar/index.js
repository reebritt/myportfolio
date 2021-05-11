import React, { Component } from 'react';
import './Navbar.css';
import {Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return (
         
            <Nav className="justify-content-end" activeKey="/home">
    
    <Nav.Item>
    <Nav.Link><Link to="/About">About</Link></Nav.Link>
   
    </Nav.Item>
    <Nav.Item>
    <Nav.Link><Link to="/Projects">Projects</Link></Nav.Link>
    </Nav.Item>
    <Nav.Item>
    <Nav.Link><Link to="/Contact">Contact</Link></Nav.Link>
       
    </Nav.Item>
  </Nav>
  
        )
    }
}
export default Navbar


