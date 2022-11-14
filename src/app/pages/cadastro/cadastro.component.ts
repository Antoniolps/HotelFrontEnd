import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  clienteForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private clienteService: ClienteService,
    private router: Router
    ) { 
      this.clienteForm = this.fb.group({
        name: ['', [Validators.required]],
        cpfCustomer: ['', [Validators.required]],
        rgCustomer: ['', [Validators.required]],
      })
    }

  ngOnInit(): void {
  }

  salvar(){
    if(this.clienteForm.valid){
      this.clienteService
      .cadastrarCliente(this.clienteForm.value)
      .subscribe(() => {
        this.router.navigate([""]);
      }, error=> {
        alert("Não foi possivel realizar o cadastro.")
      });
    } else{
      alert("Verifique os campos obrigatórios!")
    }
      
  }
}

