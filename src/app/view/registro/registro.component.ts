import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import swal from "sweetalert2";
import {NgxSpinnerService} from "ngx-spinner";
import {Router} from "@angular/router";
import { Usuarioo } from 'src/app/models/usuarioo';
import { UsuarioService } from 'src/app/service/usuario.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuarioo:Usuarioo = new Usuarioo ();

  constructor(private title:Title,
    private usuarioService:UsuarioService,
              private spinner: NgxSpinnerService,
              private router: Router) { }

  ngOnInit(): void {
    this.title.setTitle("Registrarse");
    
  }

  guardar() {
    this.spinner.show().then(() => {
      this.usuarioService.nuevo(this.usuarioo).subscribe({
        next: () => {
          swal.fire('', 'Usuario almacenado con éxito', 'success').then(() => {
            this.router.navigate(['/home']).then(() => {});
          });
        },
        complete: () => {
          this.spinner.hide().then(() => {});
        }
      });
    });
  }


  delete(usuarioo:Usuarioo):void{
    console.log("Hello form delete");
    this.usuarioService.borrar(usuarioo.id_usuario).subscribe(
      res=>this.usuarioService.getUser().subscribe(
        Response=>usuarioo=Response
      )
    );
  }



}
