import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms'
import { ListaClientiComponent } from './components/clienti/lista-clienti/lista-clienti.component';
import { ModificaClientiComponent } from './components/clienti/modifica-clienti/modifica-clienti.component';
import { AggiungiClientiComponent } from './components/clienti/aggiungi-clienti/aggiungi-clienti.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaClientiComponent,
    ModificaClientiComponent,
    AggiungiClientiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
