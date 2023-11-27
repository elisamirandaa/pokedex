import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.scss']
})
export class BuscaComponent implements OnInit {

  @Output() public emmitBusca: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public busca(value: string) {
    this.emmitBusca.emit(value)
    
  }

}