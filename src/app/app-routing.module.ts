import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroEnderecoComponent } from './pages/cadastro-endereco/cadastro-endereco.component';

const routes: Routes = [
  { path: "", component: LoginComponent},
  { path: "cadastro", component: CadastroComponent},
  { path: "cadastro/endereco", component: CadastroEnderecoComponent},
  { path  : "**", redirectTo: "", pathMatch: "full"},
  { path: "home", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
