import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Hero } from '../../models/hero';
import { HEROES } from '../../models/mock-heroes';

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
	heroes: Hero[] = HEROES
  constructor(public navCtrl: NavController) {

  }

}
