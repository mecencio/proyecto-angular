import { Component } from '@angular/core';
import { Student } from 'src/app/core/models/student.model';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent {
  public student : Student = new Student({id: 1, firstName: "Nicolas", lastName: "Temprano", address: "Calle falsa 1234", city: "Santa Fe", province: "Sante Fe", country: "Argentina", gender: "M", email: "ntemprano@mail.com", user: "ntemprano", password: "123123", phone: "1112341234", isActive: true, age: 27});
}
