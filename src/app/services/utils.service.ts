import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  removerInscricao(inscricao: Subscription): void {
    if (inscricao) {
      inscricao.unsubscribe();
    }
  }
}
