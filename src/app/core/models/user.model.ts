export class User {

    email: string;
    user: String;
    password: string;
    role: string;
    firstName: string;
    lastName: string;
    avatar: string;

    constructor(user: any) {
        this.email = user.email;
        this.user = user.user;
        this.password = user.password;
        this.role = user.role;
        this.firstName= "";
        this.lastName= "";
        this.avatar= "";
    }

}
