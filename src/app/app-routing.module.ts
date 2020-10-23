import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { DetailModuleComponent } from './components/detail-module/detail-module.component';
import { FormationVideoComponent } from './components/formation-video/formation-video.component';
import { Annee1Component } from './components/annee1/annee1.component';
import { Annee2Component } from './components/annee2/annee2.component';
import { Annee3Component } from './components/annee3/annee3.component';
import { ConcoursComponent } from './components/concours/concours.component';
import { LivreComponent } from './components/livre/livre.component';
import { LivreDetailComponent } from './components/livre-detail/livre-detail.component';





const routes: Routes  =[
  {path:"accueil",component:AccueilComponent },
  {path:"annee1",component:Annee1Component },
  {path:"annee2",component:Annee2Component },
  {path:"annee3",component:Annee3Component },
  {path:"livres",component:LivreComponent },
  {path:"livres/:id",component:LivreDetailComponent },
  {path:":annee/:module",component:DetailModuleComponent },
  {path:":annee/:module/videos",component:FormationVideoComponent },
  {path:"concours",component:ConcoursComponent },
  {path:"",redirectTo:"accueil",pathMatch:"full"} 
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration:'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
