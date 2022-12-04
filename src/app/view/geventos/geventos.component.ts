import { Component, OnInit } from '@angular/core';
import swal from "sweetalert2";
import {NgxSpinnerService} from "ngx-spinner";
import {Router} from "@angular/router";
import { EventoService } from 'src/app/service/evento.service';
import { Evento } from 'src/app/models/evento';

@Component({
  selector: 'app-geventos',
  templateUrl: './geventos.component.html',
  styleUrls: ['./geventos.component.css']
})
export class GeventosComponent implements OnInit {

  evento: Evento =new Evento();

  constructor(private eventoService: EventoService,
    private spinner: NgxSpinnerService,
    private router: Router) { }

  ngOnInit(): void {
    this.eventoService.getEvento().subscribe(
      e => this.evento =e
    );
  }


  borrar():void{
    console.log("Hello form delete");
    this.eventoService.borrar(this.evento.id_evento).subscribe(
      res=>this.eventoService.getEvento().subscribe(
        Response=>this.evento=Response
      )
    );
  }

}
