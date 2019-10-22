import React from 'react';
import Parse from 'parse';
import NavHeader from '../components/navHeader'
import {Container,Row,Col} from 'react-bootstrap'
import dataVoting from '../data/dataVotings'


class Votings extends React.Component{
    constructor(){
        super()
        this.state ={
            voting:""
        }
        this.votingIntialData = this.votingIntialData.bind(this)
    }
    votingIntialData(){
        const Voting = Parse.Object.extend('Voting');
        const query = new Parse.Query(Voting);
        query.find().then((results) => {
            
            const votingData = results.map((voting) =>  new dataVoting(voting));
            this.setState =({voting:votingData})

            
          }, (error) => {
           
            console.error('Error while fetching Voting', error);
          });
    }
    componentDidMount(){
    this.votingIntialData()
    }
    render(){
        return(
           <div>
               <NavHeader />
               <Container>
                <Row>
                    <Col>
                        <h1>Active Votings</h1>
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