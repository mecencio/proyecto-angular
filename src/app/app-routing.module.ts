import { HomeComponent } from './features/home/home.component';
import { LayoutComponent } from './features/layout/layout.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path: '', component: LayoutComponent, children: [
    {path: '', component: HomeComponent},
    {path: 'students', loadChildren: () => import('./features/students/students.module').then(m => m.StudentsModule)},
  ]},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
