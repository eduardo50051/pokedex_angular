import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.scss']
})
export class TelaInicialComponent implements OnInit {
  pokemons: any[] = []; 
  start: number = 0;   
  end: number = 19; 
  limit: number = 30;
  
  constructor(private router: Router, private apiService: ApiService) {}

  ngOnInit(): void {
    this.carregarPokemons();
    this.apiService.getPokemonsgeral().subscribe((data) => {
      this.pokemons = data;
    });
  }

  Sair(): void {
    localStorage.removeItem('estalogado');
    this.router.navigate(['/login']);
  }

  carregarPokemons(): void {
    this.apiService.getPokemonsgeral(this.start, this.end).subscribe(
      (response) => {
        this.pokemons = response; 
        console.log(this.pokemons); 
      },
      (error) => {
        console.error('Erro ao carregar Pokémon:', error); 
      }
    );
  }


 
  carregarPorIntervalo(start: number, end: number): void {
    this.start = start;
    this.end = end;
    this.carregarPokemons();  
  }

  
  carregarProximaPagina(): void {
    this.start += 100;
    this.end += 100;
    this.carregarPokemons();
  }


  carregarPaginaAnterior(): void {
    this.start = Math.max(0, this.start - 100);  
    this.end = this.start + 100;
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
