export class User {

    email: string;
    user: String;
    password: string;
    role: string;

    constructor(user: any) {
        this.email = user.email;
        this.user = user.user;
        this.password = user.password;
        this.role = user.role;
    }

}
