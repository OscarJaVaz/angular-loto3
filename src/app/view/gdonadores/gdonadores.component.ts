import { Component, OnInit } from '@angular/core';
import swal from "sweetalert2";
import {NgxSpinnerService} from "ngx-spinner";
import {Router} from "@angular/router";
import { Donantegeneral } from 'src/app/models/donantegeneral';
import { DonanteGeneralService } from 'src/app/service/donante-general.service';
import { Donacion } from 'src/app/models/donacion';
import { DonacionService } from 'src/app/service/donacion.service';
import {forkJoin, observable, pipe} from "rxjs";


@Component({
  selector: 'app-gdonadores',
  templateUrl: './gdonadores.component.html',
  styleUrls: ['./gdonadores.component.css']
})
export class GdonadoresComponent implements OnInit {
  public donaciones: Donacion []=[];

  donantegeneral:Donantegeneral =new Donantegeneral ();

  constructor(private donacionService: DonacionService,
              private spinner: NgxSpinnerService,
              private router: Router) { }
   

  ngOnInit(): void {
    this.getData();
  }

  private getData() {
    this.spinner.show().then(() => {
      let donacionesGet = this.donacionService.getDonacion();
      forkJoin([donacionesGet]).subscribe({
       next: response => {
          this.donaciones = response[0] as Donacion[];
          
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
  
  /*guardar() {
    this.spinner.show().then(() => {
      this.donantegeneralService.guardar(this.donantegeneral).subscribe({
        next: () => {
          swal.fire('', 'Donador almacenado con éxito', 'success').then(() => {
            this.router.navigate(['/home']).then(() => {});
          });
        },
        complete: () => {
          this.spinner.hide().then(() => {});
        }
      });
    });
  }

  
  delete(donantegeneral:Donantegeneral):void{
    console.log("Hello form delete");
    this.donantegeneralService.borrar(donantegeneral.id_usuario).subscribe(
      res=>this.donantegeneralService.getDonante().subscribe(
        Response=>donantegeneral=Response
      )
    );
  }*/

  generatePdf() {
  }
}
