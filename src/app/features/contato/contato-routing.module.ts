import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerContatoComponent } from './container-contato/container-contato.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerContatoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContatoRoutingModule { }
