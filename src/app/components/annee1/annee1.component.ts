import { Component, OnInit } from '@angular/core';
import { Semestre } from 'src/app/models/semestre';
import { SemestreService } from 'src/app/services/semestre.service';

@Component({
  selector: 'app-annee1',
  templateUrl: './annee1.component.html',
  styleUrls: ['./annee1.component.scss']
})
export class Annee1Component implements OnInit {
  semestres:Semestre[];

  constructor(private semesterService: SemestreService) { }

  ngOnInit(): void {
       this.getSemestres();
  }
  
  getSemestres(){
        this.semesterService.findAll()
                           .subscribe( semestres=>this.semestres=semestres
                           .filter(semestre=>semestre.annee_id=="625948547fbd52c874e464fb"))
  }

}
