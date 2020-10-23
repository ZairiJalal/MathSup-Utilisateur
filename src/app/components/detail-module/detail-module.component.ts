import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Annee } from 'src/app/models/annee';
import { Module } from 'src/app/models/module';
import { AnneeService } from 'src/app/services/annee.service';
import { ModuleService } from 'src/app/services/module.service';

@Component({
  selector: 'app-detail-module',
  templateUrl: './detail-module.component.html',
  styleUrls: ['./detail-module.component.scss']
})
export class DetailModuleComponent implements OnInit {
  annee:Annee;
  module:Module;
  
  constructor(private anneeService:AnneeService,
              private moduleService:ModuleService,
              private activateRoute:ActivatedRoute,
              private router:Router
              ) { }

  ngOnInit(): void {
      this.getAnneeAndModule();
    
  }

  getAnneeAndModule(){
    this.activateRoute.params.subscribe( 
      (params)=>{
              this.anneeService.findAll()
                               .subscribe(annees=>this.annee=annees[params.annee[5]-1]);
              this.moduleService.getOneById(params.module)
                                .subscribe(module=>this.module=module);
              
    })
  }

  GoToDetailModuleVIDEOS(){
    const link=["annee"+this.annee.numero,this.module._id,'videos'];
    this.router.navigate(link);
  }

}
