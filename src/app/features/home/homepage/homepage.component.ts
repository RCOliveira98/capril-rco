import { Component, OnInit } from '@angular/core';
import { ICardHome } from '../models/card-home-model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  cards: ICardHome[];

  constructor() { }

  ngOnInit(): void {
    this._carregarDados();
  }

  private _carregarDados(): void {
    this.cards = [
      {
        imgUrl: '../../../../assets/image/home/dinheiro.png',
        titulo: 'Melhor custo benefício',
        descricao: 'fdsfdjfdks dsaj fdjdifjisd sjdiajd dfjsdif fjdijf fijirj ddjfdsij'
      },
      {
        imgUrl: '../../../../assets/image/home/genetica.png',
        titulo: 'Melhoramento genético',
        descricao: 'fdsfdjfdks dsaj fdjdifjisd sjdiajd dfjsdif fjdijf fijirj ddjfdsij'
      },
      {
        imgUrl: '../../../../assets/image/home/qualidade.png',
        titulo: 'Qualidade',
        descricao: 'fdsfdjfdks dsaj fdjdifjisd sjdiajd dfjsdif fjdijf fijirj ddjfdsij'
      }
    ]
  }

}
