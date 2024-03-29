import { Student } from '../../../../core/models/student.model';
import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styleUrls: []
})
export class StudentDialogComponent implements OnInit {
  public studentForm: FormGroup;
  public titleDialog : String;
  public studentValue : Student;

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
      isActive: [true]
    })
    this.studentForm.patchValue(this.studentValue)
  }

  close() {
    this.dialogRef.close();
  }
}
