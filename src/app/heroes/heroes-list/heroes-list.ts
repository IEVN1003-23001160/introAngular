import { Component } from '@angular/core';
 
@Component({
  selector: 'app-heroes-list',
  standalone: false,
  styleUrl: './heroes-list.css',
  templateUrl: './heroes-list.html',
})
export class HeroesList {
 
 
  imagenWidth:number=40;
  imagenMargin:number=2;
  muestraImagen:boolean=true;
  listFilter:string='';

  showImage():void{
    this.muestraImagen=!this.muestraImagen;

  }
 
 
  heroes:any[]=[
 
    {
      imagen: "https://dragonball-api.com/characters/goku_normal.webp",
      nombre: "Goku",
      descripcion: "Saiyajin salvador del universo.",
      race: "Sayayin",
      ki: 3500
    },
    {
      imagen: "https://dragonball-api.com/characters/vegeta_normal.webp",
      nombre: "Vegeta",
      descripcion: "Príncipe de los Saiyajin.",
      race: "Sayayin",
      ki: 2550
    },
    {
      imagen: "https://dragonball-api.com/characters/picolo_normal.webp",
      nombre: "Piccolo",
      descripcion: "Tacticamente letal.",
      race: "Alienigena",
      ki: 1588
    },
    {
      imagen: "https://dragonball-api.com/characters/Freezer.webp",
      nombre: "Freezer",
      descripcion: "Tirano inter galactico.",
      race: "Raza de Freezer",
      ki: 10000
    }
 
  ]
}