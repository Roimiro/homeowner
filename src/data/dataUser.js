class User {
    constructor(parseUser){
        this.id = parseUser.id;
        this.userName =parseUser.get('username')
        this.apartment = parseUser.get('apartment')
        this.isCommitteeMember = parseUser.get('isCommitteeMember')
    }
}
export default User;