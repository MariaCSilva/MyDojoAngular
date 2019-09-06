import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo2',
  templateUrl: './exemplo2.component.html',
  styleUrls: ['./exemplo2.component.scss']
})
export class Exemplo2Component implements OnInit {

  public numeros = [];
  constructor() {
  }

  ngOnInit() {
    this.preencher();
  }

  public preencher() {
    for (let i = 0; i < 50; i++) {
      this.numeros.push(Math.floor((Math.random() * 50) + 1));
    }
  }

}
