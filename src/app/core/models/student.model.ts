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
    courses : string[];

    constructor(student: any) {
        this.id = student.id;
        this.firstName = student.firstName;
        this.lastName = student.lastName;
        this.address = student.address;
        this.city = student.city;
        this.province = student.province;
        this.country = student.country;
        this.gender = student.gender;
        this.email = student.email;
        this.user = student.student;
        this.password = student.password;
        this.phone = student.phone;
        this.isActive = student.isActive;
        this.age = student.age;
        this.courses = student.courses;
    }

}
