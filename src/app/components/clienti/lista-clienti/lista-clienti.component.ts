import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import {Clienti} from 'src/app/models/clienti.model'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lista-clienti',
  templateUrl: './lista-clienti.component.html',
  styleUrls: ['./lista-clienti.component.css']
})

export class ListaClientiComponent implements OnInit {
  idCliente!:number;
  clienti?: Clienti[];
  clienteM!: Clienti;
 
   constructor(private cs:ClienteService,
    private route: ActivatedRoute,
    private router: Router) { }
 
   ngOnInit(): void {
     this.listaClienti();
   }
 
   listaClienti():void{
       this.cs.lista().subscribe(
         data => {
           this.clienti = data;
           console.log(data);
         },
         error => {
           console.log(error);
         });
   }
 
   trovaCliente():void{
     this.cs.ritorna(this.idCliente).subscribe(
       data => {
         this.clienteM = data;
         console.log(data);
       },
       error => {
         console.log(error);
       });;
   }
 
   rimuoviCliente(idCliente:number):void{
     this.cs.cancella(idCliente).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      },
      ()=> window.location.reload()
      );
   }
}
