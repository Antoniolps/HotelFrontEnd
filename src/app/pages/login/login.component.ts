import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router) { 
      this.userForm = this.fb.group({
        userName: ['', [Validators.required]],
        password: ['', [Validators.required]]
      })
    }

  ngOnInit(): void {
  }

  singIn(){
    if(this.userForm.valid){
      this.userService
      .fazerLogin(this.userForm.value)
      .subscribe(() => {
        this.router.navigate(["home"]);
      }, error => {
        alert("Não foi possivel fazer login.")
      });
    }else{
      alert("Login ou senha incorretos!")
    }
  }
}
