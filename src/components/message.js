import React from 'react';
import {Row,Col,Image} from 'react-bootstrap'


class Message extends React.Component {
    render(){
        return(
            <div>
                <Row>
                    <Col>
                        <Image src="/171x180" rounded/>
                    </Col>
                    <Col>
                        <div>
                            <p>Details:</p>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <p>

                            </p>
                            <p>Priority:</p>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }

}
export default Message