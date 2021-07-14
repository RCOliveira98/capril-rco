import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UtilsService } from 'src/app/services/utils.service';
import { INoticia } from '../../models/noticia.model';
import { NoticiasService } from '../../services/noticias.service';

@Component({
  selector: 'app-lista-noticias',
  templateUrl: './lista-noticias.component.html',
  styleUrls: ['./lista-noticias.component.css']
})
export class ListaNoticiasComponent implements OnInit, OnDestroy {

  public listaNoticias: INoticia[];
  private _inscricao$: Subscription;

  constructor(private _utilsService: UtilsService, private _noticiasService: NoticiasService) { }

  ngOnInit(): void {
    this._getNoticias();
  }

  ngOnDestroy(): void {
    this._utilsService.removerInscricao(this._inscricao$);
  }

  private _getNoticias(): void {
    this._inscricao$ = this._noticiasService.selecioneTodasAsNoticias()
    .subscribe((noticias: INoticia[]) => this.listaNoticias = noticias)
  }

}
