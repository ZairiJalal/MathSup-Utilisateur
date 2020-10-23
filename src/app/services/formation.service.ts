import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formation } from '../models/formation';

@Injectable({
  providedIn: 'root'
})
export class FormationService {
  
  apiUrl="https://mathsup-api.herokuapp.com/api/formations";
  
  constructor(private http : HttpClient) { }

  findAll(){
    return this.http.get<Formation[]>(this.apiUrl);
  }
  getOneById(id){
     return this.http.get<Formation>(`${this.apiUrl}/${id}`);
  }
}
