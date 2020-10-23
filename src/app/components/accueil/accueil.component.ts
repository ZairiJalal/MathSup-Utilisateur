import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  objectifs=["Cours","Exercices ","Examens","Vidéos","Livres","Concours"];
  constructor() { }

  ngOnInit(): void {
  }

  


}
