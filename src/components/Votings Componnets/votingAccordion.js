import React from 'react'
import Voting from './voting'
import { Accordion, Card, Button } from 'react-bootstrap'

class VotingAccordion extends React.Component {
    constructor(props) {
        super(props)
        this.votingOptionHandler = this.votingOptionHandler.bind(this)
        this.votingHandler = this.votingHandler.bind(this)
    }
    
    votingOptionHandler (val){
           this.props.options(val) 
    }
    votingHandler(){
        this.props.voteClicked()
    }


    render() {
        const accordionMap = this.props.voting.map((votes, index) => {
            return (<Card key={votes.id}>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey={index}>
                        {votes.title}
                        
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={index}>
                    <Card.Body><Voting vote={votes} option={this.votingOptionHandler} voteClicked={this.votingHandler}/>
                    
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
export default VotingAccordion;