import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ciudadano } from 'src/app/Models/ciudadano';
import { CiudadanoService } from 'src/app/Services/CiudadanoService/ciudadano.service';

@Component({
  selector: 'app-crear-ciudadano',
  templateUrl: './crear-ciudadano.component.html',
  styleUrls: ['./crear-ciudadano.component.scss']
})
export class CrearCiudadanoComponent implements OnInit {
  ciudadano!: Ciudadano;
  
  constructor
    (
      private _ciudadanoService: CiudadanoService,
      private router: Router
    ) {
    this.ciudadano = new Ciudadano();
  }

  ngOnInit(): void {  
  }

  crearProductOwner() {
    if (this.ciudadano) {
      this.ciudadano.estado=1;
      debugger;
      this._ciudadanoService.create(this.ciudadano).subscribe(() => {
        this.router.navigate(['/ciudadano'])
      });
    }
  }

  cancel() {
    this.router.navigate(['ciudadano']);
  }
}
