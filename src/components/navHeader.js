import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

class NavHeader extends React.Component {
    constructor() {
        super()
    }

    render(){
        return(
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home">HOA Systems</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
            <Nav.Link href="#features">Dashboard</Nav.Link>
            <Nav.Link href="#pricing">Tenants</Nav.Link>
            <Nav.Link href="#pricing">Messages</Nav.Link>
            <Nav.Link href="#pricing">Issues</Nav.Link>
            <Nav.Link href="#pricing">Voting</Nav.Link>
            
        </Nav>
        <Nav>
            <Nav.Link href="#deets">Sign up</Nav.Link>
            <Nav.Link href="#deets">Logout</Nav.Link>
            <Nav.Link href="#deets">Login</Nav.Link>
        </Nav>
    </Navbar.Collapse>
</Navbar>
        )}
}

export default NavHeader