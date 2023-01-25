import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogRef } from '@angular/cdk/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { Category } from 'src/app/core/models/category.model';

@Component({
  selector: 'app-categories-dialog',
  templateUrl: './categories-dialog.component.html',
  styleUrls: []
})
export class CategoriesDialogComponent implements OnInit {
  public categoriesForm : FormGroup;
  public titleDialog: string;
  public categoryValue : Category;

  constructor(
    private readonly dialogRef : DialogRef,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private form : FormBuilder
  ) {
    data.categoryValue && (this.categoryValue = data.categoryValue);
  }

  ngOnInit(): void {
    this.categoriesForm = this.form.group({
      title: ['', Validators.required],
    });
    this.categoriesForm.patchValue(this.categoryValue);
  }

  close() {
    this.dialogRef.close();
  }
}
