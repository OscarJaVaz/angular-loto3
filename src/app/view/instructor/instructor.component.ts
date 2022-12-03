import { Component, OnInit } from '@angular/core';
import { Instructor } from 'src/app/models/instructor';
import { InstructorService } from 'src/app/service/instructor.service';
import swal from "sweetalert2";
import {NgxSpinnerService} from "ngx-spinner";
import {Router} from "@angular/router";

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.css']
})
export class InstructorComponent implements OnInit {

  instructor: Instructor =new Instructor ();

  constructor(private instructorService:InstructorService,
              private spinner: NgxSpinnerService,
              private router: Router) { }
   
  //para consultar 
  ngOnInit(): void {
    this.instructorService.getInstructor().subscribe(
     i => this.instructor =i
   );
  }
  
  //para guardar
  guardar() {
    this.spinner.show().then(() => {
      this.instructorService.guardar(this.instructor).subscribe({
        next: () => {
          swal.fire('', 'Instructor almacenado con éxito', 'success').then(() => {
            this.router.navigate(['/home']).then(() => {});
          });
        },
        complete: () => {
          this.spinner.hide().then(() => {});
        }
      });
    });
  }

  //Este metodo es para borrar 
  delete(instructor:Instructor):void{
    console.log("Hello form delete");
    this.instructorService.borrar(instructor.id_usuario).subscribe(
      res=>this.instructorService.getInstructor().subscribe(
        Response=>instructor=Response
      )
    );
  }
 
}
