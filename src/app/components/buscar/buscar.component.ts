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
  isLoading: boolean = true; // Indica se os dados estão sendo carregados
  noResults: boolean = false; // Indica se não há resultados na busca

  constructor(private router: Router, private apiService: ApiService) {}

  ngOnInit(): void {
    this.carregarPokemons();
  }

  Sair(): void {
    localStorage.removeItem('estalogado');
    this.router.navigate(['/login']);
  }

  carregarPokemons(): void {
    this.isLoading = true; 
    this.apiService.getPokemonsgeral(this.start, this.end).subscribe(
      (response) => {
        this.pokemons = response.pokemons;
        this.totalPokemons = response.count;
        this.isLoading = false; 
        this.noResults = this.pokemons.length === 0;
      },
      (error) => {
        console.error('Erro ao carregar Pokémon:', error);
        this.isLoading = false; 
      }
    );
  }

  pesquisarPokemons(): void {
    if (this.searchTerm) {
      const filteredPokemons = this.pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
      this.pokemons = filteredPokemons;
      this.noResults = filteredPokemons.length === 0;
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
