import { Component, OnInit } from '@angular/core';
import swal from "sweetalert2";
import {NgxSpinnerService} from "ngx-spinner";
import {Router} from "@angular/router";
import { Donantegeneral } from 'src/app/models/donantegeneral';
import { DonanteGeneralService } from 'src/app/service/donante-general.service';


@Component({
  selector: 'app-gdonadores',
  templateUrl: './gdonadores.component.html',
  styleUrls: ['./gdonadores.component.css']
})
export class GdonadoresComponent implements OnInit {

  donantegeneral:Donantegeneral =new Donantegeneral ();

  constructor(private donantegeneralService: DonanteGeneralService,
              private spinner: NgxSpinnerService,
              private router: Router) { }
   

  ngOnInit(): void {
    this.donantegeneralService.getDonante().subscribe(
     d => this.donantegeneral = d
   );
  }
  
  guardar() {
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
  }
}
