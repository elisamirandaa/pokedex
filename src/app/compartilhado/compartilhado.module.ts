import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeHeaderComponent } from './poke-header/poke-header.component';
import { BuscaComponent } from './busca/busca.component';
import { ListaComponent } from './lista/lista.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PokeHeaderComponent,
    BuscaComponent,
    ListaComponent
  ],
  exports: [
    PokeHeaderComponent,
    BuscaComponent,
    ListaComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CompartilhadoModule { }
