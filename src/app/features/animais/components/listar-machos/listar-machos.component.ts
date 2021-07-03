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
  public machoSelecionado: IAnimal;
  public imagemDefault: string = '../../../../../assets/image/animais/macho1.jpg'

  constructor() { }

  ngOnInit(): void {
    this._buscarAnimais();
  }

  public selecionarAnimal(idAnimal: number): void {
    this.machoSelecionado = this.listaMachos.find(animal => animal.id == idAnimal);
  }

  private _buscarAnimais(): void {
    this.listaMachos = [
      {
        id: 1,
        nome: 'Isidoro da morro verde',
        raca: Racas['Anglo-nubiano'],
        sexo: sexo.Macho,
        descricao: 'animal isso e aquilo',
        dataNascimento: new Date(),
        urlImagem: '../../../../../assets/image/animais/macho2.jpg'
      },
      {
        id: 2,
        nome: 'Padre do MV',
        raca: Racas['Anglo-nubiano'],
        sexo: sexo.Macho,
        descricao: 'animal isso e aquilo',
        dataNascimento: new Date(),
        urlImagem: '../../../../../assets/image/animais/macho3.jpg'
      },
      {
        id: 3,
        nome: 'Blad do JKM',
        raca: Racas['Anglo-nubiano'],
        sexo: sexo.Macho,
        descricao: 'animal isso e aquilo',
        dataNascimento: new Date(),
        urlImagem: '../../../../../assets/image/animais/macho1.jpg'
      },
      {
        id: 4,
        nome: 'Maluco da morro verde',
        raca: Racas['Anglo-nubiano'],
        sexo: sexo.Macho,
        descricao: 'animal isso e aquilo',
        dataNascimento: new Date(),
        urlImagem: '../../../../../assets/image/animais/macho2.jpg'
      },
      {
        id: 5,
        nome: 'Belo da novo mundo',
        raca: Racas['Anglo-nubiano'],
        sexo: sexo.Macho,
        descricao: 'animal isso e aquilo',
        dataNascimento: new Date(),
        urlImagem: '../../../../../assets/image/animais/macho4.jpg'
      },
      {
        id: 6,
        nome: 'Impressionante da peste',
        raca: Racas['Anglo-nubiano'],
        sexo: sexo.Macho,
        descricao: 'animal isso e aquilo',
        dataNascimento: new Date(),
        urlImagem: '../../../../../assets/image/animais/macho1.jpg'
      },
      {
        id: 7,
        nome: 'Fulminante do zé',
        raca: Racas['Anglo-nubiano'],
        sexo: sexo.Macho,
        descricao: 'animal isso e aquilo',
        dataNascimento: new Date(),
        urlImagem: '../../../../../assets/image/animais/macho4.jpg'
      },
      {
        id: 8,
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
