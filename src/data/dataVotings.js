class dataVotings{
    constructor(voting){
        this.id =voting.id
        this.details = voting.get('details')
        this.title = voting.get('title')
        this.dueDate = voting.get('dueDate')
        this.votes = voting.get('votes')
        this.user = voting.get('createdBy')
        this.options = voting.get('options')
    }

}
export default dataVotings