import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Livre } from 'src/app/models/livre';
import { LivresService } from 'src/app/services/livres.service';

@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.scss']
})
export class LivreComponent implements OnInit {
  livres:Livre[];
  resultSearchLivres:Livre[];
  searchText:'';
  constructor(private livresService: LivresService,
              private router:Router
              ) { }
  ngOnInit(): void {
     this.getAllLivre();
     console.log(this.livres)
  }
  //------------------------------get all Livre------------------------------------
  getAllLivre(){
    this.livresService.findAll()
        .subscribe( livres => this.resultSearchLivres=this.livres=livres )
  }
  getLivre(id){
    const link=["livres",id];
    this.router.navigate(link);
  }
  searchLivre(){
      this.livres=this.resultSearchLivres.filter(
        livre=>    livre.sommaire.toUpperCase().includes(this.searchText.toUpperCase())) 
      
  }

}
