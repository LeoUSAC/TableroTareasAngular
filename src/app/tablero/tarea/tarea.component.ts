import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tarea } from 'src/app/clases/tarea';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.scss']
})
export class TareaComponent implements OnInit {
  @Input() listaEstados:Array<String>;
  @Input() tarea:Tarea;
  @Output() cambioEstado = new EventEmitter<Object>();
  constructor() { }

  ngOnInit(): void {
  }

  get estado() {
    return this.tarea ? this.tarea?.estado : '';
  }

  set estado(value) {
    if (!this.tarea) {
      this.tarea = {} as Tarea;
    }
    this.tarea.estado = value;
    this.cambioEstado.emit(this.tarea);
  }

}
