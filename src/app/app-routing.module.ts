import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'animais',
    loadChildren: () => import('./features/animais/animais.module').then(m => m.AnimaisModule)
  },
  {
    path: 'noticias',
    loadChildren: () => import('./features/noticias/noticias.module').then(m => m.NoticiasModule)
  },
  {
    path: 'contato',
    loadChildren: () => import('./features/contato/contato.module').then(m => m.ContatoModule)
  },
  {
    path: '',
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
