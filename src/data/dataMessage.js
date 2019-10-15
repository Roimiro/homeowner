

export class DataMessage {
    constructor(message){
    this.user = message.get('createdBy')
    this.title = message.get('title');
    this.details = message.get('details');
    this.priority = message.get('priority');
    this.comments = message.get('comments');
    }

}