import { Component } from '@angular/core';
import {IHeroe} from '../heroe';

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
      descripcion: "Saiyajin criado en la Tierra. Guerrero de corazón puro que busca constantemente superar sus límites para proteger a sus seres queridos y al universo.",
      race: "Saiyajin",
      ki: 3000000
    },
    {
      imagen: "https://dragonball-api.com/characters/vegeta_normal.webp",
      nombre: "Vegeta",
      descripcion: "Príncipe de los Saiyajin. Orgulloso, disciplinado y eterno rival de Goku, impulsado por una determinación férrea para alcanzar el máximo poder.",
      race: "Saiyajin",
      ki: 2500000
    },
    {
      imagen: "https://dragonball-api.com/characters/picolo_normal.webp",
      nombre: "Piccolo",
      descripcion: "Sabio y táctico guerrero del planeta Namek. Antiguo rival de Goku convertido en mentor de Gohan y uno de los principales defensores de la Tierra.",
      race: "Namekiano",
      ki: 1500000
    },
    {
      imagen: "https://dragonball-api.com/characters/Freezer.webp",
      nombre: "Freezer",
      descripcion: "Tirano galáctico y líder del Imperio de Freezer. Conquistador despiadado responsable de la destrucción del planeta Vegeta.",
      race: "Raza de Freezer",
      ki: 120000000
    }

  ]
}