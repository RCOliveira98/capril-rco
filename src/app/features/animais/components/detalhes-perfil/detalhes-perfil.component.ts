import { Component, Input, OnInit } from '@angular/core';
import { IAnimal } from '../../models/animal.model';

@Component({
  selector: 'app-detalhes-perfil',
  templateUrl: './detalhes-perfil.component.html',
  styleUrls: ['./detalhes-perfil.component.css']
})
export class DetalhesPerfilComponent implements OnInit {

  @Input() animal: IAnimal;

  constructor() { }

  ngOnInit(): void {
  }

}
