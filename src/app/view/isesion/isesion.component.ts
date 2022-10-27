import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-isesion',
  templateUrl: './isesion.component.html',
  styleUrls: ['./isesion.component.css']
})
export class IsesionComponent implements OnInit {
  ImagePath: String;
  constructor(private title:Title) { 
    this.ImagePath = '/assets/img/taichi.jpg'
  }

  ngOnInit(): void {
    this.title.setTitle("Iniciar sesion");
  }

}
