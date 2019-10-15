import React from 'react';
import Message from '../components/message'
import MessageAcordiong from '../components/messageAcordion'
import Parse from 'parse'
import NavHeader from '../components/navHeader'
import MessageSearchBar from '../components/messageSearchBar'

class Messages extends React.Component {
    render(){
       
        return(

            <div>

            <NavHeader/>
            <MessageSearchBar/>
            <MessageAcordiong/>
            </div>
        )
    }
}

export default Messages