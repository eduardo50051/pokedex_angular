import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-geracao',
  templateUrl: './geracao.component.html',
  styleUrls: ['./geracao.component.scss']
})
export class GeracaoComponent {

  pokemons: any[] = []; 
  start: number = 0;   
  end: number = 150; 
  limit: number = 150;
  totalPokemons: number = 0; 
  

  geracaoIntervalos: { [key: string]: { start: number; end: number } } = {
    '1': { start: 0, end: 150 },
    '2': { start: 151, end: 250 },
    '3': { start: 251, end: 385 },
    '4': { start: 386, end: 492 },
    '5': { start: 493, end: 648 },
    '6': { start: 649, end: 720 },
    '7': { start: 721, end: 808 },
    '8': { start: 809, end: 889 },
  };

  constructor(private router: Router, private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      const id = +params['id'] || 1; 
      const intervalo = this.geracaoIntervalos[id]; 

      if (intervalo) {
        this.start = intervalo.start;
        this.end = intervalo.end;
        console.log(`Geração: ${id}, Start: ${this.start}, End: ${this.end}`);
        this.carregarPokemons();
      } else {
        console.error(`Geração ${id} não encontrada.`);
        this.router.navigate(['/error']); 
      }
    });
    
    
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
  



  get paginaAtual(): number {
    return Math.floor(this.start / 20) + 1;
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
