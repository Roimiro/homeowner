import React from 'react'
import { Form, Row, Col, DropdownButton, Dropdown, InputGroup, FormControl } from 'react-bootstrap'



class MessageSeacrhBar extends React.Component {
    render() {
        return (
            <Form>
                <Row>
                    <Col lg={6}>
                        <Form.Control type="text" placeholder="Filter BY Title" />
                    </Col>
                    <Col lg={3}>
                        <InputGroup className="mb-3">
                            <DropdownButton
                                as={InputGroup.Prepend}
                                variant="outline-secondary"
                                title="Filter BY Priority"
                                id="input-group-dropdown-1"
                            >
                                <Dropdown.Item href="#">urgent</Dropdown.Item>
                                <Dropdown.Item href="#">important</Dropdown.Item>
                                <Dropdown.Item href="#">normal</Dropdown.Item>

                            </DropdownButton>

                        </InputGroup>

                    </Col>
                    <Col lg={1}>
                    <Form.Label>Sort BY:</Form.Label>
                    </Col>
                    <Col lg={1}>
                    <Form.Check type="checkbox" label="Date" />
                    </Col>
                    <Col lg={1}>
                    <Form.Check type="checkbox" label="Priority" />
                    </Col>
                </Row>
            </Form>
        )
    }
}
export default MessageSeacrhBar;