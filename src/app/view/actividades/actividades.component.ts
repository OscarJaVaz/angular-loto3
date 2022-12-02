import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})
export class ActividadesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //this.getData();
  }
  /*private getData() {
    this.spinner.show().then(() => {
      let gerentesGet = this.usuarioService.getByRol('ROLE_GERENTE');
      let planesGet = this.planService.getTipoPlanes();
      let desarrollosGet = this.desarrolloService.getAll();
      forkJoin([gerentesGet, planesGet, desarrollosGet]).subscribe({
        next: response => {
          this.gerentes = response[0] as Usuario[];
          this.planes = response[1] as TipoPlan[];
          this.desarrollos = response[2] as Desarrollo[];
          this.spinner.hide().then(() => {
          });
        },
        complete: () => {
          this.spinner.hide().then(() => {
          });
        }
      });
    });
  }//
*/

}
