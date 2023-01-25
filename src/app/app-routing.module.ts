import { AuthGuard } from './features/login/guards/auth.guard';
import { HomeComponent } from './features/home/home.component';
import { LayoutComponent } from './features/layout/layout.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./features/login/login.module').then((m) => m.LoginModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./features/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '', 
        component: HomeComponent
      },
      {
        path: 'students', 
        canActivate: [AuthGuard],
        loadChildren: () => import('./features/students/students.module').then((m) => m.StudentsModule)
      },
      {
        path: 'categories',
        canActivate: [AuthGuard],
        loadChildren: () => import('./features/categories/categories.module').then((m) => m.CategoriesModule)
      },
    ]
  },
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
