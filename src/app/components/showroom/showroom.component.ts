import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-showroom',
  templateUrl: './showroom.component.html',
  styleUrls: ['./showroom.component.scss']
})
export class ShowroomComponent implements OnInit {
  DetalhesPokemon: any;
  mostrarShine: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.carregarDetalhesPokemon(id);
    }
  }

  carregarDetalhesPokemon(id: string): void {
    
    this.apiService.getPokemonById(id).subscribe(
      (response) => {
        this.DetalhesPokemon = response;
        console.log(this.DetalhesPokemon);
      },
      (error) => {
        console.error('Erro ao carregar detalhes do Pokémon:', error);
      }
    );
  }

  navegarPokedex(tipo: string): void {
    
    let pokemonId = Number(this.route.snapshot.paramMap.get('id')) || 1;

    
    if (tipo === 'proximo') {
      pokemonId++; 
    } else if (tipo === 'anterior' && pokemonId > 1) {
      pokemonId--; 
    }

    
    let paginaAtual = Number(this.route.snapshot.queryParamMap.get('page')) || 1;

   
    this.router.navigate([`/details/${pokemonId}`], {
      queryParams: { page: paginaAtual }, 
      queryParamsHandling: 'merge',
    });
  }

  
  botaoShineMostrar(): void {
    this.mostrarShine = !this.mostrarShine;
  }

  
  formatPokemonId(id: number): string {
    return id.toString().padStart(4, '0');
  }
}
