import React from 'react'
import { Form, Row, Col, DropdownButton, Dropdown, InputGroup, FormControl } from 'react-bootstrap'
import './componentsStyle.css'



class MessageSeacrhBar extends React.Component {
    constructor(props){
        super(props)
        this.handleFilter = this.handleFilter.bind(this)
    }
    handleFilter(e){
            e.preventDefault()
            this.props.filter(e.target.value)
    }
    render() {
        return (
            <Form className="formSearchBar">
                <Row>
                    <Col lg={6}>
                        <Form.Control type="text" placeholder="Filter BY Title" onChange={this.handleFilter}/>
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