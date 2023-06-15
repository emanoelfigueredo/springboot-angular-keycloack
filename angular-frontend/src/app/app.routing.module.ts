import { AcessoNegadoComponent } from './componentes/acesso-negado/acesso-negado.component';
import { AdicionarPageComponent } from './componentes/adicionar-page/adicionar-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { ListaLivrosComponent } from './componentes/smart/lista-livros/lista-livros.component';
import { NotfoundComponent } from './componentes/notfound/notfound.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: 'full'
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "lista",
    component: ListaLivrosComponent,
    canActivate: [AuthGuard],
    data: { roles: ['user'] }
  },
  {
    path: "add",
    component: AdicionarPageComponent,
    canActivate: [AuthGuard],
    data: { roles: ['user'] }
  },
  {
    path: "acesso-negado",
    component: AcessoNegadoComponent
  },
  {
    path: "**",
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
