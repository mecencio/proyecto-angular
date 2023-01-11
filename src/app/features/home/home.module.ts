import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
  ]
})
export class HomeModule { }
