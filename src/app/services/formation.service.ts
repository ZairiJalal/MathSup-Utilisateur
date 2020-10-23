import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formation } from '../models/formation';

@Injectable({
  providedIn: 'root'
})
export class FormationService {
  
  apiUrl="http://localhost:3000/api/formations";
  
  constructor(private http : HttpClient) { }

  findAll(){
    return this.http.get<Formation[]>(this.apiUrl);
  }
  getOneById(id){
     return this.http.get<Formation>(`${this.apiUrl}/${id}`);
  }
}
