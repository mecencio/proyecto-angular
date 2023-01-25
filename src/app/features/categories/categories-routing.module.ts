import { CategoriesComponent } from './categories.component';
import { CategoriesDashboardComponent } from './pages/categories-dashboard/categories-dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CategoriesDetailComponent } from './pages/categories-detail/categories-detail.component';

const routes: Routes = [
  {
    path: '',
    component: CategoriesComponent,
    children: [
      {
        path: '',
        component: CategoriesDashboardComponent,
      },
      {
        path: 'detail/:id',
        component: CategoriesDetailComponent
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ]
})

export class CategoriesRoutingModule { }
