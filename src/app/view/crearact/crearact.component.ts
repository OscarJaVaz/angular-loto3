import { Component, OnInit } from '@angular/core';
import swal from "sweetalert2";
import {NgxSpinnerService} from "ngx-spinner";
import {Router} from "@angular/router";
import { ActividadService } from 'src/app/service/actividad.service';
import { Actividad } from 'src/app/models/actividad';

@Component({
  selector: 'app-crearact',
  templateUrl: './crearact.component.html',
  styleUrls: ['./crearact.component.css']
})
export class CrearactComponent implements OnInit {

  actividad: Actividad = new Actividad

  constructor(private actividadservice:ActividadService,
    private spinner: NgxSpinnerService,
    private router: Router) { }

 

  ngOnInit(): void {
  }

  nuevo() {
    this.spinner.show().then(() => {
      this.actividadservice.nuevo(this.actividad).subscribe({
        next: () => {
          swal.fire('', 'Actividad almacenada con éxito', 'success').then(() => {
            this.router.navigate(['/gactividad']).then(() => {});
          });
        },
        complete: () => {
          this.spinner.hide().then(() => {});
        }
      });
    });
  }

}
