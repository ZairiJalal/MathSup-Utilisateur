import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Module } from '../models/module';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  apiUrl="https://mathsup-api.herokuapp.com/api/modules";
  
  constructor(private http : HttpClient) { }

  findAll(){
    return this.http.get<Module[]>(this.apiUrl);
  }
  getOneById(id){
     return this.http.get<Module>(`${this.apiUrl}/${id}`);
  }
}
