import { Injectable } from '@angular/core';
import { Clienti} from 'src/app/models/clienti.model'
import {ClientiInsert} from 'src/app/models/clienti.model'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = "http://127.0.0.1:8080/Biblioteca-0.0.1-SNAPSHOT/BibliotecaRest/Cliente"

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { 
  }
  lista(): Observable<Clienti[]> {
    return this.http.get<Clienti[]>(`${baseUrl}/Lista`);
  }
  ritorna(idCliente:number):Observable<Clienti>{
    return this.http.get<Clienti>(`${baseUrl}/Ritorna?idCliente=${idCliente}`);
  }
  inserisci(c:ClientiInsert){
    return this.http.post(`${baseUrl}/Inserisci`,c);
  }
  cancella(idCliente:number){
    return this.http.delete(`${baseUrl}/Cancella?idCliente=${idCliente}`)
  }
  modifica(c:Clienti){
    return this.http.put(`${baseUrl}/Modifica`,c);
  }
}
