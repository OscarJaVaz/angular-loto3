import { Component, OnInit } from '@angular/core';
import { Usuarioo } from 'src/app/models/usuarioo';
import {NgxSpinnerService} from "ngx-spinner";

import {Router} from "@angular/router";
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-ialumnos',
  templateUrl: './ialumnos.component.html',
  styleUrls: ['./ialumnos.component.css']
})
export class IalumnosComponent implements OnInit {

  public usuarioos: Usuarioo[] = []

  constructor(private spinner: NgxSpinnerService,
    private usuarioService: UsuarioService,
    private router: Router) { }

  ngOnInit(): void {
    
  }

 /* private getData() {
    this.spinner.show().then(() => {
      this.usuarioService.getUser().subscribe({
        next: value => {
          this.usuarioos = value as Usuarioo[];
        },
        complete: () => {
          this.spinner.hide().then(() => {});
        }
      });
    });
  }*/

}
