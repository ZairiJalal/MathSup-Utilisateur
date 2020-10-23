import { Component, OnInit, Input } from '@angular/core';
import { Formation } from 'src/app/models/formation';
import { Module } from 'src/app/models/module';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-formation-pdf',
  templateUrl: './formation-pdf.component.html',
  styleUrls: ['./formation-pdf.component.scss']
})
export class FormationPDFComponent implements OnInit {
  @Input()module:Module;
  @Input()TypeFormation:String;
  formationsPDF:Formation[]=[];
  constructor(private formationService: FormationService) { }

  ngOnInit(): void {
    this.getFormationPDF();
  }
  getFormationPDF(){
         this.formationService.findAll()
                              .subscribe((formationsPDF)   => this.formationsPDF=formationsPDF
                              .filter(formationPDF=>(formationPDF.type==this.TypeFormation
                                                     && formationPDF.module_id==this.module._id  )));
  }

}
