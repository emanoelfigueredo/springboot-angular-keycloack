import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ListaLivrosComponent,
    NotfoundComponent,
    RodapeComponent,
    CardLivroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
