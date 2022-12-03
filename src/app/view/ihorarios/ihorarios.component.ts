import { Component, OnInit } from '@angular/core';
import swal from "sweetalert2";
import {NgxSpinnerService} from "ngx-spinner";
import {Router} from "@angular/router";
import { ActividadService } from 'src/app/service/actividad.service';
import { Actividad } from 'src/app/models/actividad';

@Component({
  selector: 'app-ihorarios',
  templateUrl: './ihorarios.component.html',
  styleUrls: ['./ihorarios.component.css']
})
export class IhorariosComponent implements OnInit {
  actividad: Actividad = new Actividad ();

  constructor(private actividadservice:ActividadService,
    private spinner: NgxSpinnerService,
    private router: Router) { }

  ngOnInit(): void {
    this.actividadservice.getActividad().subscribe(
      a => this.actividad =a
    );
  }
}
