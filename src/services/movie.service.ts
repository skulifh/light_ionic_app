import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


import { Movie } from '../models/movie';

@Injectable()
export class MovieService {
	constructor(private http: Http) {}

	getMovies(): Promise<Movie[]> {
		const url = "https://api.themoviedb.org/3/movie/top_rated";
	    return this.http.get(url, {
	        params: { api_key: "97c9873a035726c716e8254e0a0e8ed1" }
	      })
		    .toPromise()
		    .then(response => response.json()["results"] as Movie[])
	  }

  	searchMovies(val): Promise<Movie[]> {
		const url = "https://api.themoviedb.org/3/search/movie";
	    return this.http.get(url, {
	        params: { api_key: "97c9873a035726c716e8254e0a0e8ed1", language: "en-US", page: 1, include_adult: false, query: val }
	      })
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