import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
 title:string ='Luis Leonardo Guajardo'

duplicarnumero(a:number):number{
  return a*2
}

pelicula={
  titulo: 'spider-Man',
  fechaLanzamiento: new Date(),
  precio: 2500
}
}
