import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StudentsStoreEffects } from './students-store/students-store.effects';
import { reducer, studentsStoreFeatureKey } from './students-store/students-store.reducer';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(studentsStoreFeatureKey, reducer),
    EffectsModule.forFeature([StudentsStoreEffects])
  ]
})
export class StudentsModule { }
