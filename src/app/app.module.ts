import { LayoutModule } from './features/layout/layout.module';
import { ConfirmDialogModule } from './shared/components/dialogs/confirm-dialog/confirm-dialog/confirm-dialog.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppStoreModule } from './app-store.module';

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
    AppStoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
