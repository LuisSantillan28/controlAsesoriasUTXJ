import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnoRoutingModule } from './alumno-routing.module';
import { FormComponent } from './components/form/form.component';
import { AddDialogComponent } from './components/add-dialog/add-dialog.component';
import { MaterialComponentsModule } from '../material-components.module';



@NgModule({
  declarations: [
    FormComponent,
    AddDialogComponent
  ],
  imports: [
    CommonModule,
    AlumnoRoutingModule,
    MaterialComponentsModule
  ]
})
export class AlumnoModule { }
