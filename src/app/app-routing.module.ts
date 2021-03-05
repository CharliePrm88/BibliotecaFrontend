import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AggiungiClientiComponent } from './components/clienti/aggiungi-clienti/aggiungi-clienti.component';
import { ListaClientiComponent} from './components/clienti/lista-clienti/lista-clienti.component';
import { ModificaClientiComponent } from './components/clienti/modifica-clienti/modifica-clienti.component';

const routes: Routes = [{ 
  path: '', redirectTo: 'Biblioteca/Clienti/ListaClienti', pathMatch: 'full' },
{ path: 'Biblioteca/Clienti/ListaClienti', component: ListaClientiComponent },
{ path: 'Biblioteca/Clienti/AggiungiClienti',component: AggiungiClientiComponent},
{ path: 'Biblioteca/Clienti/ModificaClienti',component: ModificaClientiComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
