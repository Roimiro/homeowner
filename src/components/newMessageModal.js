import React from 'react';
import {Modal,Button,Row,Col,Form,} from 'react-bootstrap'



class MyVerticallyCenteredModal extends React.Component {
  constructor (props){
    super(props)
    
    this.titleHandlerModal = this.titleHandlerModal.bind(this);
    this.detailsHandlerModal = this.detailsHandlerModal.bind(this);
    this.priorityHandlerModal =this.priorityHandlerModal.bind(this);
    this.modalSubmitHandler = this.modalSubmitHandler.bind(this)
  }
  titleHandlerModal(e){
    this.props.title(e.target.value);
    // this.setState = ({title:e.target.value},this.modalSubmitHandler);
    // console.log(this.state.title)
  }
  detailsHandlerModal(e){
    this.props.details(e.target.value)
  }
  priorityHandlerModal(e){
    this.props.priority(e.target.value)
  }
  modalSubmitHandler(e){
    e.preventDefault();
    this.props.submitbtn()
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
          New Message
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
export default MyVerticallyCenteredModal;
