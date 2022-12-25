import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styleUrls: []
})
export class StudentDialogComponent {
  public studentForm: FormGroup;
  public titleDialog : String;
  public studentValue : String;

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
      user: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      isActive: []
    })
    this.studentForm.patchValue(this.studentValue)
  }


  close() {
    this.dialogRef.close();
  }
}
