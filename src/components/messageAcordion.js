
import React from 'react'
import Message from './message'
import { Accordion, Card, Button ,Row} from 'react-bootstrap'
import Comments from '../components/comments'

class MessageAcordion extends React.Component {
    constructor(props) {
        super(props)
        // this.btnDeleteHandler =this.btnDeleteHandler.bind(this)
    }
    btnDeleteHandler(e,id){
        this.props.delete(id);
    }

    render() {
        const accordionMap = this.props.messages.map((message, index) => {
            return (<Card key={message.id}>
                <Card.Header>

                    <Accordion.Toggle as={Button} variant="link" eventKey={index}>
                        {message.title}
                        
                    </Accordion.Toggle>
                    <Button onClick={(e) => this.btnDeleteHandler(e,message.id)} variant="danger">Delete</Button>
                </Card.Header>
                <Accordion.Collapse eventKey={index}>
                    <Card.Body>
                        <Row>
                        <Message mymessage={message} />
                                <Comments/>
                         </Row>
                    </Card.Body>
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