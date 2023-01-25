import { ConfirmDialogModule } from './shared/components/dialogs/confirm-dialog/confirm-dialog/confirm-dialog.module';
import { ConfirmDialogComponent } from './shared/components/dialogs/confirm-dialog/confirm-dialog/confirm-dialog.component';
import { LayoutModule } from './features/layout/layout.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    NgbModule,
    ConfirmDialogModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
