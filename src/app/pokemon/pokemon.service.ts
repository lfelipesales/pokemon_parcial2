import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonDetailDto } from './pokemonDetailDto';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  apiUrl : string = "https://pokeapi.co/api/v2/pokemon/";

  constructor(private http : HttpClient) { }

  getPokemons(name: string) : Observable<PokemonDetailDto>[] {
    let pokemons : Observable<PokemonDetailDto>[] = [];
    for (let i = 1; i <= 20; i++) {
      pokemons.push(this.http.get<PokemonDetailDto>(`${this.apiUrl}${i}`));
    }
    return pokemons;
  }
}
