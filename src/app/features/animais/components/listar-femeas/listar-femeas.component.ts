import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { UtilsService } from 'src/app/services/utils.service';
import { AnimaisService } from './../../services/animais.service';

import { IAnimal } from '../../models/animal.model';

@Component({
  selector: 'app-listar-femeas',
  templateUrl: './listar-femeas.component.html',
  styleUrls: ['./listar-femeas.component.css']
})
export class ListarFemeasComponent implements OnInit, OnDestroy {

  public listaFemeas: IAnimal[];
  private _inscricao$: Subscription;

  constructor(
    private _utilsService: UtilsService,
    private _animaisService: AnimaisService
  ) { }

  ngOnInit(): void {
    this._selecionarFemeas();
  }

  ngOnDestroy(): void {
    this._utilsService.removerInscricao(this._inscricao$);
  }

  private _selecionarFemeas(): void {
    this._inscricao$ = this._animaisService.selecionarMatrizes()
    .subscribe((matrizes: IAnimal[]) => this.listaFemeas = matrizes)
  }

}
