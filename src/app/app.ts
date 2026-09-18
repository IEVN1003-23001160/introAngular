import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html'
})
export class App {
  
  title:string = 'Hernandez Garcia Jesus Emmanuel'


  duplicarnumero(a:number):number{
    return a*2;
  }

  pelicula={
    titulo: 'Spiderman',
    fechaLanzamiento: new Date(),
    precio: 2353
  }

}