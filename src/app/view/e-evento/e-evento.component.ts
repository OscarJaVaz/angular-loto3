import { Component, OnInit } from '@angular/core';
import {NgxSpinnerService} from "ngx-spinner";
import {Router} from "@angular/router";
import { EventoService } from 'src/app/service/evento.service';
import { Evento } from 'src/app/models/evento';
import swal from "sweetalert2";

@Component({
  selector: 'app-e-evento',
  templateUrl: './e-evento.component.html',
  styleUrls: ['./e-evento.component.css']
})
export class EEventoComponent implements OnInit {

  evento: Evento =new Evento();

  constructor(private eventoService: EventoService,
    private spinner: NgxSpinnerService,
    private router: Router) { }

  ngOnInit(): void {
    this.eventoService.getEvento().subscribe(
      e => this.evento =e
    );
  }

  guardar() {
    this.spinner.show().then(() => {
      this.eventoService.guardar(this.evento).subscribe({
        next: () => {
          swal.fire('', 'Evento almacenado con éxito', 'success').then(() => {
            this.router.navigate(['/home']).then(() => {});
          });
        },
        complete: () => {
          this.spinner.hide().then(() => {});
        }
      });
    });
  }

  delete():void{
    console.log("Hello form delete");
    this.eventoService.borrar(this.evento.id_evento).subscribe(
      res=>this.eventoService.getEvento().subscribe(
        Response=>this.evento=Response
      )
    );
  }

}
