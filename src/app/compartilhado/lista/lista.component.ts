import { ApiService } from './../../service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  private setAllPokemons: any;
  public getAllPokemons: any;
  public apiError: boolean = false;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.apiService.apiListAllPokemons.subscribe(
      res => {
        this.setAllPokemons = res.results;
        this.getAllPokemons = this.setAllPokemons;
      },
      error => {
        this.apiError = true;
      }
    );
  }

    public getBusca(value: string){
      const filter = this.setAllPokemons.filter(
        (res: any) => {
          return !res.name.indexOf(value.toLowerCase());
        });

      this.getAllPokemons = filter;
    }

}
