import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import Login from '../modals/login'

class NavHeader extends React.Component {
    constructor() {
        super()
        this.state = {
            setLoginModal:false,
           
        }
        this.loginModal = this.loginModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    loginModal(){
        if(this.state.setLoginModal){
            this.setState({setLoginModal:false})
        }else{
            this.setState({setLoginModal:true})
           
        }
        
    }
    closeModal(bol){
        if(bol===false){
            this.setState({setLoginModal:false})
        }
    }

    
    

    render(){
        return(
    <div>
    <Login 
    show={this.state.setLoginModal}
    onHide={this.closeModal}
     />
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home">HOA Systems</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
            <Nav.Link href="#features">Dashboard</Nav.Link>
            <Nav.Link href="#pricing">Tenants</Nav.Link>
            <Nav.Link href="#/Messages">Messages</Nav.Link>
            <Nav.Link href="#pricing">Issues</Nav.Link>
            <Nav.Link href="#/votings">Votings</Nav.Link>
            
        </Nav>
        <Nav>
            <Nav.Link href="#/signup">Signup</Nav.Link>
            <Nav.Link href="#deets">Logout</Nav.Link>
            <Nav.Link onClick={this.loginModal}>Login</Nav.Link>
        </Nav>
    </Navbar.Collapse>
</Navbar>
</div>
        )}
}

export default NavHeader