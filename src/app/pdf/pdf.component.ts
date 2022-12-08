import { Component, OnInit } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfMake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import {NgxSpinnerService} from "ngx-spinner";
import {Router,ActivatedRoute} from "@angular/router";
import {forkJoin, observable, pipe} from "rxjs";
import { Donacion } from '../models/donacion';
import { DonacionService } from '../service/donacion.service';



@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit {
  public donaciones: Donacion []=[];

  constructor( private donacionService:DonacionService,
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    
  }

  /*private getData() {
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

}*/

  //EJEMPLO

  createPDF(){
    
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









  //PDF

   createPdf(){

    const pdfDefinition: any= {
      content: [
        {
          text: 'Hola mundo'
        }
      ]
    }

    const pdf = pdfMake.createPdf(pdfDefinition);
    pdf.open();

   }


}

