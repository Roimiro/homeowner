import React from 'react';
import { Row, Col, } from 'react-bootstrap'




class Voting extends React.Component {
    constructor(props){
        super(props)
        
        }
        
    
    
    render() {
        return (
            <div>
                <Row>
                    <Col>
                            <h4>Details:</h4> <p>{this.props.vote.details}</p>
                          <h4>End Date:</h4>  <p>{this.props.vote.dueDate.toString()}</p>
                    </Col>
                
                </Row>
            </div>
        )
    }


}
export default Voting