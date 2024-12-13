// api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  
  getPokemonsgeral(offset: number = 0, limit: number = 20): Observable<any> {
    const params = new HttpParams()
     
      .set('offset', offset.toString())
     
      .set('limit', limit.toString());

   
      return this.http.get(this.baseUrl, { params });
  }


}
