import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { HeaderComponent } from './componentes/header/header.component';
import { AppRoutingModule } from './app.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotfoundComponent } from './componentes/notfound/notfound.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { initializer } from 'src/utils/app-init';
import { AcessoNegadoComponent } from './componentes/acesso-negado/acesso-negado.component';
import { ErrorServerComponent } from './componentes/error-server/error-server.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { EditarComponent } from './componentes/editar/editar.component';
import { AdicionarPageComponent } from './componentes/adicionar-page/adicionar-page.component';
import { CardLivroComponent } from './componentes/card-livro/card-livro.component';
import { CardLivroPreviewComponent } from './componentes/card-livro-preview/card-livro-preview.component';
import { ListaLivrosComponent } from './componentes/lista-livros/lista-livros.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NotfoundComponent,
    RodapeComponent,
    AcessoNegadoComponent,
    EditarComponent,
    ErrorServerComponent,
    AdicionarPageComponent,
    CardLivroComponent,
    CardLivroPreviewComponent,
    EditarComponent,
    ListaLivrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    KeycloakAngularModule,
    BrowserAnimationsModule,
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
