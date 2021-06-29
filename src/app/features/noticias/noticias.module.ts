import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoticiasRoutingModule } from './noticias-routing.module';
import { ListaNoticiasComponent } from './lista-noticias/lista-noticias.component';

@NgModule({
  declarations: [ListaNoticiasComponent],
  imports: [
    CommonModule,
    NoticiasRoutingModule
  ]
})
export class NoticiasModule { }
