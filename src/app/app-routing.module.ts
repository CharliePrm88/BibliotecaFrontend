import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaClientiComponent} from './components/clienti/lista-clienti/lista-clienti.component';

const routes: Routes = [{ 
  path: '', redirectTo: 'Biblioteca/Clienti/ListaClienti', pathMatch: 'full' },
{ path: 'Biblioteca/Clienti/ListaClienti', component: ListaClientiComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
