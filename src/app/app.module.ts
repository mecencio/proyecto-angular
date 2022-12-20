import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { StudentsComponent } from './shared/components/students/students.component';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './shared/components/forms/register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/modules/material.module';
import { NavbarDialogComponent } from './shared/components/navbar-dialog/navbar-dialog.component';
import { StudentDialogComponent } from './shared/components/student-dialog/student-dialog.component';
import { FullNamePipe } from './shared/pipes/full-name/full-name.pipe';
import { TitlesStyleDirective } from './shared/directives/titles-style/titles-style.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StudentsComponent,
    ToolbarComponent,
    RegisterComponent,
    NavbarDialogComponent,
    StudentDialogComponent,
    FullNamePipe,
    TitlesStyleDirective,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
