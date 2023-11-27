import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { tap } from 'rxjs/internal/operators/tap';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=250';
  constructor(
    private http: HttpClient
  ) { }

  get apiListAllPokemons(): Observable<any> {
    return this.http.get<any>(this.url).pipe(
      tap( res => res),
      tap( res => {
        res.results.map((resPokemons: any) => {

          this.apiGetPokemons(resPokemons.url).subscribe(
            res => resPokemons.status = res
          );   
        })
      })
    )    
  }

  public apiGetPokemons(url: string): Observable<any> {
    return this.http.get<any>( url ).pipe(
      map( res => res )
      )
  }
}
