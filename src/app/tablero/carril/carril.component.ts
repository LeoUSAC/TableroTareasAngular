import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Carril } from 'src/app/clases/carril';
import { Tarea } from 'src/app/clases/tarea';

@Component({
  selector: 'app-carril',
  templateUrl: './carril.component.html',
  styleUrls: ['./carril.component.scss']
})
export class CarrilComponent implements OnInit {

  @Input() carril:Carril;
  @Input() listaEstados:Array<String>;
  @Output() cambioCarril = new EventEmitter<Object>();
  @Output() eliminarCarril = new EventEmitter<Object>();
  status='';

  constructor() { }

  ngOnInit(): void {
  }

  cambioEstado(tarea:Tarea){
    console.log('cambio',tarea);
    this.carril.listaTareas.forEach( (item, index) => {
      if(item === tarea)this.carril.listaTareas.splice(index,1);
    });
    this.cambioCarril.emit(tarea);
  }

  delete(){
    this.eliminarCarril.emit(this.carril);
  }



}
