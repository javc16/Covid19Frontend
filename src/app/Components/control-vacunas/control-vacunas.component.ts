import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ControlVacunas } from 'src/app/Models/controlvacunas';
import { ControlVacunasService } from 'src/app/Services/ControlVacunasService/control-vacunas.service';

@Component({
  selector: 'app-control-vacunas',
  templateUrl: './control-vacunas.component.html',
  styleUrls: ['./control-vacunas.component.scss']
})
export class ControlVacunasComponent implements OnInit {
  controlVacunacion: ControlVacunas[] = [];
  displayedColumns: string[] = ['id','nombreCiudadano','centroVacunacion', 'primeraDosis', 'segundaDosis', 'action'];
  // displayedColumns: string[] = ['id', 'nombre', 'codigoEmpleado', 'departamento', 'action'];
  constructor(private _controlVacunasService: ControlVacunasService, private router: Router) { }

  ngOnInit(): void {
    this._controlVacunasService.getAll().subscribe(data => {
      this.controlVacunacion = data;
      console.log(this.controlVacunacion)
    });
  }

  create(): void {
    this.router.navigate(['crearcontrolvacunas']);
  }
}
