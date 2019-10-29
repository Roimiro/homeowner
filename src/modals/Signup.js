
import React from 'react'
import {Modal,Form,Col,Row,Button} from 'react-bootstrap'

class Signup extends React.Component{
    constructor(props){
        super(props)
    }

    signupHandler (){
      
    }

    render(){
        return(
            <Modal
      {...this.props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create a Committee Member Account
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
  <Form.Group as={Row} controlId="formHorizontalName">
    <Form.Label column sm={2}>
      Name
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" placeholder="name"/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
      Email
    </Form.Label>
    <Col sm={10}>
      <Form.Control as="textarea" placeholder="Email"/>
    </Col>
  </Form.Group>
  <Form.Group as={Row} controlId="formHorizontalPassword">
    <Form.Label column sm={2}>
      Password
    </Form.Label>
    <Col sm={10}>
      <Form.Control as="password" placeholder="password"/>
    </Col>
  </Form.Group>
  <Form.Group as={Row} controlId="formHorizontalBuilding">
    <Form.Label column sm={2}>
      Building/Condominium Community Name
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" placeholder="Building/Condominium Community Name"/>
    </Col>
  </Form.Group>
  <Form.Group as={Row} controlId="formHorizontalAddress">
    <Form.Label column sm={2}>
      Address
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" placeholder="Address"/>
    </Col>
  </Form.Group>
  <Form.Group as={Row} controlId="formHorizontalName">
    <Form.Label column sm={2}>
      City
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" placeholder="City"/>
    </Col>
  </Form.Group>
  
  <Form.Group as={Row}>
    <Col lg={{span:3 ,offset:9}} sm={{ span: 10, offset: 2 }}>
      <Button type="btn" onClick={this.modalSubmitHandler}>Add new message</Button>
    </Col>
  </Form.Group>
</Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={this.props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}
}

export default Signup