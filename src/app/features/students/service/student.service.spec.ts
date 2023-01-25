import { StudentService } from './student.service';
import { TestBed } from '@angular/core/testing';

fdescribe('StudentService', () => {
    let studentService: StudentService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        studentService = TestBed.inject(StudentService);
    });

    it('should be created', () => {
        expect(studentService).toBeTruthy();
    });
});