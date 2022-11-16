import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  getEndereco(): Observable<EnderecosDto>{
    return this.http.get<EnderecosDto>(environment.apiUrl + "/Address");
  }

  cadastrarEndereco(endereco: Endereco){
    return this.http.post(environment.apiUrl + "/Address", endereco);
  }
}
