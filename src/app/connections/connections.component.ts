import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connections',
  templateUrl: './connections.component.html',
  styleUrls: []
})
export class ConnectionsComponent implements OnInit {

  public personas = [
    {nombre:'Juan Perez', estado:'Conectado', ultimaConexion: new Date()},
    {nombre:'Marta Sanchez', estado:'Desconectado', ultimaConexion: new Date("2022-11-29")},
    {nombre:'Carlos Lopez', estado:'Conectado', ultimaConexion: new Date()}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
