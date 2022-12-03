import { Component, OnInit } from '@angular/core';
import swal from "sweetalert2";
import {NgxSpinnerService} from "ngx-spinner";
import {Router} from "@angular/router";
import { ActividadService } from 'src/app/service/actividad.service';
import { Actividad } from 'src/app/models/actividad';

@Component({
  selector: 'app-iactividad',
  templateUrl: './iactividad.component.html',
  styleUrls: ['./iactividad.component.css']
})
export class IactividadComponent implements OnInit {

  actividad: Actividad = new Actividad ();

  constructor(private actividadservice:ActividadService,
    private spinner: NgxSpinnerService,
    private router: Router) { }

    ngOnInit(): void {
      this.actividadservice.getActividad().subscribe(
        a => this.actividad =a
      );
    }
    
  
    guardar() {
      this.spinner.show().then(() => {
        this.actividadservice.nuevo(this.actividad).subscribe({
          next: () => {
            swal.fire('', 'Actividad almacenada con éxito', 'success').then(() => {
              this.router.navigate(['/home']).then(() => {});
            });
          },
          complete: () => {
            this.spinner.hide().then(() => {});
          }
        });
      });
    }
  
  
  
    delete(actividad:Actividad):void{
      console.log("Hello form delete");
      this.actividadservice.borrar(actividad.id_actividad).subscribe(
        res=>this.actividadservice.getActividad().subscribe(
          Response=>actividad=Response
        )
      );
    }

}
