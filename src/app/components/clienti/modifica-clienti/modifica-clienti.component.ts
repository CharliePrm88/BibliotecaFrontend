import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Clienti } from 'src/app/models/clienti.model';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-modifica-clienti',
  templateUrl: './modifica-clienti.component.html',
  styleUrls: ['./modifica-clienti.component.css']
})
export class ModificaClientiComponent implements OnInit {
  appoggio!:String;
  id:number=0;
  cliente: Clienti = {
    idCliente: 0,
    nome: "",
    cognome: "",
    codiceFiscale: ""
  }
  constructor(private cs:ClienteService, private router: Router,private route: ActivatedRoute,) { }

  ngOnInit(): void {
  this.ritornaCliente(this.route.snapshot.queryParams.idCliente);
  }

  ritornaCliente(idCliente:number){
    this.cs.ritorna(idCliente).subscribe(
      Response => (this.cliente=Response),
      Error=>console.error(Error),
    );
  }

  modificaCliente(c:Clienti){
    const oggetto = {
      idCliente: this.cliente.idCliente,
      nome: this.cliente.nome,
      cognome: this.cliente.cognome,
      codiceFiscale: this.cliente.codiceFiscale
    };
    this.cs.modifica(c).subscribe(
      Response => (console.log(Response)),
      Error=>console.error(Error),
      ()=> this.router.navigate(["Biblioteca/Clienti/ListaClienti"])
      
    );

  

  }

}
