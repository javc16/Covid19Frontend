import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AngularMaterialModule } from './angular-material.module';
/***************************************************************************/
import { CiudadanoComponent } from './Components/ciudadano/ciudadano.component';
import { DireccionComponent } from './Components/direccion/direccion.component';
import { ControlVacunasComponent } from './Components/control-vacunas/control-vacunas.component';
import { PaginaPrincipalComponent } from './Components/pagina-principal/pagina-principal.component';
import { CrearCiudadanoComponent } from './Components/ciudadano/crear-ciudadano/crear-ciudadano.component';
import { CrearDireccionComponent } from './Components/direccion/crear-direccion/crear-direccion.component';
@NgModule({
  declarations: [
    AppComponent,
    CiudadanoComponent,
    DireccionComponent,
    ControlVacunasComponent,
    PaginaPrincipalComponent,
    CrearCiudadanoComponent,
    CrearDireccionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
