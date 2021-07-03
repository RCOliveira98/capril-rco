import { Component, OnInit, Input } from '@angular/core';
import { IAnimal } from '../../models/animal.model';

@Component({
  selector: 'app-perfil-animal',
  templateUrl: './perfil-animal.component.html',
  styleUrls: ['./perfil-animal.component.css']
})
export class PerfilAnimalComponent implements OnInit {

  @Input() animal: IAnimal;

  constructor() { }

  ngOnInit(): void {
  }

}
