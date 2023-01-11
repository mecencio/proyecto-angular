export class Category {

    id: number;
    title: string;
    courses: string[];

    constructor (category : any) {
        this.id = category.id;
        this.title = category.title;
        this.courses = category.courses;
    }
}
