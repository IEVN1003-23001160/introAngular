import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  standalone: false,
  styleUrl: './operas-bas.css',
  templateUrl: './operas-bas.html',
})

export class OperasBas {

  num1: string = '';
  num2: string = '';
  num3: string = '';
  num4: string = '';
  resultado: number = 0;
  valorx: number = 0;
  valory: number = 0;
  operacion: string = '';

  sumar(): void {

    this.resultado = parseInt(this.num1) + parseInt(this.num2);

  }

  resta(): void {

    this.resultado = parseInt(this.num1) - parseInt(this.num2);

  }

  multiplicacion(): void {

    this.resultado = parseInt(this.num1) * parseInt(this.num2);

  }

  division(): void {

    this.resultado = parseInt(this.num1) / parseInt(this.num2);

  }


  calcular(): void {

    if (this.operacion === 'suma') {
      this.sumar();
    }

    if (this.operacion === 'resta') {
      this.resta();
    }

    if (this.operacion === 'multiplicacion') {
      this.multiplicacion();
    }

    if (this.operacion === 'division') {
      this.division();
    }

  }

  distancia(): void {
  this.resultado = Math.sqrt(
    Math.pow(this.valorx - parseInt(this.num3), 2) +
    Math.pow(this.valory - parseInt(this.num4), 2));
  }

}