import { Component, OnInit } from '@angular/core';
import { Semestre } from 'src/app/models/semestre';
import { SemestreService } from 'src/app/services/semestre.service';

@Component({
  selector: 'app-annee2',
  templateUrl: './annee2.component.html',
  styleUrls: ['./annee2.component.scss']
})
export class Annee2Component implements OnInit {

  semestres:Semestre[];

  constructor( private semesterService: SemestreService) { }

  ngOnInit(): void {
       this.getSemestres();
  }

  getSemestres(){
        this.semesterService.findAll()
                           .subscribe( semestres=>this.semestres=semestres
                           .filter(semestre=>semestre.annee_id=="5f7a5c7071615b0cf53619bc"))
  }

}
