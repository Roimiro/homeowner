import React from 'react';
import { Row, Col, Image,  } from 'react-bootstrap'




class Message extends React.Component {
    constructor(props){
        super(props)
        
        }
        
    
    
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <Image src={ require('../data/house.jpeg') } rounded />
                    </Col>
                    <Col>
                        <div>
                            <p>Details:{this.props.mymessage.details}</p>
                            <p>Priority:{this.props.mymessage.priority[0]}</p>
                        </div>
                    </Col>
                
                </Row>
            </div>
        )
    }


}
export default Message