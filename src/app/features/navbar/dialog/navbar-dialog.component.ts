import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-navbar-dialog',
  templateUrl: './navbar-dialog.component.html',
  styleUrls: []
})
export class NavbarDialogComponent {

  public navbarForm: FormGroup;
  public titleDialog : String;
  public titleValue : String;

  constructor(
    private readonly dialogRef : DialogRef, 
    @Inject(MAT_DIALOG_DATA) public data : any, 
    private form : FormBuilder
  ) {
      data.titleValue && (this.titleValue = data.titleValue);
  }

  ngOnInit(): void {
    this.navbarForm = this.form.group({
      title: ['', [Validators.required]],
    })
    this.titleValue?this.navbarForm.patchValue({title: this.titleValue}):'';
  }

  close() {
    this.dialogRef.close();
  }
}
