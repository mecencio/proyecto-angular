import { HomeModule } from './features/home/home.module';
import { StudentsModule } from './features/students/students.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './app-routing.module';
import { LayoutModule } from './features/layout/layout.module'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    StudentsModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
