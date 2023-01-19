import { Subscription } from 'rxjs';
import { StudentService } from './../../service/student.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/core/models/student.model';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit, OnDestroy {
  public student : Student;
  private studentSubscription : Subscription;

  displayedColumns = ['id', 'name', 'state','day'];

  constructor(
    private _route: ActivatedRoute,
    private usersService : StudentService,
  ) { }

  ngOnInit(): void {
    this.studentSubscription = this.usersService.getStudent((this._route.snapshot.paramMap.get('id') || "")).subscribe(data => {
      this.student = new Student({...data[0]});
    });
  }

  ngOnDestroy(): void {
    if (this.studentSubscription != null) {
      this.studentSubscription.unsubscribe();
    }
  }
}
