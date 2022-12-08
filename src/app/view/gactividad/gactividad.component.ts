import { Component, OnInit } from '@angular/core';
import {NgxSpinnerService} from "ngx-spinner";
import { Actividad } from 'src/app/models/actividad';
import {Router,ActivatedRoute} from "@angular/router";
import { ActividadService } from 'src/app/service/actividad.service';
import {forkJoin, observable, pipe} from "rxjs";
import swal from "sweetalert2";


@Component({
  selector: 'app-gactividad',
  templateUrl: './gactividad.component.html',
  styleUrls: ['./gactividad.component.css']
})
export class GactividadComponent implements OnInit {
  public actividades: Actividad []=[];
  actividad: Actividad = new Actividad;
  swalButton

  constructor(private spinner: NgxSpinnerService,
    private actividadService: ActividadService,
    private route: ActivatedRoute,
    private router: Router,
    
  
    ) { }

  ngOnInit(): void {
    this.getData();
  }

  private getData() {
    this.spinner.show().then(() => {
      let actividadesGet = this.actividadService.getActividades();
      forkJoin([actividadesGet]).subscribe({
       next: response => {
          this.actividades = response[0] as Actividad[];
          
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

/*DELETE ALEJANDRA*/ 
/*delete(id_actividad:number){
  this.actividadService.delete(id_actividad).subscribe(  res =>{
   const swalButton = swal.mixin({
      customClass:{
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'

      },
      buttonsStyling :false
    })
  })
  this.swalButton.fire({
    title:'Confirmación',
    Text:'¿Estas seguro que deseas eliminar esta actividad?',
    icon:'warning',
    showCancelButtonText: 'Si, elimar',
    cancelButtonText: 'No, seguir guardando',
    reverseButtons: true
  }).then((result)=>{
    if(result.isConfirmed){
     this.swalButton.fire('Actividad Eliminada', 'La actividad no se pudo eliminar', 'success');
      location.reload();
    }else if (result.dismiss = swal.DismissReason.cancel){
      this.swalButton.fire('Cancelado', 'No se realizo ningun cambio','error');
    }
  });
  
}*/




/*delete(id_actividad){
  if(confirm('Seguro que desea eliminar')){
    this.actividadService.delete(id_actividad).subscribe((getData)=>{
      this.getData();
    }, (error)=>{
      console.log(error);
    }
    )
  }

}*/

/*ELIMINAR BY OSCAR*/
delete(id_actividad) {
  this.spinner.show().then(() => {
    this.actividadService.delete(id_actividad).subscribe({
      next: () => {
        swal.fire('', 'Actividad eliminada con éxito', 'success').then(() => {
          this.router.navigate(['/gactividad']).then(() => {});
        });
      },
      complete: () => {
        this.spinner.hide().then(() => {});
      }
    });
  });
}


/*public delete(id_actividad:number){
  this.actividadService.delete(id_actividad).subscribe (()=>{
    this.actividadService.getActividades()
  }, error => {
    console.log(error)
  })
  
}*/
  
/*delete() {
  this.spinner.show().then(() => {
    this.actividadService.delete(this.actividad.id_actividad).subscribe({
      next: () => {
        swal.fire('', 'Eliminada con exito', 'success').then(() => {
          this.router.navigate(['/gactividad']).then(() => {});
        });
      },
      complete: () => {
        this.spinner.hide().then(() => {});
      }
    });
  });
}


 /**delete():void{
    console.log("Hello form delete");
    this.actividadService.delete(this.actividad.id_actividad).subscribe(
      res=>this.actividadService.getActividad().subscribe(
        Response=>this.actividad=Response
      )
  }*/
}




