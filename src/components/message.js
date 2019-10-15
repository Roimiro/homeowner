import React from 'react';
import { Row, Col, Image } from 'react-bootstrap'
import Parse from 'parse'
import dataMessage from '../data/dataMessage'




class Message extends React.Component {
    constructor(props){
        super(props)
        }
        
    
    // componentDidMount (){
    //     const Message = Parse.Object.extend('Message');
    //     const query = new Parse.Query(Message);
    //     query.find().then((results) => {
    //         // You can use the "get" method to get the value of an attribute
    //         // Ex: response.get("<ATTRIBUTE_NAME>")
            
    //         const messageArray = results.map(message => new dataMessage(message));
    //         console.log(messageArray)
    //         this.setState({message:messageArray})


    //     }, (error) => {
    //         console.error('Error while fetching Message', error);
    //     });
    // }
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <Image src={ require('../data/house.jpeg') } rounded />
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