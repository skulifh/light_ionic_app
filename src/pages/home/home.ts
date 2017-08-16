import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OnInit } from '@angular/core';
import { Hero } from '../../models/hero';
import { HEROES } from '../../models/mock-heroes';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HeroService]
})
export class HomePage implements OnInit {
	ngOnInit(): void {
  		this.getHeroes();
  	}

	title = 'Tour of Heroes';
  //hero = 'Windstorm';
  hero: Hero = {
	  id: 1,
	  name: 'Windstorm'
	};
	heroes: Hero[];
	getHeroes(): void {
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);

		//Simulate the same thing above with slow connection
		// this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
	}
  constructor(public navCtrl: NavController, private heroService: HeroService) {
  	//this.heroes = this.heroService.getHeroes();
  }

}
