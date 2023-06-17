import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ListaLivrosComponent } from './componentes/smart/lista-livros/lista-livros.component';
import { AppRoutingModule } from './app.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotfoundComponent } from './componentes/notfound/notfound.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { CardLivroComponent } from './componentes/card-livro/card-livro.component';
import { AdicionarPageComponent } from './componentes/adicionar-page/adicionar-page.component';
import { initializer } from 'src/utils/app-init';
import { AcessoNegadoComponent } from './componentes/acesso-negado/acesso-negado.component';
import { CardLivroPreviewComponent } from './card-livro-preview/card-livro-preview.component';
import { EditarComponent } from './componentes/editar/editar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ListaLivrosComponent,
    NotfoundComponent,
    RodapeComponent,
    CardLivroComponent,
    AdicionarPageComponent,
    AcessoNegadoComponent,
    CardLivroPreviewComponent,
    EditarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    KeycloakAngularModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      deps: [ KeycloakService ],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
