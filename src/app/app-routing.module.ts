import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CiudadanoComponent } from './Components/ciudadano/ciudadano.component';
import { CrearCiudadanoComponent } from './Components/ciudadano/crear-ciudadano/crear-ciudadano.component';
import { ControlVacunasComponent } from './Components/control-vacunas/control-vacunas.component';
import { CrearControlVacunasComponent } from './Components/control-vacunas/crear-control-vacunas/crear-control-vacunas.component';
import { CrearDireccionComponent } from './Components/direccion/crear-direccion/crear-direccion.component';
import { DireccionComponent } from './Components/direccion/direccion.component';
import { PaginaPrincipalComponent } from './Components/pagina-principal/pagina-principal.component';

const routes: Routes = [
  {
    path: 'ciudadano',
    component: CiudadanoComponent,    
  },
  {
    path: 'crearciudadano',
    component: CrearCiudadanoComponent,    
  },
  {
    path: 'direccion',
    component: DireccionComponent,    
  },
  {
    path: 'creardireccion',
    component: CrearDireccionComponent,    
  },
  {
    path: 'controlvacunas',
    component: ControlVacunasComponent,    
  },
  {
    path: 'crearcontrolvacunas',
    component: CrearControlVacunasComponent,    
  },
  {
    path: '',
    component: PaginaPrincipalComponent,    
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
