import { Component, OnInit } from '@angular/core';
import { Module } from 'src/app/models/module';
import { ActivatedRoute } from '@angular/router';
import { ModuleService } from 'src/app/services/module.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Formation } from 'src/app/models/formation';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-formation-video',
  templateUrl: './formation-video.component.html',
  styleUrls: ['./formation-video.component.scss']
})
export class FormationVideoComponent implements OnInit {
  annee:number;
  module:Module;
  TypeFormation:String="VIDEO";
  formationsVIDEO:Formation[];
  link;
  constructor(private moduleService:ModuleService,
              private formationService: FormationService,
              private activateRoute:ActivatedRoute,
              private sanitizer: DomSanitizer
             ) { } 

  ngOnInit(): void {
       this.getModule();
       this.getFormationVIDEO();
 }

  getModule(){
    this.activateRoute.params.subscribe(
      (params)=>{
                    this.moduleService.getOneById(params.module)
                                      .subscribe(module=>this.module=module);             
    })
  }
  getFormationVIDEO(){
              this.formationService.findAll()
                                   .subscribe((formsVIDEO)   =>{ 
                                   this.formationsVIDEO=formsVIDEO.filter(formation=>(formation.type==this.TypeFormation
                                                                           && formation.module_id==this.module._id  ));;
                                   this.link=this.sanitizer.bypassSecurityTrustResourceUrl(this.formationsVIDEO[0].lien);

                                  });
              
  }
  ChangeVideo(link){
     this.link=this.sanitizer.bypassSecurityTrustResourceUrl(link);
  }


}
