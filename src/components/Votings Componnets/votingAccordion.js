import React from 'react'
import Voting from './voting'
import { Accordion, Card, Button } from 'react-bootstrap'

class VotingAcordion extends React.Component {
    constructor(props) {
        super(props)
        
    }
    
    

    render() {
        const accordionMap = this.props.voting.map((voting, index) => {
            return (<Card key={voting.id}>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey={index}>
                        {voting.title}
                        
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={index}>
                    <Card.Body><Voting vote={voting} />
                    
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
export default VotingAcordion;