import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_API_URL } from 'src/app/shared/utils/base-api-url';
import { INoticia } from '../models/noticia.model';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private _http: HttpClient) { }

  public selecioneTodasAsNoticias(): Observable<INoticia[]> {
    return this._http.get<INoticia[]>(`${BASE_API_URL}/noticias`);
  }
}
