import { Component } from '@angular/core';

@Component({
  selector: 'app-triangulo-puntos',
  standalone: false,
  styleUrl: './triangulo-puntos.css',
  templateUrl: './triangulo-puntos.html',
})
export class TrianguloPuntos {

  x1: number = 0;
  y1: number = 0;

  x2: number = 0;
  y2: number = 0;

  x3: number = 0;
  y3: number = 0;

  area: number = 0;
  resultado: string = '';

  analizar(): void {

    this.area =
      (this.x1 * (this.y2 - this.y3) +
       this.x2 * (this.y3 - this.y1) +
       this.x3 * (this.y1 - this.y2)) / 2;

    if (this.area < 0) {
      this.area = this.area * -1;
    }
    if (this.area == 0) {

      this.resultado = 'Los puntos no forman un triángulo porque son colineales.';
    }
    else {
      this.resultado = 'Los puntos forman un triángulo.';

    }
  }
}