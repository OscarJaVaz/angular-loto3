import { Component, OnInit } from '@angular/core';
import {catchError} from "rxjs";
import {Title} from "@angular/platform-browser";
import {NgxSpinnerService} from "ngx-spinner";
import {ActivatedRoute, Router} from "@angular/router";
import { DonacionService } from 'src/app/service/donacion.service';
import { Donacion } from 'src/app/models/donacion';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   public donacion: Donacion = new Donacion();

  constructor(private title:Title,
              private spinner: NgxSpinnerService,
      private router: Router,
      private route: ActivatedRoute,
      private donacionService: DonacionService) { }

  ngOnInit(): void {
    this.title.setTitle("Fundacion Loto Tr3s A.C");
  }

  generatePdf() {
    this.spinner.show().then(() => {
      this.donacionService.generatePdf(this.donacion.id_donacion).subscribe({
        next: value => {
          let fileName = "Donacion" + this.donacion.id_donacion + ".pdf";
          let blob: Blob = value.body as Blob;
          let a = document.createElement('a');
          a.download = fileName;
          a.href = window.URL.createObjectURL(blob);
          a.click();
        },
        error: err => {
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

}

 
