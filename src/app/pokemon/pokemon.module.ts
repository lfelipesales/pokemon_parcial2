import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListarComponent } from './pokemon-listar/pokemon-listar.component';
import { PokemonDetalleComponent } from './pokemon-detalle/pokemon-detalle.component';
import { PokemonsRoutingModule } from './pokemon-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PokemonsRoutingModule
  ],
  declarations: [PokemonListarComponent, PokemonDetalleComponent],
  exports:[PokemonListarComponent, PokemonDetalleComponent]
})
export class PokemonModule { }
