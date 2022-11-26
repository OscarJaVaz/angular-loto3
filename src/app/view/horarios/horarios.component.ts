import { Component, OnInit } from '@angular/core';
import { Actividad } from 'src/app/models/actividad';
import { GactividadComponent } from '../gactividad/gactividad.component';
import { IhorariosComponent } from '../ihorarios/ihorarios.component';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.css']
})
export class HorariosComponent implements OnInit {

dias: string []=["Lunes","Martes","Miercoles","Jueves", "viernes"]
  constructor() { }



  ngOnInit(): void {
  }

}
