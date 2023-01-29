import { isDevMode, NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { appReducer } from './store/app.reducer';
import { StudentsModule } from './store/students/students.module';



@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot(appReducer, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([]),
    StudentsModule
  ]
})
export class AppStoreModule { }
