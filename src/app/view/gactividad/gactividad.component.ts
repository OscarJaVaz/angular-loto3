import { Component, OnInit } from '@angular/core';
import {NgxSpinnerService} from "ngx-spinner";
import { Actividad } from 'src/app/models/actividad';
import {Router,ActivatedRoute} from "@angular/router";
import { ActividadService } from 'src/app/service/actividad.service';
import {forkJoin, observable, pipe} from "rxjs";

@Component({
  selector: 'app-gactividad',
  templateUrl: './gactividad.component.html',
  styleUrls: ['./gactividad.component.css']
})
export class GactividadComponent implements OnInit {
  public actividades: Actividad []=[];

  constructor(private spinner: NgxSpinnerService,
    private actividadService: ActividadService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getData();
  }

  private getData() {
    this.spinner.show().then(() => {
      let actividadesGet = this.actividadService.getActividades();
      forkJoin([actividadesGet]).subscribe({
       next: response => {
          this.actividades = response[0] as Actividad[];
          
          this.spinner.hide().then(() => {
          });
        },
        complete: () => {
          this.spinner.hide().then(() => {
          });
        }
      });
  });

}

}
