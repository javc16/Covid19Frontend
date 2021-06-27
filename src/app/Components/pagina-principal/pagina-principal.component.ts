import { Component, HostBinding, OnInit } from '@angular/core';
import { ControlVacunasService } from 'src/app/Services/ControlVacunasService/control-vacunas.service';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.scss']
})
export class PaginaPrincipalComponent implements OnInit {

  @HostBinding('class') classes='row';
  vista: any=[];

  constructor(private _controlVacunasService: ControlVacunasService) { }

  ngOnInit(){
    this._controlVacunasService.getAll().subscribe(
      resp => {
        this.vista = resp;
      },
      err => console.log(err)
    );
  }
}
