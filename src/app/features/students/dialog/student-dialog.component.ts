import { Student } from '../../../core/models/student.model';
import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styleUrls: []
})
export class StudentDialogComponent {
  public studentForm: FormGroup;
  public titleDialog : String;
  public studentValue : Student;
  public addCourse : boolean;

  constructor(
    private readonly dialogRef : DialogRef, 
    @Inject(MAT_DIALOG_DATA) public data : any, 
    private form : FormBuilder
  ) {
      data.studentValue && (this.studentValue = data.studentValue);
  }

  ngOnInit(): void {
    this.studentForm = this.form.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      province: ['', [Validators.required]],
      country: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      user: ['', [Validators.required]],
      password: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      age: ['', [Validators.required]],
      isActive: [true],
      courses: this.form.group({
        id: ['', [Validators.required]],
        name: ['', [Validators.required]],
        state: ['', [Validators.required]],
        day: ['', [Validators.required]],
      })
    })
    this.studentForm.patchValue(this.studentValue)
  }

  onSelected(value : string){
    this.addCourse = (value == "true");
    console.log(this.addCourse)
    console.log(value)
  }

  close() {
    this.dialogRef.close();
  }
}
