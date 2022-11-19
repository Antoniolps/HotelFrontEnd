import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';
import { environment } from 'src/environments/environment';
import { Senha } from '../models/senha';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  cadastrarSenha(senha: Senha, clienteId: Guid){
    return this.http.post(environment.apiUrl + "/UserLogin/register/" + clienteId, senha);
  }

  fazerLogin(user: User){
    return this.http.post(environment.apiUrl + "/UserLogin/login", user);
  }
}
