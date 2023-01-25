export class Course {

    id: number;
    title: string;

    constructor (course : any) {
        this.id = course.id;
        this.title = course.title;
    }
}
