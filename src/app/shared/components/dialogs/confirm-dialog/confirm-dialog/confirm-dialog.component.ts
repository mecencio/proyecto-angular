import { DialogRef } from '@angular/cdk/dialog';
import { Component, } from '@angular/core';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: []
})
export class ConfirmDialogComponent {
  public titleDialog : String;

  constructor(
    private readonly dialogRef : DialogRef, 
  ) { }


  close() {
    this.dialogRef.close();
  }

}
