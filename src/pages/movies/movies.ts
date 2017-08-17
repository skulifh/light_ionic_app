import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OnInit } from '@angular/core';
import { Hero } from '../../models/hero';
import { Movie } from '../../models/movie';
import { HEROES } from '../../models/mock-heroes';
import { HeroService } from '../../services/hero.service';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'page-movies',
  templateUrl: 'movies.html',
  providers: [HeroService, MovieService]
})
export class MoviesPage implements OnInit {
	ngOnInit(): void {
  		this.getHeroes();
  		this.getMovies();
  	}

	title = 'Tour of Heroes';
  //hero = 'Windstorm';
  hero: Hero = {
	  id: 1,
	  name: 'Windstorm'
	};
	heroes: Hero[];
	movies: Movie[];

	getHeroes(): void {
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);

		//Simulate the same thing above with slow connection
		// this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
	}
	getMovies(): void {
		this.movieService.getMovies().then(movies => this.movies = movies);

		//Simulate the same thing above with slow connection
		// this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
	}
  constructor(public navCtrl: NavController, private heroService: HeroService, private movieService: MovieService) {
  	//this.heroes = this.heroService.getHeroes();
  }

}
