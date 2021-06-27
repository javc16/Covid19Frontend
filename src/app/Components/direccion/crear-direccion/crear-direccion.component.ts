import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Direccion } from 'src/app/Models/direccion';
import { DireccionService } from 'src/app/Services/DireccionService/direccion.service';

@Component({
  selector: 'app-crear-direccion',
  templateUrl: './crear-direccion.component.html',
  styleUrls: ['./crear-direccion.component.scss']
})
export class CrearDireccionComponent implements OnInit {
  direccion!: Direccion;
  
  constructor
    (
      private _direccionService: DireccionService,
      private router: Router
    ) {
    this.direccion = new Direccion();
  }

  ngOnInit(): void {  
  }

  crearProductOwner() {
    if (this.direccion) {
      this.direccion.estado=1;
      debugger;
      this._direccionService.create(this.direccion).subscribe(() => {
        this.router.navigate(['/direccion'])
      });
    }
  }

  cancel() {
    this.router.navigate(['direccion']);
  }
}
