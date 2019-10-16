
import React from 'react'
import Message from './message'
import { Accordion, Card, Button } from 'react-bootstrap'

class MessageAcordion extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const accordionMap = this.props.messages.map((message, index) => {
            return (<Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey={index}>
                        {message.title}
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={index}>
                    <Card.Body><Message mymessage={message} /></Card.Body>
                </Accordion.Collapse>
            </Card>)
        });




        return (
            <div>
            <Accordion defaultActiveKey="0">
                {accordionMap}
            </Accordion>
            </div>
        )
    }
}
export default MessageAcordion;