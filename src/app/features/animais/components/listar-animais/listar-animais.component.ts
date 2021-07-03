import { Component, Input, OnInit } from '@angular/core';
import { IAnimal } from '../../models/animal.model';

@Component({
  selector: 'app-listar-animais',
  templateUrl: './listar-animais.component.html',
  styleUrls: ['./listar-animais.component.css']
})
export class ListarAnimaisComponent implements OnInit {

  @Input() animais: IAnimal[];
  public animal: IAnimal;

  constructor() { }

  ngOnInit(): void {
  }

  public selecionarAnimal(idAnimal: number): void {
    this.animal = this.animais.find(animal => animal.id == idAnimal);
  }

}
