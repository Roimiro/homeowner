import React from 'react'
import { Modal, Form, Col, Row, Button } from 'react-bootstrap'
import Parse from 'parse'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: "",
      password: "",
      isLoggedIn:false,
    }
    this.userNameHandler =this.userNameHandler.bind(this)
    this.passowrdHandler = this.passowrdHandler.bind(this)
    this.loginHandler = this.loginHandler.bind(this)
  }
userNameHandler(e){
  console.log(e.target.value)
  this.setState({userName:e.target.value})
}
passowrdHandler (e){
  console.log(e.target.value)
  this.setState({password:e.target.value})
}
loginHandler(){
  Parse.User.logIn(this.state.userName,this.state.password).then((user)=>{
    this.setState({isLoggedIn:true})
  console.log('Logged in user', user)
  }).catch(error => {
    console.error('Error while logging in user', error);
  });
  }
  
  


  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Login
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                user
    </Form.Label>
              <Col sm={10}>
                <Form.Control type="email" placeholder="user name" onBlur={this.userNameHandler}/>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalPassword">
              <Form.Label column sm={2}>
                Password
    </Form.Label>
              <Col sm={10}>
                <Form.Control type="password" placeholder="password" onBlur={this.passowrdHandler}/>
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Col lg={{ span: 3, offset: 9 }} sm={{ span: 10, offset: 2 }}>
                <Button type="btn" onClick={this.loginHandler}>Login</Button>
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={()=>this.props.onHide(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default Login