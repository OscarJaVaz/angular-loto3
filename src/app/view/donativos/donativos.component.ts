import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import swal from "sweetalert2";
import {NgxSpinnerService} from "ngx-spinner";
import {Router} from "@angular/router";
import { Donacion } from 'src/app/models/donacion';
import { DonacionService } from 'src/app/service/donacion.service';



@Component({
  selector: 'app-donativos',
  templateUrl: './donativos.component.html',
  styleUrls: ['./donativos.component.css']
})
export class DonativosComponent implements OnInit {


  constructor(private title:Title) { }

  ngOnInit(): void {
    this.title.setTitle("Donativos");


}
}
