import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Module } from '../models/module';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  apiUrl="http://localhost:3000/api/modules";
  
  constructor(private http : HttpClient) { }

  findAll(){
    return this.http.get<Module[]>(this.apiUrl);
  }
  getOneById(id){
     return this.http.get<Module>(`${this.apiUrl}/${id}`);
  }
}
