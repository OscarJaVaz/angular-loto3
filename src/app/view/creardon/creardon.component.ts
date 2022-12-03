import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import swal from "sweetalert2";
import {NgxSpinnerService} from "ngx-spinner";
import {Router} from "@angular/router";
import { Donacion } from 'src/app/models/donacion';
import { DonacionService } from 'src/app/service/donacion.service';

@Component({
  selector: 'app-creardon',
  templateUrl: './creardon.component.html',
  styleUrls: ['./creardon.component.css']
})
export class CreardonComponent implements OnInit {

  donacion: Donacion = new Donacion ();

  constructor(private title:Title,
    private donacionService:DonacionService,
              private spinner: NgxSpinnerService,
              private router: Router) { }

  ngOnInit(): void {
    this.title.setTitle("Donativos");
    this.donacionService.getDonacion().subscribe(
      d => this.donacion =d
    );
  }

  guardar() {
    this.spinner.show().then(() => {
      this.donacionService.guardar(this.donacion).subscribe({
        next: () => {
          swal.fire('', 'Donacion almacenada con éxito', 'success').then(() => {
            this.router.navigate(['/home']).then(() => {});
          });
        },
        complete: () => {
          this.spinner.hide().then(() => {});
        }
      });
    });
  }

  delete(donacion:Donacion):void{
    console.log("Hello form delete");
    this.donacionService.borrar(donacion.id_donacion).subscribe(
      res=>this.donacionService.getDonacion().subscribe(
        Response=>donacion=Response
      )
    );
      }


}
