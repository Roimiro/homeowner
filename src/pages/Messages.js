import React from 'react';
import MessageAcordiong from '../components/messageAcordion'
import Parse from 'parse'

import MessageSearchBar from '../components/messageSearchBar'
import { Container, Button } from 'react-bootstrap'
import dataMessage from '../data/dataMessage'
import MyVerticallyCenteredModal from '../components/newMessageModal'

class Messages extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            message: ['test'],
            setModalShow: false,
            modalShow: false,
            title: "",
            details: "",
            priority: "normal"
        }
        this.searchBarFilter = this.searchBarFilter.bind(this)
        this.searchBarPriorityFilter = this.searchBarPriorityFilter.bind(this)
        this.setModalShow = this.setModalShow.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
        this.titleHandler = this.titleHandler.bind(this)
        this.detailsHandler = this.detailsHandler.bind(this)
        this.priorityHandler = this.priorityHandler.bind(this)
        this.searchBarDateSort = this.searchBarDateSort.bind(this)
        this.deleteMesaage = this.deleteMesaage.bind(this)
    }
    //lifting title state up form messageModal
    titleHandler(title) {
        this.setState({ title })

        //lifting details state up form messageModal
    }
    detailsHandler(details) {
        this.setState({ details })
    }
    //lifting pririty state up form messageModal

    priorityHandler(priority) {
        this.setState({ priority })
    }

    submitHandler() {
        const Message = Parse.Object.extend('Message');
        const myNewObject = new Message();
        myNewObject.set('createdBy', Parse.User.current());
        myNewObject.set('title', this.state.title);
        myNewObject.set('details', this.state.details);
        myNewObject.set('priority', [this.state.priority]);
        myNewObject.save().then(
            (result) => {
                console.log('ParseObject created', result);
            },
            (error) => {

                console.error('Error while creating ParseObject: ', error);
            })

        this.parseIntialQuery();

    }
    setModalShow(e) {
        // e.preventDefault();
        if (this.state.setModalShow) {
            this.setState({ setModalShow: false })
        } else {
            this.setState({ setModalShow: true })
        }
    }
    searchBarFilter(value) {

        if (value) {
            const filter = Parse.Object.extend('Message');
            const query = new Parse.Query(filter);
            query.equalTo("createdBy", this.props.acactiveuser);
            query.fullText('title', value)
            this.QueryMapping(query)
        } else {
            this.parseIntialQuery();

        }
    }
    searchBarPriorityFilter(value) {
        console.log(value)
        if (value) {
            const filter = Parse.Object.extend('Message');
            const query = new Parse.Query(filter);
            query.equalTo("createdBy", this.props.acactiveuser);
            query.equalTo('priority', value)
            this.QueryMapping(query)

        } else {
            this.parseIntialQuery();

        }
    }
    searchBarDateSort(SortChecked) {

        const Message = Parse.Object.extend('Message');
        const query = new Parse.Query(Message);
        query.equalTo("createdBy", this.props.acactiveuser);
        query.descending('createdAt')
        if (SortChecked) {
            this.QueryMapping(query)
        } else {
            this.parseIntialQuery();
        }
    }
    QueryMapping(query) {
        query.find().then((results) => {
            // You can use the "get" method to get the value of an attribute
            // Ex: response.get("<ATTRIBUTE_NAME>")

            const messageArray = results.map(message => new dataMessage(message));
            this.setState({ message: messageArray })

        }, (error) => {
            console.error('Error while fetching Message', error);
        });
    }
    parseIntialQuery() {
        const Message = Parse.Object.extend('Message');
        const query = new Parse.Query(Message);
        query.equalTo("createdBy", this.props.acactiveuser);
        query.find().then((results) => {
            // You can use the "get" method to get the value of an attribute
            // Ex: response.get("<ATTRIBUTE_NAME>")

            const messageArray = results.map((message) => new dataMessage(message));
            this.setState({ message: messageArray })

        }, (error) => {
            console.error('Error while fetching Message', error);
        });
    }
    deleteMesaage(id) {
        const Message = Parse.Object.extend('Message');
        const query = new Parse.Query(Message);
        // here you put the objectId that you want to delete
        query.get(id).then((object) => {
            object.destroy().then((response) => {

            }, (error) => {

                console.error('Error while deleting Message', error);
            });
        });
        this.parseIntialQuery();
    }
    componentDidMount() {
        this.parseIntialQuery();
    }
    render() {
        if (this.state.message[0] === 'test') {
            return (

                <div>
                    
                    <Container>
                        <MessageSearchBar
                            filter={this.searchBarFilter}
                            priorityFilter={this.searchBarPriorityFilter}
                            dateSort={this.searchBarDateSort}
                            prioritySort={this.searchBarprioritySort}
                        />
                        <Button className='btnMsg' variant="primary" onClick={this.setModalShow}>New Message</Button>
                        <MyVerticallyCenteredModal
                            show={this.state.setModalShow}
                            onHide={this.setModalShow}
                            submitbtn={this.submitHandler}
                            title={this.titleHandler}
                            details={this.detailsHandler}
                            priority={this.priorityHandler}
                        />
                    </Container>
                </div>

            )
        } else {
            return (

                <div>
                   
                    <Container>
                        <MessageSearchBar
                            filter={this.searchBarFilter}
                            priorityFilter={this.searchBarPriorityFilter}
                            dateSort={this.searchBarDateSort}
                            prioritySort={this.searchBarprioritySort}
                        />
                        <Button className='btnMsg' variant="primary" onClick={this.setModalShow}>New Message</Button>
                        <MyVerticallyCenteredModal
                            show={this.state.setModalShow}
                            onHide={this.setModalShow}
                            submitbtn={this.submitHandler}
                            title={this.titleHandler}
                            details={this.detailsHandler}
                            priority={this.priorityHandler}
                        />
                        <MessageAcordiong messages={this.state.message} delete={this.deleteMesaage} />
                    </Container>
                </div>

            )
        }
    }


}

export default Messages