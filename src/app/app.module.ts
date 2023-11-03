import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import * as AOS from 'aos';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//angularmaterial
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

// components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SobreEmpresaComponent } from './components/sobre-empresa/sobre-empresa.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ContatoComponent } from './components/contato/contato.component';
import { SistemasComponent } from './components/sistemas/sistemas.component';
import { BannerComponent } from './components/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SobreEmpresaComponent,
    ClientesComponent,
    ContatoComponent,
    SistemasComponent,
    BannerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatListModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(){
    AOS.init();
  }
  
}
