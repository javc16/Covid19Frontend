import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Direccion } from 'src/app/Models/direccion';
import { DireccionService } from 'src/app/Services/DireccionService/direccion.service';

@Component({
  selector: 'app-direccion',
  templateUrl: './direccion.component.html',
  styleUrls: ['./direccion.component.scss']
})
export class DireccionComponent implements OnInit {
  direcciones: Direccion[] = [];
  displayedColumns: string[] = ['id', 'ciudad', 'colonia','centroVacunacion', 'action'];
  // displayedColumns: string[] = ['id', 'nombre', 'codigoEmpleado', 'departamento', 'action'];
  constructor(private _direccionService: DireccionService, private router: Router) { }

  ngOnInit(): void {
    this._direccionService.getAll().subscribe(data => {
      this.direcciones = data;
      console.log(this.direcciones)
    });
  }

  create(): void {
    this.router.navigate(['creardireccion']);
  }

  delete(direccion:Direccion) {  
    this._direccionService.delete(direccion)
      .subscribe((res: any) => {
        this._direccionService.getAll().subscribe((res: any[])=>{
          this.direcciones= res;          
        })
        debugger;
        
      });     
  }
}
