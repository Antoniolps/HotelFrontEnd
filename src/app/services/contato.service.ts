import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contato } from '../models/contato';
import { ContatosDto } from '../models/contatosDto';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  contatos: Contato[] = [];
  constructor(private http: HttpClient) { }

  getContato(clienteId: Guid): Observable<ContatosDto>{
    return this.http.get<ContatosDto>(environment.apiUrl + "/Contacts/" + clienteId);
  }

  cadastrarContato(contato: Contato, clienteId: Guid){ 
    return this.http.post(environment.apiUrl + "/Contacts/" + clienteId, contato);
  }
}
