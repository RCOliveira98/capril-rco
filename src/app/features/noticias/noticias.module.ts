import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoticiasRoutingModule } from './noticias-routing.module';
import { ListaNoticiasComponent } from './components/lista-noticias/lista-noticias.component';
import { NoticiaComponent } from './components/noticia/noticia.component';

@NgModule({
  declarations: [ListaNoticiasComponent, NoticiaComponent],
  imports: [
    CommonModule,
    NoticiasRoutingModule
  ]
})
export class NoticiasModule { }
