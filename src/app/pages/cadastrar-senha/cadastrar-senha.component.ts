import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn, Form, ValidationErrors } from '@angular/forms';
import { Guid } from 'guid-typescript';
import { Cliente } from 'src/app/models/cliente';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-senha',
  templateUrl: './cadastrar-senha.component.html',
  styleUrls: ['./cadastrar-senha.component.scss']
})
export class CadastrarSenhaComponent implements OnInit {

  clientes: Cliente[] = [];
  senhaForm: FormGroup;
  idCliente: Guid = Guid.parse((sessionStorage.getItem("id")) as string);

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
    ) {
      this.senhaForm = this.fb.group({
        password: ['', [Validators.required]],
      })
    }

  ngOnInit(): void {
    
  }

  salvarSenha(){
    if(this.senhaForm.valid){
      this.userService
      .cadastrarSenha(this.senhaForm.value, this.idCliente)
      .subscribe(() => {
        this.router.navigate([""]);
      }, error => {
        alert("Não foi possivel realizar o cadastro.")
      });
    } else{
      alert("Verifique os campos obrigatórios!")
    }
  }
            
}
  


