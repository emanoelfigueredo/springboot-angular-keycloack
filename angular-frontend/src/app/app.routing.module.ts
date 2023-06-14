import { AdicionarPageComponent } from './componentes/adicionar-page/adicionar-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { ListaLivrosComponent } from './componentes/smart/lista-livros/lista-livros.component';
import { NotfoundComponent } from './componentes/notfound/notfound.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: 'full'
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "lista",
    component: ListaLivrosComponent
  },
  {
    path: "add",
    component: AdicionarPageComponent
  },
  {
    path: "**",
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
