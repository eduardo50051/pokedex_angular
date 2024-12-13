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

  constructor(private router: Router, private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadPokemons();
  }

  Sair(): void {
    localStorage.removeItem('estalogado');
    this.router.navigate(['/login']);
  }

  loadPokemons(): void {
   
   
    this.apiService.getPokemonsgeral(0, 151).subscribe(
    
    
      (response) => {
        this.pokemons = response.results; 
        console.log(this.pokemons); 
      },
    
    
      (error) => {
        console.error('Erro ao carregar Pokémon:', error); 
      }
    );
  
  
  }
}
