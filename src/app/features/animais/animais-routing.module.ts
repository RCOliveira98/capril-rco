import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimaisDestaqueComponent } from './animais-destaque/animais-destaque.component';
import { ListarFemeasComponent } from './listar-femeas/listar-femeas.component';
import { ListarMachosComponent } from './listar-machos/listar-machos.component';

const routes: Routes = [
  {path: '', component: AnimaisDestaqueComponent},
  {path: 'femeas', component: ListarFemeasComponent},
  {path: 'machos', component: ListarMachosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimaisRoutingModule { }
