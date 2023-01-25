import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { StudentDialogComponent } from './dialogs/student-dialog/student-dialog.component';
import { FullNamePipe } from './../../shared/pipes/full-name/full-name.pipe';
import { MaterialModule } from './../../shared/modules/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentDetailComponent } from './pages/student-detail/student-detail.component';
import { StudentDashboardComponent } from './pages/student-dashboard/student-dashboard.component';
import { ClassesDialogComponent } from './dialogs/classes-dialog/classes-dialog.component';


@NgModule({
  declarations: [
    StudentsComponent,
    StudentDialogComponent,
    FullNamePipe,
    StudentDetailComponent,
    StudentDashboardComponent,
    ClassesDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    StudentsRoutingModule,
    ReactiveFormsModule,
  ]
})
export class StudentsModule {}
