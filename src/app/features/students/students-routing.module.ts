import { StudentDashboardComponent } from './pages/student-dashboard/student-dashboard.component';
import { StudentDetailComponent } from './pages/student-detail/student-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './students.component';

const routes: Routes = [
  {
    path: '', 
    component: StudentsComponent,
    children: [
      {
        path: '',
        component: StudentDashboardComponent
      },
      {
        path: 'detail',
        component: StudentDetailComponent
      },
    ]
  },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class StudentsRoutingModule { }
