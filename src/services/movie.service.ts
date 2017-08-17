import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


import { Movie } from '../models/movie';

@Injectable()
export class MovieService {
	constructor(private http: Http) {}

	getMovies(): Promise<Movie[]> {
		const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=97c9873a035726c716e8254e0a0e8ed1`;
	    return this.http.get(url)
		    .toPromise()
		    .then(response => response.json()["results"] as Movie[])
	  }
// 	getHeroesSlowly(): Promise<Hero[]> {
// 	return new Promise(resolve => {
// 		// Simulate server latency with 2 second delay
// 		setTimeout(() => resolve(this.getHeroes()), 2000);
// 	});
// }
}