import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatoRoutingModule } from './contato-routing.module';
import { ContainerContatoComponent } from './container-contato/container-contato.component';


@NgModule({
  declarations: [ContainerContatoComponent],
  imports: [
    CommonModule,
    ContatoRoutingModule
  ]
})
export class ContatoModule { }
