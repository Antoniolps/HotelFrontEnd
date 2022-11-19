import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Endereco } from '../models/endereco';
import { EnderecosDto } from '../models/enderecosDto';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  enderecos : Endereco[] = [];
  constructor(private http: HttpClient) { }

  getEndereco(clienteId: Guid): Observable<EnderecosDto>{
    return this.http.get<EnderecosDto>(environment.apiUrl + "/Address/" + clienteId);
  }

  cadastrarEndereco(endereco: Endereco, clienteId: Guid){
    return this.http.post(environment.apiUrl + "/Address/" + clienteId, endereco);
  }
}
