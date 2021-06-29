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
        descricao: 'Obtenha uma das melhores genéticas do mercado por um valor justo e acessível.'
      },
      {
        imgUrl: '../../../../assets/image/home/genetica.png',
        titulo: 'Melhoramento genético',
        descricao: 'Seleção de mais de 20 anos trabalhando com melhoramento genético!'
      },
      {
        imgUrl: '../../../../assets/image/home/qualidade.png',
        titulo: 'Qualidade',
        descricao: 'Adicione qualidade ao seu rebanho com genética de ponta!'
      }
    ]
  }

}
