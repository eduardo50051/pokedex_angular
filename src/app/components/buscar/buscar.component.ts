import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent {


  pokemons: any[] = []; 
  start: number = 0;   
  end: number = 1302; 
  limit: number = 1302;
  totalPokemons: number = 0; 
  
  searchTerm: string = ''; 

  constructor(private router: Router, private apiService: ApiService) {}

  ngOnInit(): void {
    this.carregarPokemons();
  }
  

  Sair(): void {
    localStorage.removeItem('estalogado');
    this.router.navigate(['/login']);
  }

  carregarPokemons(): void {
    this.apiService.getPokemonsgeral(this.start, this.end).subscribe(
      (response) => {
        this.pokemons = response.pokemons;
        this.totalPokemons = response.count; 
      },
      (error) => {
        console.error('Erro ao carregar Pokémon:', error); 
      }
    );
  }
  



  pesquisarPokemons(): void {
    if (this.searchTerm) {
      this.pokemons = this.pokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.carregarPokemons(); 
    }
  }

  resetFilter(): void {
    this.searchTerm = '';
    this.carregarPokemons();
  }
  
  

  

  

  carregarPorIntervalo(start: number, end: number): void {
    this.start = start;
    this.end = end;
    this.carregarPokemons();
  }
  

  
 

  navegarParaDetalhes(url: string): void {
    const pokemonId = this.extractPokemonId(url);
    this.router.navigate(['/details', pokemonId]);
  }


  extractPokemonId(url: string): string {
    const parts = url.split('/').filter(Boolean);
    return parts[parts.length - 1]; 
  }


}
