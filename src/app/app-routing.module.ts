import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroEnderecoComponent } from './pages/cadastro-endereco/cadastro-endereco.component';
import { CadastrarSenhaComponent } from './pages/cadastrar-senha/cadastrar-senha.component';

const routes: Routes = [
  { path: "", component: LoginComponent},
  { path: "cadastro", component: CadastroComponent},
  { path: "cadastro/endereco", component: CadastroEnderecoComponent},
  { path: "cadastro/senha", component: CadastrarSenhaComponent},
  { path: "home", component: HomeComponent},
  { path  : "**", redirectTo: "", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
