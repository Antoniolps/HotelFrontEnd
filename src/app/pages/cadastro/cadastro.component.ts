import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
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

  salvarCliente(){
    if(this.clienteForm.valid){
      this.clienteService
      .cadastrarCliente(this.clienteForm.value)
      .subscribe((res) => {
        let resSTR = JSON.stringify(res);
        let resJSON = JSON.parse(resSTR);
        sessionStorage.setItem("id", resJSON.id);
        this.router.navigate(["cadastro/endereco"]);
      }, error=> {
        alert("Não foi possivel realizar o cadastro.")
      });
    } else{
      alert("Verifique os campos obrigatórios!")
    }
    
    
  }
}

