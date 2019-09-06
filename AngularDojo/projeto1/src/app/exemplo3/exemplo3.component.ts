import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo3',
  templateUrl: './exemplo3.component.html',
  styleUrls: ['./exemplo3.component.scss']
})
export class Exemplo3Component implements OnInit {

  public imagemExemplo = `./../../assets/img/yusuke-keiko-yu-yu-hakusho.jpg`;
  public buttonStatus = `disabled`;
  public status2 = `disabled`;
  constructor() { }

  ngOnInit() {
  }

}
