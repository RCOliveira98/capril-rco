import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimaisRoutingModule } from './animais-routing.module';
import { ListarMachosComponent } from './components/listar-machos/listar-machos.component';
import { ListarFemeasComponent } from './components/listar-femeas/listar-femeas.component';
import { PerfilAnimalComponent } from './components/perfil-animal/perfil-animal.component';
import { AnimaisDestaqueComponent } from './components/animais-destaque/animais-destaque.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { DetalhesPerfilComponent } from './components/detalhes-perfil/detalhes-perfil.component';
import { ListarAnimaisComponent } from './components/listar-animais/listar-animais.component';


@NgModule({
  declarations: [ListarMachosComponent, ListarFemeasComponent, PerfilAnimalComponent, AnimaisDestaqueComponent, PerfilComponent, DetalhesPerfilComponent, ListarAnimaisComponent],
  imports: [
    CommonModule,
    AnimaisRoutingModule
  ]
})
export class AnimaisModule { }
