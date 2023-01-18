import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { StudentDialogComponent } from './dialog/student-dialog.component';
import { FullNamePipe } from './../../shared/pipes/full-name/full-name.pipe';
import { MaterialModule } from './../../shared/modules/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StudentsComponent,
    StudentDialogComponent,
    FullNamePipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    StudentsRoutingModule,
    ReactiveFormsModule,
  ]
})
export class StudentsModule {}
