import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaNoticiasComponent } from './lista-noticias/lista-noticias.component';

const routes: Routes = [
  {path: '', component: ListaNoticiasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoticiasRoutingModule { }
