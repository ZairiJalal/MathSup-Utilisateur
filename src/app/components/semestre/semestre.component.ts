import { Component, OnInit, Input } from '@angular/core';
import { Module } from 'src/app/models/module';
import { ModuleService } from 'src/app/services/module.service';
import { Semestre } from 'src/app/models/semestre';

@Component({
  selector: 'app-semestre',
  templateUrl: './semestre.component.html',
  styleUrls: ['./semestre.component.scss']
})
export class SemestreComponent implements OnInit {
  @Input() semestre:Semestre;
  modules:Module[];
  constructor(private moduleService:ModuleService) { }

  ngOnInit(): void {
    this.getModules();
  }
  getModules(){
       this.moduleService.findAll()
                         .subscribe(modules=>this.modules=modules
                         .filter(module=>module.semestre_id==this.semestre._id))
  }

}
