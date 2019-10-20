
 class DataMessage {
    constructor(message){
    this.id = message.id
    this.user = message.get('createdBy')
    this.title = message.get('title');
    this.details = message.get('details');
    this.priority = message.get('priority');
    this.comments = message.get('comments');
    }

}

export default DataMessage