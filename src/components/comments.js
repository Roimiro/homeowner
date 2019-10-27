import React from 'react'
import {Row,Col, Button} from 'react-bootstrap'

class Comments extends React.Component {
    constructor(){
        super()
    }
    render(){
        return(
            <div>
               
                <Col>
                    <h4>Comments:</h4>
                    <p>{this.props.comment}</p>
                </Col>
            </div>
        )
    }

}
export default Comments 