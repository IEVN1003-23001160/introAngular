import { Component } from '@angular/core';

@Component({
  selector: 'app-validacion',
  standalone: false,
  styleUrl: './validacion.css',
  templateUrl: './validacion.html',
})
export class Validacion {

  usuario: string = '';
  contrasena: string = '';
  mensaje: string = '';
  
  usuarioCorrecto: string = 'leonardo';
  contrasenaCorrecta: string = '36912';

  validar(): void {
    if (this.usuario != this.usuarioCorrecto) {
      this.mensaje = 'El nombre de usuario no es válido.';

    }
    else if (this.contrasena != this.contrasenaCorrecta) {
      this.mensaje = 'La contraseña no es válida.';

    }
    else {
      this.mensaje = 'Bienvenido al sistema, ' + this.usuario + '.';

    }
  }
}