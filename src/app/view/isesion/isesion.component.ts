import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Usuarioo } from 'src/app/models/usuarioo';
import {Router} from "@angular/router";
import {AuthService} from "../../auth/auth.service";
import swal from 'sweetalert2';
import {NgxSpinnerService} from "ngx-spinner";
@Component({
  selector: 'app-isesion',
  templateUrl: './isesion.component.html',
  styleUrls: ['./isesion.component.css']
})
export class IsesionComponent implements OnInit {
  ImagePath: String;
  constructor(private title:Title,
              private router: Router,
              private authService: AuthService,
              private spinner: NgxSpinnerService) { 
    this.ImagePath = '/assets/img/taichi.jpg'
  }

  
  public usuarioo: Usuarioo = new Usuarioo();

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/home']).then(() => {});
    }
  }

  login() {
    if (this.usuarioo.correo == null || this.usuarioo.contrasena == null || this.usuarioo.correo == '' || this.usuarioo.contrasena == '') {
      swal.fire('Error', 'Email o contraseña vacio', 'error').then(() => {});
      return;
    }
    this.spinner.show().then(() =>{
      this.authService.login(this.usuarioo).subscribe({
        next: response => {
          this.authService.guardarUsuarioo(response.access_token);
          this.authService.guardarToken(response.access_token);
          this.authService.guardarRefreshToken(response.refresh_token);
          this.router.navigate(['/home']).then(() => {});
        },
        error: err => {
          this.spinner.hide().then(() => {});
          if (err.status == 400) {
            swal.fire('Error', 'Correo o contraseña incorrectos', 'error').then(() => {});
          }

        },
        complete: () => {
          this.spinner.hide().then(() => {});
        }
      });
    });
  }
}