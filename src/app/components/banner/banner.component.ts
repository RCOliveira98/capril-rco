import { Component, OnInit } from '@angular/core';

import { IImage } from 'src/app/shared/models/image.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  images: IImage[];

  constructor() { }

  ngOnInit(): void {
    this._carregarImagens();
  }

  private _carregarImagens(): void {
    this.images = [
      {url: '../../../assets/image/banner/foto1.jpg'},
      {url: '../../../assets/image/banner/fotao2.jpg'},
      {url: '../../../assets/image/banner/foto3.jpg'}
    ]
  }

}
