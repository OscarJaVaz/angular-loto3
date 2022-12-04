import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import swal from "sweetalert2";
import {NgxSpinnerService} from "ngx-spinner";
import {Router,ActivatedRoute} from "@angular/router";
import { Donacion } from 'src/app/models/donacion';
import { DonacionService } from 'src/app/service/donacion.service';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Usuarioo } from 'src/app/models/usuarioo';
import {forkJoin} from "rxjs";


@Component({
  selector: 'app-creardon',
  templateUrl: './creardon.component.html',
  styleUrls: ['./creardon.component.css']
})
export class CreardonComponent implements OnInit {

  public donacion: Donacion = new Donacion ();
  public usuarioos: Usuarioo []=[];
  public data:any = "";

  constructor(private title:Title,
    private donacionService:DonacionService,
    private usuarioService:UsuarioService,
              private spinner: NgxSpinnerService,
              private router: Router) { }

  ngOnInit(): void {
    this.title.setTitle("Donativos");
    this.datos();
  }

datos(){
 let usuarios = this.usuarioService.getUssurioooos();
 forkJoin([usuarios]).subscribe(res =>{
   this.usuarioos = res[0] as Usuarioo[];
 })
}

  private getData() {
    this.spinner.show().then(() => {
      let usuarioosGet = this.usuarioService.getUssurioooos();
      forkJoin([usuarioosGet]).subscribe({
        next: response => {
          this.usuarioos = response[0] as Usuarioo[];

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

  nuevo() {
    this.spinner.show().then(() => {
      let usuario: Usuarioo = new Usuarioo();
      usuario.id_usuario = this.data;
      this.donacion.usuario = usuario;
      this.donacionService.nuevo(this.donacion).subscribe({
        next: () => {
          swal.fire('', 'Donacion almacenada con éxito', 'success').then(() => {
            this.router.navigate(['/gdonadores']).then(() => {});
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
