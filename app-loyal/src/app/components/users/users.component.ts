import { Component, OnInit } from '@angular/core';


export interface Articulo {
  id: number,
  titulo: string,
}


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})


export class UsersComponent implements OnInit {
  nombre: string = 'Carlos lopez'
  lista:string[] = [];
  articulo: Articulo = {
    id: 1,
    titulo: 'yo'
  };

  constructor() {
    //cargamos la lista cuando nace componente
    this.lista.push('primero');
    this.lista.push('segundo');
  }

  ngOnInit(): void {
  }

}
