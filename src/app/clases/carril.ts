import {Tarea} from './tarea'
export type Carril = {
    id: number;
    titulo: string;
    estado:number;
    listaTareas : Array<Tarea>;
  }
  