import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatoRoutingModule } from './contato-routing.module';
import { ContainerContatoComponent } from './container-contato/container-contato.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ContainerContatoComponent, FormularioComponent],
  imports: [
    CommonModule,
    ContatoRoutingModule,
    ReactiveFormsModule
  ]
})
export class ContatoModule { }
