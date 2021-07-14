import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IAnimal } from '../models/animal.model';
import { BASE_API_URL } from 'src/app/shared/utils/base-api-url';

@Injectable({
  providedIn: 'root'
})
export class AnimaisService {

  constructor(private http: HttpClient) { }

  selecionarTodosAnimais(): Observable<IAnimal[]> {
    return this.http.get<IAnimal[]>(`${BASE_API_URL}/animais`);
  }

  selecionarReprodutores(): Observable<IAnimal[]> {
    return this.http.get<IAnimal[]>(`${BASE_API_URL}/machos`);
  }

  selecionarMatrizes(): Observable<IAnimal[]> {
    return this.http.get<IAnimal[]>(`${BASE_API_URL}/femeas`);
  }
}
