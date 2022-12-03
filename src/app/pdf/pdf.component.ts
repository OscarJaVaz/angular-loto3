import { Component, OnInit } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfMake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //EJEMPLO

  createPDF(){

    const pdfDefinition: any = {
      content: [
        
        {text: 'Reporte de donaciones', style: 'header'},
        
		'---------------------------------------------------------------------------------------------------------------------',
    
    {
          
          table: {
            headerRows: 1,
            body: [
              [{text: 'Tipo de donacion', style: 'tableHeader'}, {text: 'Numero de telefono', style: 'tableHeader'}, {text: 'Observaciones', style: 'tableHeader'}, {text: 'Proviene de', style: 'tableHeader'}],
              ['ejemplo1', 'ejemplo1', 'ejemplo1', 'ejemplo1'],
              ['ejemplo2', 'ejemplo2', 'ejemplo2', 'ejemplo2'],
              ['ejemplo3', 'ejemplo3', 'ejemplo3', 'ejemplo3'],
              ['ejemplo4', 'ejemplo4', 'ejemplo4', 'ejemplo4'],
              ['ejemplo5', 'ejemplo5', 'ejemplo5', 'ejemplo5'],
            ]
          },
          layout: 'lightHorizontalLines'
        },
        '---------------------------------------------------------------------------------------------------------------------'
      ]
    }


    const pdf = pdfMake.createPdf(pdfDefinition);

    pdf.open();

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

