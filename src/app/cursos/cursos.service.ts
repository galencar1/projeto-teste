import { Injectable } from '@angular/core';

@Injectable({ // Injeção de dependência
  providedIn: 'root'
})
export class CursosService {

  constructor() { } 
  getCursos(){
    return ['Java', 'Ext JS', 'Angular'];
  }
}
