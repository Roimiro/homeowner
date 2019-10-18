import React from 'react'
import { Form, Row, Col, DropdownButton, Dropdown, InputGroup, FormControl } from 'react-bootstrap'
import './componentsStyle.css'



class MessageSeacrhBar extends React.Component {
    constructor(props) {
        super(props)
        this.handleFilter = this.handleFilter.bind(this)
        this.handlePriority = this.handlePriority.bind(this)
    }
    handleFilter(e) {
        e.preventDefault()
        this.props.filter(e.target.value)
    }
    handlePriority(e) {
        this.props.priorityFilter(e.target.value)
    }
    handleDateSort(e){
       
     this.props.dateSort(e.target.checked)
    }
    render() {
        return (
            <Form className="formSearchBar">
                <Row>
                    <Col lg={5}>
                        <Form.Control type="text" placeholder="Filter BY Title" onChange={this.handleFilter} />
                    </Col>
                    <Col lg={3}>
                        <InputGroup className="mb-3">
                            <Form.Control as="select" onChange={this.handlePriority} >
                                <option value=""  selected>Filter By Priority</option>
                                <option value='normal'>normal</option>
                                <option value='important'>important</option>
                                <option value='urgent'>urgent</option>
                            </Form.Control>

                        </InputGroup>

                    </Col>
                    <Col lg={2}>
                        <Form.Label>Sort BY:</Form.Label>
                    </Col>
                    <Col lg={1}>
                        <Form.Check type="checkbox" label="Date" onChange={this.handleDateSort}/>
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