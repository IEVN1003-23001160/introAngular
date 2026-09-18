import { Component } from '@angular/core';

@Component({
  selector: 'app-figuras',
  standalone: false,
  styleUrl: './figuras.css',
  templateUrl: './figuras.html',
})
export class Figuras {

  num1: string = '';
  num2: string = '';
  resultado: number = 0;
  operacion: string = '';

  rectangulo(): void {
    this.resultado = parseFloat(this.num1) * parseFloat(this.num2);
  }

  circulo(): void {
    this.resultado = Math.PI * Math.pow(parseFloat(this.num1), 2);
  }

  pentagono(): void {
    this.resultado = (5 * parseFloat(this.num1) * parseFloat(this.num2)) / 2;
  }

  cuadrado(): void {
    this.resultado = parseFloat(this.num1) * parseFloat(this.num1);
  }

  triangulo(): void {
    this.resultado = (parseFloat(this.num1) * parseFloat(this.num2)) / 2;
  }

  calcular(): void {

    if (this.operacion === 'cuadrado') {
      this.cuadrado();
    }

    if (this.operacion === 'rectangulo') {
      this.rectangulo();
    }

    if (this.operacion === 'circulo') {
      this.circulo();
    }

    if (this.operacion === 'pentagono') {
      this.pentagono();
    }

    if (this.operacion === 'triangulo') {
      this.triangulo();
    }

  }
}