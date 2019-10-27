import React from 'react';
import { Row, Col,Form,InputGroup,Button} from 'react-bootstrap'




class Voting extends React.Component {
    constructor(props){
        super(props)
        this.selectHandler = this.selectHandler.bind(this)
        this.voteHandler = this.voteHandler.bind(this)
        }
        selectHandler(e){
            this.props.option(e.target.value)
        }
        
        voteHandler(){
            this.props.voteClicked()
        }
    
    
    render() {
        const options = this.props.vote.options.map((option,index) => {
                         return  ( <option key={index} value={index}>{option}</option>)
        }
            )
        return (
        
            <div>
                <Row>
                    <Col>
                          <h4>Details:</h4> <p>{this.props.vote.details}</p>
                          <h4>End Date:</h4>  <p>{this.props.vote.dueDate.toString().slice(0,21)}</p>
                    </Col>
                    <Col>
                    <Form>
                    <Form.Label>voting options:</Form.Label>
                    <InputGroup className="mb-3">
                            <Form.Control as="select" onChange={this.selectHandler} >
                                <option value="" defaultValue>Voting options</option>
                                {options}
                            </Form.Control>
                            <Button onClick={this.voteHandler}>Vote!</Button>
                        </InputGroup>
                        </Form>
                    </Col>
                </Row>
            </div>
        )
    }


}
export default Voting