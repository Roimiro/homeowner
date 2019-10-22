
import React from 'react'
import {Modal,Form,Col,Row,Button} from 'react-bootstrap'

class Signup extends React.Component{
    constructor(props){
        super(props)
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
  <Form.Group as={Row} controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
      Title
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" placeholder="Title" onChange={this.titleHandlerModal}/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalPassword">
    <Form.Label column sm={2}>
      Details
    </Form.Label>
    <Col sm={10}>
      <Form.Control as="textarea" placeholder="Details" onChange={this.detailsHandlerModal}/>
    </Col>
  </Form.Group>
  <Form.Group as={Row} controlId="formHorizontalPassword">
    <Form.Label column sm={2}>
      Priority
    </Form.Label>
    <Col sm={10}>
      <Form.Control as="select" onChange={this.priorityHandlerModal}>
      <option value='normal'>normal</option>
      <option value='important'>important</option>
      <option value='urgent'>urgent</option>
      </Form.Control>
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