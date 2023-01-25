import { Class } from 'src/app/core/models/class.model';
import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-classes-dialog',
  templateUrl: './classes-dialog.component.html',
  styleUrls: []
})
export class ClassesDialogComponent implements OnInit {
  public classesForm : FormGroup;
  public titleDialog : String;
  public classesValue : Class;
  public options = [
    {value: "Finished", viewValue: "Finalizado" },
    {value: "Deserted", viewValue: "Abandonado" },
    {value: "In Progress", viewValue: "En curso" },
    {value: "Coming Soon", viewValue: "Próximo" }
  ];

  constructor (
    private readonly dialogRef : DialogRef,
    @Inject(MAT_DIALOG_DATA) public data : any,
    private form : FormBuilder,
  ) {
    data.classesValue && (this.classesValue = data.classesValue);
  }

  ngOnInit(): void {
    this.classesForm = this.form.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      state: ['', Validators.required],
      days: ['', Validators.required],
    });
    this.classesForm.patchValue(this.classesValue);
  }

  close() {
    this.dialogRef.close();
  }
}
