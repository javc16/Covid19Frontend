import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ciudadano } from 'src/app/Models/ciudadano';
import { CiudadanoService } from 'src/app/Services/CiudadanoService/ciudadano.service';

@Component({
  selector: 'app-ciudadano',
  templateUrl: './ciudadano.component.html',
  styleUrls: ['./ciudadano.component.scss']
})
export class CiudadanoComponent implements OnInit {
  ciudadanos: Ciudadano[] = [];
  displayedColumns: string[] = ['id', 'nombre', 'apellido','numeroIdentidad','edad', 'action'];
  // displayedColumns: string[] = ['id', 'nombre', 'codigoEmpleado', 'departamento', 'action'];
  constructor(private _ciudadanoService: CiudadanoService, private router: Router) { }

  ngOnInit(): void {
    this._ciudadanoService.getAll().subscribe(data => {
      this.ciudadanos = data;
      console.log(this.ciudadanos)
    });
  }

  create(): void {
    this.router.navigate(['crearciudadano']);
  }

}
