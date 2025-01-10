import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-showroom',
  templateUrl: './showroom.component.html',
  styleUrls: ['./showroom.component.scss']
})
export class ShowroomComponent implements OnInit {
  DetalhesPokemon: any;
  descricaoPokemon: any;
  mostrarShine: boolean = false;
  mostrarMega: boolean = false;
  mostrarMegaX: boolean = false;
  mostrarMegaY: boolean = false;
  mostrarGigantamax: boolean = false;
  id!: number;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.carregarDetalhesPokemon(id);
    }


    this.route.params.subscribe(params => {
      this.id = +params['id']; 
    });
  }

  voltar(){
    this.location.back();
  }


  navegarAnterior(): void {
    if (this.id > 1) {
      this.router.navigate(['/details', this.id - 1]);
    }
  }

  navegarProximo(): void {
    if (this.id < 1025) {
      this.router.navigate(['/details', this.id + 1]);
    }
  }

  carregarDetalhesPokemon(id: string): void {
    
    this.apiService.getPokemonById(id).subscribe(
      (response) => {
        this.DetalhesPokemon = response;
        console.log('Detalhes do Pokémon:', this.DetalhesPokemon);

        
        this.carregarDescricaoPokemon(id);
      },
      (error) => {
        console.error('Erro ao carregar detalhes do Pokémon:', error);
      }
    );
  }

  carregarDescricaoPokemon(id: string): void {
    this.apiService.getPokemonDescriçaos(id).subscribe(
      (response) => {
        this.descricaoPokemon = response;
        console.log('Descrição do Pokémon:', this.descricaoPokemon);
  
        const descricaoEmIngles = this.descricaoPokemon.flavor_text_entries.find((entry: any) => entry.language.name === 'en');
        if (descricaoEmIngles) {
          let descricao = descricaoEmIngles.flavor_text;
          
          descricao = descricao.replace(/\f/g, ' ');
  
          console.log('Descrição em inglês do Pokémon:', descricao);
        } else {
          console.log('Descrição não encontrada em inglês');
        }
      },
      (error) => {
        console.error('Erro ao carregar descrição do Pokémon:', error);
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

  getDescricaoEmIngles(): string {
    const descricaoEmIngles = this.descricaoPokemon?.flavor_text_entries.find((entry: any) => entry.language.name === 'en');
    return descricaoEmIngles ? descricaoEmIngles.flavor_text : '';
  }

}
