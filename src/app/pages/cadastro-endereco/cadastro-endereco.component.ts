import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { Cliente } from 'src/app/models/cliente';
import { EnderecoService } from 'src/app/services/endereco.service';
import { ContatoService } from 'src/app/services/contato.service';

@Component({
  selector: 'app-cadastro-endereco',
  templateUrl: './cadastro-endereco.component.html',
  styleUrls: ['./cadastro-endereco.component.scss']
})
export class CadastroEnderecoComponent implements OnInit {

  clientes: Cliente[] = [];
  enderecoForm: FormGroup;
  contatoForm: FormGroup;
  idCliente: Guid =  Guid.parse((sessionStorage.getItem("id")) as string);

  constructor(
    private fb: FormBuilder,
    private enderecoService: EnderecoService,
    private contatoService: ContatoService,
    private router: Router,
    ) { 
      this.enderecoForm = this.fb.group({
        street: ['', [Validators.required]],
        number: [, [Validators.required]],
        district: ['', [Validators.required]],
        city: ['', [Validators.required]],
        state: ['', [Validators.required]],
        postalCode: ['', [Validators.required]]
      })
      this.contatoForm = this.fb.group({
        cellPhone: ['', [Validators.required]],
        email: ['', [Validators.email, Validators.required]]
      })
    }
    
  ngOnInit(): void {
    
  }

  salvarEndereco(){
    if(this.enderecoForm.valid && this.contatoForm.valid){
      this.enderecoService
      .cadastrarEndereco(this.enderecoForm.value, this.idCliente)
      .subscribe(() => {
      }, error => {
        alert("Não foi possivel realizar o cadastro.")
      });

      this.contatoService
      .cadastrarContato(this.contatoForm.value, this.idCliente)
      .subscribe(() => {
        this.router.navigate(["cadastro/senha"]);
      }, error => { 
        alert("Não foi possivel realizar o cadastro.")
      });
    } else{
      alert("Verifique os campos obrigatórios!")
    }

    
  }
}
  