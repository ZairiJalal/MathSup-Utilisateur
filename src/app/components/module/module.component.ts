import { Component, OnInit, Input } from '@angular/core';
import { Module } from 'src/app/models/module';
import { Router } from '@angular/router';
import { AnneeService } from 'src/app/services/annee.service';
import { Annee } from 'src/app/models/annee';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss']
})
export class ModuleComponent implements OnInit {
  @Input() annee_id:String;
  annee:Annee;
  @Input() module:Module;
              
  constructor(private router:Router,private anneeService: AnneeService) { }

  ngOnInit(): void {
    this.getAnnee();
  }
  getAnnee(){
        this.anneeService.getOneById(this.annee_id)
                         .subscribe(annee=>this.annee=annee);
  }
  GoToDetailModule(){
    const link=['annee'+this.annee.numero,this.module._id];
    this.router.navigate(link);
  }

}
