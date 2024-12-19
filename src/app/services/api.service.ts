import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { forkJoin } from 'rxjs';
import { switchMap } from 'rxjs';
import { map } from 'rxjs/operators'; 


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'https://pokeapi.co/api/v2/pokemon';
  private Apidescricao = 'https://pokeapi.co/api/v2/pokemon-species';

  constructor(private http: HttpClient) {}

  
  getPokemonsgeral(start: number = 0, end: number = 1024): Observable<any> {
   
    const offset = start;
    const limit = end - start + 1; 
    
    const params = new HttpParams()
      .set('offset', offset.toString())
      .set('limit', limit.toString());
  
    return this.http.get(this.baseUrl, { params }).pipe(
      switchMap((data: any) => {
        const pokemonDetailsRequests = data.results.map((pokemon: any) => 
          this.getPokemonImages_home(pokemon.url).pipe(
            map((details: any) => ({
              name: pokemon.name,
              image: details.sprites.front_default, 
              url: pokemon.url
            }))
          )
        );
        return forkJoin(pokemonDetailsRequests);
      })
    );
  }
  
  

  getPokemonImages_home(url: string): Observable<any> {
    return this.http.get(url);
  }
  


    getPokemonById(id: string): Observable<any> {
      return this.http.get(`${this.baseUrl}/${id}`);
    }
  

    getPokemonDescriçaos(id: string): Observable<any> {
      return this.http.get(`${this.Apidescricao}/${id}`);
    }


}


