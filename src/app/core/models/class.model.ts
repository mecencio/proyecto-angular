export class Class {

    id: number;
    title: string;
    state: string;
    days : string;

    constructor (newClass : any) {
        this.id = newClass.id;
        this.title = newClass.title;
        this.state = newClass.state;
        this.days = newClass.days;
    }
}
