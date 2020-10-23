import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Livre } from 'src/app/models/livre';
import { LivresService } from 'src/app/services/livres.service';

@Component({
  selector: 'app-livre-detail',
  templateUrl: './livre-detail.component.html',
  styleUrls: ['./livre-detail.component.scss']
})
export class LivreDetailComponent implements OnInit {
  livre:Livre;
  constructor(private activateRoute:ActivatedRoute,
              private livreService:LivresService         
    ) { }
  ngOnInit(): void {
    this.getLivre();
  }
  getLivre(){
    this.activateRoute.params.subscribe(
      (params)=>{
              this.livreService.geLivreById(params.id)
                       .subscribe(livre=>this.livre=livre);
              
    })
  }

}
