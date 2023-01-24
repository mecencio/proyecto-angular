import { StudentService } from './../features/students/service/student.service';
import { BehaviorSubject, Observable, take } from 'rxjs';
import { Student } from '../core/models/student.model';

const FAKE_STUDENTS : Student[] = [
    {
        id: 1,
        firstName: "nombre1",
        lastName: "apellido1",
        address: "Calle falsa 1",
        city : "ciudad",
        province : "Provincia",
        country : "Pais",
        gender: "M",
        email: "mail@test.com",
        user: "user1",
        password: "123123",
        phone: "1154542121",
        isActive: true,
        age : 27,
        courses : [],
    },
    {
        id: 2,
        firstName: "nombre2",
        lastName: "apellido2",
        address: "Calle falsa 2",
        city : "ciudad",
        province : "Provincia",
        country : "Pais",
        gender: "M",
        email: "mail2@test.com",
        user: "user2",
        password: "123123",
        phone: "1154542121",
        isActive: true,
        age : 27,
        courses : [],
    },
]

export class StudentServiceMock {
    private students = new BehaviorSubject<Student[]>([]);
    public students$ : Observable<Student[]>;


    constructor() {
        this.students$ = this.students.asObservable();
    }

    getStudents () : Observable<any> {
        this.students.next(FAKE_STUDENTS)
        return this.students$;
    }

    addStudent(student : Student) : void {
        this.students$.pipe(take(1)).subscribe((currentStudent) =>
            this.students.next([
                ...currentStudent,
                {...student}
            ])
        )
    }

}