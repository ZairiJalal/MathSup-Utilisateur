import { Injectable } from '@angular/core';
import { Livre } from '../models/livre';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LivresService {
  
  apiUrl="https://mathsup-api.herokuapp.com/api/livres";
  constructor(private http : HttpClient) { }

  findAll(){
    return this.http.get<Livre[]>(this.apiUrl);
  }
  geLivreById(id){
     return this.http.get<Livre>(`${this.apiUrl}/${id}`);
  }
}
