import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableroComponent } from './tablero/tablero.component';
import { CarrilComponent } from './carril/carril.component';
import { TareaComponent } from './tarea/tarea.component';
import { AgregarComponent } from './agregar/agregar.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [TableroComponent, CarrilComponent, TareaComponent, AgregarComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[TableroComponent, CarrilComponent, TareaComponent]
})
export class TableroModule { }
