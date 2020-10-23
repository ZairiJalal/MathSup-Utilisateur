import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { Annee1Component } from './components/annee1/annee1.component';
import { Annee2Component } from './components/annee2/annee2.component';
import { Annee3Component } from './components/annee3/annee3.component';
import { DetailModuleComponent } from './components/detail-module/detail-module.component';
import { ModuleComponent } from './components/module/module.component';
import { SemestreComponent } from './components/semestre/semestre.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactComponent } from './components/contact/contact.component';
import { FormationPDFComponent } from './components/formation-pdf/formation-pdf.component';
import { FormationVideoComponent } from './components/formation-video/formation-video.component';
import { ConcoursComponent } from './components/concours/concours.component';
import { LivreComponent } from './components/livre/livre.component';
import { LivreDetailComponent } from './components/livre-detail/livre-detail.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AccueilComponent,
    Annee1Component,
    Annee2Component,
    Annee3Component,
    DetailModuleComponent,
    ModuleComponent,
    SemestreComponent,
    ContactComponent,
    FormationPDFComponent,
    FormationVideoComponent,
    ConcoursComponent,
    LivreComponent,
    LivreDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
