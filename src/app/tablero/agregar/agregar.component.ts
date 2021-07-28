import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {

  @Output() onClick = new EventEmitter<String>();
  @Input() descripcion="button";
  titulo="";

  constructor() { }

  ngOnInit(): void {
    console.log(this.titulo);
    
  }

  internalClick() {
    this.onClick.emit(this.titulo);
  }

}
