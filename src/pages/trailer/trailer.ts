import { Component, Directive } from '@angular/core';
import { Injector } from '@angular/core';
import { OnInit } from '@angular/core';
import { MovieDetailsPage } from "../movie-details/movie-details";

@Component({
  selector: 'page-trailer',
  templateUrl: 'trailer.html'
})
export class TrailerPage implements OnInit {
	ngOnInit(): void {

  	}
  	name = "Child!";
  	parentComponent: any;

  constructor(private inj:Injector) {
  	let parentComponent = this.inj.get(MovieDetailsPage);
  	this.parentComponent = parentComponent;
  }

}
