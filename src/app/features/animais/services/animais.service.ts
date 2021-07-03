import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAnimal } from '../models/animal.model';

@Injectable({
  providedIn: 'root'
})
export class AnimaisService {

  private API: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  selecionarTodosAnimais(): Observable<IAnimal[]> {
    return this.http.get<IAnimal[]>(`${this.API}/animais`);
  }

  selecionarReprodutores(): Observable<IAnimal[]> {
    return this.http.get<IAnimal[]>(`${this.API}/machos`);
  }
}
