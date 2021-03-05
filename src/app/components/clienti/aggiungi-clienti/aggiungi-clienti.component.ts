import { Component, OnInit } from '@angular/core';
import { SelectMultipleControlValueAccessor } from '@angular/forms';
import { Router } from '@angular/router';
import {ClientiInsert} from "src/app/models/clienti.model"
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-aggiungi-clienti',
  templateUrl: './aggiungi-clienti.component.html',
  styleUrls: ['./aggiungi-clienti.component.css']
})
export class AggiungiClientiComponent implements OnInit {

  nuovo: ClientiInsert = {
    nome: "",
    cognome: "",
    codiceFiscale: ""
  }

  constructor(private cs:ClienteService, private router: Router) { }

  ngOnInit(): void {
  }

  salvaCliente(){
    const oggetto = {
      codiceFiscale : this.nuovo.codiceFiscale,
      nome: this.nuovo.nome,
      cognome: this.nuovo.cognome
    };
    this.cs.inserisci(oggetto).subscribe(
      Response => console.log(Response),
      Error => console.log(Error),
      ()=>(this.router.navigate(['Biblioteca/Clienti/ListaClienti']))
    );
    
  }

}
