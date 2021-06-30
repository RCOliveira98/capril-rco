import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimaisDestaqueComponent } from './components/animais-destaque/animais-destaque.component';
import { ListarFemeasComponent } from './components/listar-femeas/listar-femeas.component';
import { ListarMachosComponent } from './components/listar-machos/listar-machos.component';

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
