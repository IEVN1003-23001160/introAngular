import { Component } from '@angular/core';

@Component({
  selector: 'app-palindromo',
  standalone: false,
  styleUrl: './palindromo.css',
  templateUrl: './palindromo.html',
})
export class Palindromo {

  frase: string = '';
  vocales: number = 0;
  consonantes: number = 0;
  resultado: string = '';

  vocalesLista: string[] = ['a', 'e', 'i', 'o', 'u'];

  consonantesLista: string[] = [
    'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm',
    'n', 'ñ', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x',
    'y', 'z'
  ];

  caracteres: string[] = [];
  analizar(): void {

    this.vocales = 0;
    this.consonantes = 0;
    this.caracteres = [];
    let contador = 0;

    for (const caracter of this.frase) {
      if (caracter != ' ') {
        this.caracteres[contador] = caracter;
        contador++;

        let esVocal = false;
        let esConsonante = false;
        for (const vocal of this.vocalesLista) {
          if (caracter == vocal) {
            esVocal = true;
          }
        }

        for (const consonante of this.consonantesLista) {
          if (caracter == consonante) {
            esConsonante = true;

          }
        }
        if (esVocal == true) {
          this.vocales++;
        }
        if (esConsonante == true) {
          this.consonantes++;

        }
      }
    }

    let palindromo: boolean = true;
    for (let i = 0; i < contador / 2; i++) {
      if (this.caracteres[i] != this.caracteres[contador - 1 - i]) {
        palindromo = false;
      }
    }
    if (palindromo == true) {
      this.resultado = 'Si es palíndromo';
    }
    else {
      this.resultado = 'No es palíndromo';
    }
  }
}