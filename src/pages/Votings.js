import React from 'react';
import Parse from 'parse';
import NavHeader from '../components/navHeader'
import { Container, Row, Col } from 'react-bootstrap'
import dataVoting from '../data/dataVotings'
import VotingAccordion from '../components/Votings Componnets/votingAccordion'


class Votings extends React.Component {
    constructor() {
        super()
        this.state = {
            voting: ['test'],
        }
        this.votingIntialData = this.votingIntialData.bind(this)
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
        if (this.state.voting[0] === 'test') {
            return (
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
        } else {
            return (
                <div>
                    <NavHeader />
                    <Container>
                        <Row>
                            <Col>
                                <h1>Active Votings</h1>
                                <VotingAccordion voting={this.state.voting} />
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
}
export default Votings