import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { PokemonDetailDto } from '../pokemonDetailDto';

@Component({
  selector: 'app-pokemon-detalle',
  templateUrl: './pokemon-detalle.component.html',
  styleUrls: ['./pokemon-detalle.component.css']
})
export class PokemonDetalleComponent implements OnInit {

  pokemonId!: string;
  @Input() pokemonDetailDto!: PokemonDetailDto;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
  ) {}

  getPokemon(){
    this.pokemonService.getPokemon(this.pokemonId).subscribe(apiData => {
      this.pokemonDetailDto = apiData;
    })
  }

  ngOnInit() {
    if(this.pokemonDetailDto === undefined){
      this.pokemonId = this.route.snapshot.paramMap.get('id')!
      if(this.pokemonId){
        this.getPokemon();
      }
    }
  }
}

