import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UtilsService } from 'src/app/services/utils.service';
import { Racas } from 'src/app/shared/enums/raca.enum';
import { sexo } from 'src/app/shared/enums/sexo.enum';
import { IAnimal } from '../../models/animal.model';
import { AnimaisService } from '../../services/animais.service';

@Component({
  selector: 'app-listar-machos',
  templateUrl: './listar-machos.component.html',
  styleUrls: ['./listar-machos.component.css']
})
export class ListarMachosComponent implements OnInit, OnDestroy {

  public listaMachos: IAnimal[];
  public machoSelecionado: IAnimal;
  public imagemDefault: string = '../../../../../assets/image/animais/macho1.jpg'
  private _inscricao$: Subscription;

  constructor(
    private _animaisService: AnimaisService,
    private _utilsService: UtilsService
    ) { }

  ngOnInit(): void {
    this._buscarAnimais();
  }

  ngOnDestroy(): void {
    this._utilsService.removerInscricao(this._inscricao$);
  }

  private _buscarAnimais(): void {
    this._inscricao$ = this._animaisService.selecionarReprodutores()
    .subscribe(
      (reprodutores: IAnimal[]) => this.listaMachos = reprodutores,
      (error) => console.error(error)
      )
  }

}
