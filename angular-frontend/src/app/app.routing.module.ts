import { ErrorServerComponent } from './componentes/error-server/error-server.component';
import { AcessoNegadoComponent } from './componentes/acesso-negado/acesso-negado.component';
import { AdicionarPageComponent } from './componentes/adicionar-page/adicionar-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { NotfoundComponent } from './componentes/notfound/notfound.component';
import { AuthGuard } from './auth/auth.guard';
import { ListaLivrosComponent } from './componentes/lista-livros/lista-livros.component';
import { EditarComponent } from './componentes/editar/editar.component';

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
    data: { roles: ['admin'] }
  },
  {
    path: "edit/:id",
    component: EditarComponent,
    canActivate: [AuthGuard],
    data: { roles: ['admin'] }
  },
  {
    path: "server-error",
    component: ErrorServerComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "acesso-negado",
    component: AcessoNegadoComponent,
    canActivate: [AuthGuard],
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
