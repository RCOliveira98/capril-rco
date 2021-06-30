import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimaisRoutingModule } from './animais-routing.module';
import { ListarMachosComponent } from './components/listar-machos/listar-machos.component';
import { ListarFemeasComponent } from './components/listar-femeas/listar-femeas.component';
import { PerfilAnimalComponent } from './components/perfil-animal/perfil-animal.component';
import { AnimaisDestaqueComponent } from './components/animais-destaque/animais-destaque.component';


@NgModule({
  declarations: [ListarMachosComponent, ListarFemeasComponent, PerfilAnimalComponent, AnimaisDestaqueComponent],
  imports: [
    CommonModule,
    AnimaisRoutingModule
  ]
})
export class AnimaisModule { }
