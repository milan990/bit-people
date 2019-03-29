class UserObj {
    constructor(gender, name, email, dobDate, picture, loginName) {
        this.gender = gender;
        this.name = name.first.charAt(0).toUpperCase() + name.first.slice(1) + " " + name.last.charAt(0).toUpperCase() + name.last.slice(1);
        this.email = email;
        this.dobDate = new Date(dobDate).toDateString();
        this.picture = picture;
        this.loginName = loginName;
    }
}

export default UserObj;