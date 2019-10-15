import React from 'react';
import Message from '../components/message'
import MessageAcordiong from '../components/messageAcordion'
import Parse from 'parse'
import NavHeader from '../components/navHeader'
import MessageSearchBar from '../components/messageSearchBar'
import {Container} from 'react-bootstrap'

class Messages extends React.Component {
    render(){
       
        return(

            <div>

            <NavHeader/>
            <Container>
            <MessageSearchBar/>
            <MessageAcordiong/>
            </Container>
            </div>
            
        )
    }
}

export default Messages