import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HeroesList } from './heroes/heroes-list/heroes-list';
import { HeroesFilterPipe } from './heroes/heroes-filter-pipe';
import { OperasBas } from './formularios/operas-bas/operas-bas';
import { FormsModule } from '@angular/forms';
import { Figuras } from './formulario/figuras/figuras';
import { Palindromo } from './formulario/palindromo/palindromo';
import { Validacion } from './formulario/validacion/validacion';
import { TrianguloPuntos } from './formulario/triangulo-puntos/triangulo-puntos';

@NgModule({
  declarations: [
    App,
    HeroesList,
    HeroesFilterPipe,
    OperasBas,
    Figuras,
    Palindromo,
    Validacion,
    TrianguloPuntos,
  ],

  imports: [BrowserModule, AppRoutingModule, FormsModule],

  providers: [provideBrowserGlobalErrorListeners()],

  bootstrap: [App],
})
export class AppModule {}
