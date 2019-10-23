class User {
    constructor(parseUser){
        this.id = parseUser.id;
        this.apartment = parseUser.get('apartment')
        this.isCommitteeMember = parseUser.get('isCommitteeMember')
    }
}
export default User;