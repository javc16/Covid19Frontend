import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ciudadano } from 'src/app/Models/ciudadano';
import { ControlVacunas } from 'src/app/Models/controlvacunas';
import { Direccion } from 'src/app/Models/direccion';
import { CiudadanoService } from 'src/app/Services/CiudadanoService/ciudadano.service';
import { ControlVacunasService } from 'src/app/Services/ControlVacunasService/control-vacunas.service';
import { DireccionService } from 'src/app/Services/DireccionService/direccion.service';

@Component({
  selector: 'app-crear-control-vacunas',
  templateUrl: './crear-control-vacunas.component.html',
  styleUrls: ['./crear-control-vacunas.component.scss']
})
export class CrearControlVacunasComponent implements OnInit {
  controlVacunas!: ControlVacunas;
  ciudadanos: Ciudadano[] = [];
  direcciones: Direccion[] = [];
  
  constructor
    (
      private _controlVacunasService: ControlVacunasService,
      private _ciudadanoService: CiudadanoService,
      private _direccionService: DireccionService,
      private router: Router
    ) {
    this.controlVacunas = new ControlVacunas();
  }

  ngOnInit(): void {
    this._ciudadanoService.getAll().subscribe(data => {
      this.ciudadanos = data;
      console.log(this.ciudadanos)
    });
    this._direccionService.getAll().subscribe(data => {
      this.direcciones = data;
      console.log(this.direcciones)
    });  
  }

  crear() {
    if (this.controlVacunas) {
      this.controlVacunas.estado=1;
      this.controlVacunas.primeraDosis=0;
      this.controlVacunas.segundaDosis=0;
      debugger;
      this._controlVacunasService.create(this.controlVacunas).subscribe(() => {
        this.router.navigate(['/controlvacunas'])
      });
    }
  }

  cancel() {
    this.router.navigate(['controlvacunas']);
  }
}
