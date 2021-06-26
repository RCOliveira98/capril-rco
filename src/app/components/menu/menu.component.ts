import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public logo: string = '../../../assets/image/goat.png';
  public animais: string = './../../assets/image/animais.png';
  public noticias: string = './../../assets/image/noticias.png';
  public contato: string = './../../assets/image/contato.png';
  public home: string = './../../assets/image/home.png';

  constructor() { }

  ngOnInit(): void {
  }

}
