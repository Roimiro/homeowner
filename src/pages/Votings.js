import React from 'react';
import Parse from 'parse';

import { Container, Row, Col } from 'react-bootstrap'
import dataVoting from '../data/dataVotings'
import VotingAccordion from '../components/Votings Componnets/votingAccordion'



class Votings extends React.Component {
    constructor() {
        super()
        this.state = {
            voting: ['test'],
            options:""
        }
        this.votingIntialData = this.votingIntialData.bind(this)
        this.optionsHandler = this.optionsHandler.bind(this)
        this.voteHandler =this.voteHandler.bind(this)
    }

    optionsHandler (val){
        this.setState({
            options:val
        })
    }

    voteHandler (){
        const myVote= {
                user:this.state.voting[0].user,
                option:this.state.voting[0].options[this.state.options]
            }
            
        const Voting = Parse.Object.extend('Voting');
        const query = new Parse.Query(Voting);
        query.get(this.state.voting[0].id).then((object) =>{
            object.add('vote',[myVote])
            object.save().then((response) => {
                // You can use the "get" method to get the value of an attribute
                // Ex: response.get("<ATTRIBUTE_NAME>")
                
                console.log('Updated Voting', response);
              }, (error) => {
                
                console.error('Error while updating Voting', error);
              });
        });



        
    }
    votingIntialData() {
        const Voting = Parse.Object.extend('Voting');
        const query = new Parse.Query(Voting);
        
        query.find().then((results) => {

            const votingData = results.map((voting) => new dataVoting(voting));
            this.setState({ voting: votingData })
            console.log(this.state.voting)


        }, (error) => {

            console.error('Error while fetching Voting', error);
        });
    }
    componentDidMount() {
        this.votingIntialData()
    }
    render() {
            return (
                <div>
                    
                    <Container>
                        <Row>
                            <Col>
                                <h1>Active Votings</h1>
                                {(this.state.voting[0]==='test')? <div></div>:<VotingAccordion voting={this.state.voting} options={this.optionsHandler} voteClicked={this.voteHandler} />}
                            </Col>
                            <Col>
                                <h1>Votings Results</h1>
                            </Col>
                        </Row>
                    </Container>
                </div>
            )
        
    }
}
export default Votings