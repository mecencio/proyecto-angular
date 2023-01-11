export class Student {

    id: number;
    firstName: string;
    lastName: string;
    address: string;
    city : string;
    province : string;
    country : string;
    gender: string;
    email: string;
    user: String;
    password: string;
    phone: string;
    isActive: boolean;
    age : number;

    constructor(user: any) {
        this.id = user.id;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.address = user.address;
        this.city = user.city;
        this.province = user.province;
        this.country = user.country;
        this.gender = user.gender;
        this.email = user.email;
        this.user = user.user;
        this.password = user.password;
        this.phone = user.phone;
        this.isActive = user.isActive;
        this.age = user.age;
    }

}
