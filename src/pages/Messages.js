import React from 'react';
import Message from '../components/message'
import MessageAcordiong from '../components/messageAcordion'
import Parse from 'parse'
import NavHeader from '../components/navHeader'
import MessageSearchBar from '../components/messageSearchBar'
import {Container} from 'react-bootstrap'
import dataMessage from '../data/dataMessage'

class Messages extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            message : ['test'],
        }
        this.searchBarFilter = this.searchBarFilter.bind(this)
    }
    searchBarFilter (value){
        
        if(value){
        const filter = Parse.Object.extend('Message');
        const query = new Parse.Query(filter);
        query.fullText('title',value)
        query.find().then((results) => {
            // You can use the "get" method to get the value of an attribute
            // Ex: response.get("<ATTRIBUTE_NAME>")
            
            const messageArray = results.map(message => new dataMessage(message));
            this.setState({message:messageArray})
            
        }, (error) => {
            console.error('Error while fetching Message', error);
        });
    }   else{
        this.parseIntialQuery();

    }
}
    parseIntialQuery(){
        const Message = Parse.Object.extend('Message');
        const query = new Parse.Query(Message);
        query.find().then((results) => {
            // You can use the "get" method to get the value of an attribute
            // Ex: response.get("<ATTRIBUTE_NAME>")
            
            const messageArray = results.map(message => new dataMessage(message));
            this.setState({message:messageArray})
            
        }, (error) => {
            console.error('Error while fetching Message', error);
        }); 
    }
    
    componentDidMount (){
       this.parseIntialQuery();
    }
    render(){
       if(this.state.message[0] ==='test'){
        return(

            <div>
            <NavHeader/>
            <Container>
            <MessageSearchBar/>
            </Container>
            </div>
            
        )
    }else {
        return(

            <div>
            <NavHeader/>
            <Container>
            <MessageSearchBar filter={this.searchBarFilter}/>
            <MessageAcordiong messages={this.state.message}/>
            </Container>
            </div>
            
        )
    }
    }
       
        
}

export default Messages