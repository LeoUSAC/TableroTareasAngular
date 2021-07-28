import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/clases/tarea';
import {Carril} from '../../clases/carril'

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.scss']
})
export class TableroComponent implements OnInit {

  listaEstados : Array<String>=['Tarea Sin Catalogar'];
  

   a:Tarea={
    id: 1,
    titulo:'Tarea1',
    estado : "Tarea Sin Catalogar"
  }

  listaCarriles : Array<Carril> =[
    {
      id: 1,
      titulo: 'Tarea Sin Catalogar',
      estado:1,
      listaTareas :[
        this.a
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }


  agregarTarea(e){
    let item={
      id: 1,
      titulo:e,
      estado : "Tarea Sin Catalogar"
    }
    this.listaCarriles[0].listaTareas.push(item)
  }

  agregarCarril(titulo){
    const idsArray = this.listaCarriles.map(element => element.id)
    const newId = Math.max(...idsArray) + 1;
    let temp:Carril={
      id:newId,
      estado:1,
      listaTareas:[],
      titulo:titulo
    }
    this.listaCarriles.push(temp)
    this.listaEstados=this.listaCarriles.map(element => element.titulo)
  }

  cambioCarril(tarea:Tarea){
    console.log('ins tarea', tarea);
    this.listaCarriles.forEach( (item:Carril, index) => {
      if(item.titulo=== tarea.estado)item.listaTareas.push(tarea);
    })
  }

  eliminarCarril(carril:Carril){
    this.listaCarriles.forEach( (item, index) => {
      if(item === carril){
        this.listaCarriles[0].listaTareas.push(...item.listaTareas)
        this.listaCarriles.splice(index,1);
      }
    });
  }
}
