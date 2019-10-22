import React from 'react'
import { Modal, Form, Col, Row, Button } from 'react-bootstrap'

class Login extends React.Component {
  constructor(props) {
    super(props)
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
                <Form.Control type="email" placeholder="user name" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalPassword">
              <Form.Label column sm={2}>
                Password
    </Form.Label>
              <Col sm={10}>
                <Form.Control type="password" placeholder="password" />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Col lg={{ span: 3, offset: 9 }} sm={{ span: 10, offset: 2 }}>
                <Button type="btn">Login</Button>
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

export default Login