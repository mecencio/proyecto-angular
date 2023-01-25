import { Student } from 'src/app/core/models/student.model';
import { StudentDialogComponent } from './../../dialogs/student-dialog/student-dialog.component';
import { StudentServiceMock } from './../../../../mocks/students.service.mock';
import { StudentService } from './../../service/student.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StudentDashboardComponent } from './student-dashboard.component';
import { EMPTY, Observable, of } from 'rxjs';

fdescribe('StudentDashboardComponent', () => {
    let component: StudentDashboardComponent;
    let fixture: ComponentFixture<StudentDashboardComponent>;
    let studentService : StudentService;
    let spyLoadstudents: jasmine.Spy;
    let spyAddStudent : jasmine.Spy;
    let matDialogService = jasmine.createSpyObj<MatDialog>('MatDialog', ['open']);

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [StudentDashboardComponent, StudentDialogComponent],
            providers: [
                {
                    provide: MatDialog,
                    useValue: matDialogService,
                },
                { provide: StudentService, useClass: StudentServiceMock },
            ]
        })
        .compileComponents();

        fixture = TestBed.createComponent(StudentDashboardComponent);
        component = fixture.componentInstance;
        studentService = TestBed.inject(StudentService)
        spyLoadstudents = spyOn(studentService, 'getStudents').and.callThrough();
        spyAddStudent = spyOn(studentService, "addStudent").and.callThrough();
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('Debe cargar los estudiantes cuando carga el componente', () => {
        component.ngOnInit();
        expect(spyLoadstudents).toHaveBeenCalled();
    })

    it('Debe agregar un nuevo usuario', () => {
        // const student = new Student ({
        //     id : '',
        //     firstName : '',
        //     lastName : '',
        //     address : '',
        //     city : '',
        //     province : '',
        //     country : '',
        //     gender : '',
        //     email : '',
        //     user : '',
        //     password : '',
        //     phone : '',
        //     isActive : '',
        //     age : '',
        //     courses : [],
        // })
        // const openDialogSpy = spyOn(component.studentDialogService, 'open')
        // .and
        // .returnValue({afterClosed: () => of({})} as MatDialogRef<typeof component>);
        // component.addStudent();
        // expect(spyAddStudent).toHaveBeenCalled();
    })
});