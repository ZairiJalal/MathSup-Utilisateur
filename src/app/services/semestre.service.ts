import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Semestre } from '../models/semestre';

@Injectable({
  providedIn: 'root'
})
export class SemestreService {

  apiUrl="http://localhost:3000/api/semestres";
  
  constructor(private http : HttpClient) { }

  findAll(){
    return this.http.get<Semestre[]>(this.apiUrl);
  }
  getOneById(id){
     return this.http.get<Semestre>(`${this.apiUrl}/${id}`);
  }
  
}
