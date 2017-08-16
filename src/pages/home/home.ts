import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Hero } from '../../models/hero';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	title = 'Tour of Heroes';
  //hero = 'Windstorm';
  hero: Hero = {
	  id: 1,
	  name: 'Windstorm'
	};
  constructor(public navCtrl: NavController) {

  }

}
