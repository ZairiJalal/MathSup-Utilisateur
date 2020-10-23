import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Annee } from '../models/annee';

@Injectable({
  providedIn: 'root'
})
export class AnneeService {
  
  apiUrl="https://mathsup-api.herokuapp.com/api/annees";
  
  constructor(private http : HttpClient) { }

  findAll(){
    return this.http.get<Annee[]>(this.apiUrl);
  }
  getOneById(id){
     return this.http.get<Annee>(`${this.apiUrl}/${id}`);
  }

}
