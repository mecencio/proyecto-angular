import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogRef } from '@angular/cdk/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { Course } from 'src/app/core/models/course.model';

@Component({
  selector: 'app-courses-dialog',
  templateUrl: './courses-dialog.component.html',
  styleUrls: []
})
export class CoursesDialogComponent implements OnInit {
  public coursesForm : FormGroup;
  public titleDialog : string;
  public courseValue : Course;

  constructor (
    private readonly dialogRef : DialogRef,
    @Inject(MAT_DIALOG_DATA) public data : any,
    private form : FormBuilder,
  ) { 
    data.courseValue && (this.courseValue = data.courseValue)
  }

  ngOnInit(): void {
    this.coursesForm = this.form.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
    })
    this.coursesForm.patchValue(this.courseValue);
  }

  close() {
    this.dialogRef.close();
  }
}
