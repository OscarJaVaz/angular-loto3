import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';


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
