import { Course } from './course.model';
export class Category {

    id: number;
    title: string;
    courses: Course[];

    constructor (category : any) {
        this.id = category.id;
        this.title = category.title;
        this.courses = category.courses;
    }
}
