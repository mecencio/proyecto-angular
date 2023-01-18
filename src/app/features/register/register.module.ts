import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class RegisterModule { }
