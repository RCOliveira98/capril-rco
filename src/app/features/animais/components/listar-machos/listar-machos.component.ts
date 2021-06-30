import { Component, OnInit } from '@angular/core';
import { Racas } from 'src/app/shared/enums/raca.enum';
import { sexo } from 'src/app/shared/enums/sexo.enum';
import { IAnimal } from '../../models/animal.model';

@Component({
  selector: 'app-listar-machos',
  templateUrl: './listar-machos.component.html',
  styleUrls: ['./listar-machos.component.css']
})
export class ListarMachosComponent implements OnInit {

  public listaMachos: IAnimal[];
  public imagemDefault: string = '../../../../../assets/image/animais/macho1.jpg'

  constructor() { }

  ngOnInit(): void {
    this._buscarAnimais();
  }

  private _buscarAnimais(): void {
    this.listaMachos = [
      {
        nome: 'Isidoro da morro verde',
        raca: Racas['Anglo-nubiano'],
        sexo: sexo.Macho,
        descricao: 'animal isso e aquilo',
        dataNascimento: new Date(),
        urlImagem: '../../../../../assets/image/animais/macho2.jpg'
      },
      {
        nome: 'Padre do MV',
        raca: Racas['Anglo-nubiano'],
        sexo: sexo.Macho,
        descricao: 'animal isso e aquilo',
        dataNascimento: new Date(),
        urlImagem: '../../../../../assets/image/animais/macho3.jpg'
      },
      {
        nome: 'Blad do JKM',
        raca: Racas['Anglo-nubiano'],
        sexo: sexo.Macho,
        descricao: 'animal isso e aquilo',
        dataNascimento: new Date(),
        urlImagem: '../../../../../assets/image/animais/macho1.jpg'
      },
      {
        nome: 'Maluco da morro verde',
        raca: Racas['Anglo-nubiano'],
        sexo: sexo.Macho,
        descricao: 'animal isso e aquilo',
        dataNascimento: new Date(),
        urlImagem: '../../../../../assets/image/animais/macho2.jpg'
      },
      {
        nome: 'Belo da novo mundo',
        raca: Racas['Anglo-nubiano'],
        sexo: sexo.Macho,
        descricao: 'animal isso e aquilo',
        dataNascimento: new Date(),
        urlImagem: '../../../../../assets/image/animais/macho4.jpg'
      },
      {
        nome: 'Impressionante da peste',
        raca: Racas['Anglo-nubiano'],
        sexo: sexo.Macho,
        descricao: 'animal isso e aquilo',
        dataNascimento: new Date(),
        urlImagem: '../../../../../assets/image/animais/macho1.jpg'
      },
      {
        nome: 'Fulminante do zé',
        raca: Racas['Anglo-nubiano'],
        sexo: sexo.Macho,
        descricao: 'animal isso e aquilo',
        dataNascimento: new Date(),
        urlImagem: '../../../../../assets/image/animais/macho4.jpg'
      },
      {
        nome: 'Picasso da novo mundo',
        raca: Racas['Anglo-nubiano'],
        sexo: sexo.Macho,
        descricao: 'animal isso e aquilo',
        dataNascimento: new Date(),
        urlImagem: '../../../../../assets/image/animais/macho3.jpg'
      }
    ];
  }

}
