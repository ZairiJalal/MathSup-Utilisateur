import { Component, OnInit } from '@angular/core';
import { Semestre } from 'src/app/models/semestre';
import { SemestreService } from 'src/app/services/semestre.service';

@Component({
  selector: 'app-annee3',
  templateUrl: './annee3.component.html',
  styleUrls: ['./annee3.component.scss']
})
export class Annee3Component implements OnInit {

  semestres:Semestre[];

  constructor(private semesterSrvice: SemestreService) { }

  ngOnInit(): void {
       this.getSemestres();
  }
  getSemestres(){
        this.semesterSrvice.findAll()
                           .subscribe( semestres=>this.semestres=semestres
                           .filter(semestre=>semestre.annee_id=="5f7a5c8571615b0cf53619bd"))
  }

}
