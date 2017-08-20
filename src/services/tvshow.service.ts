import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Tvshow } from '../models/tvshow';
import { Video } from '../models/video';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TvshowService {
	constructor(private http: Http) {}

	getTvshows(): Promise<Tvshow[]> {
		const url = "https://api.themoviedb.org/3/tv/top_rated";
	    return this.http.get(url, {
	        params: { api_key: "97c9873a035726c716e8254e0a0e8ed1" }
	      })
		    .toPromise()
		    .then(response => response.json()["results"] as Tvshow[])
	  }

  	searchTvshows(val): Promise<Tvshow[]> {
		const url = "https://api.themoviedb.org/3/search/tv";
	    return this.http.get(url, {
	        params: { api_key: "97c9873a035726c716e8254e0a0e8ed1", language: "en-US", page: 1, include_adult: false, query: val }
	      })
		    .toPromise()
		    .then(response => response.json()["results"] as Tvshow[])
	  }

  	getVideos(val): Promise<Video[]> {
		const url = "https://api.themoviedb.org/3/tv/" + val + "/videos";
		// this.http.get(url, {
	 //        params: { api_key: "97c9873a035726c716e8254e0a0e8ed1", language: "en-US" }
	 //      })
		//     .toPromise()
		//     .then(response => alert(JSON.stringify(response.json()["results"][0])));

	    return this.http.get(url, {
	        params: { api_key: "97c9873a035726c716e8254e0a0e8ed1", language: "en-US" }
	      })
		    .toPromise()
		    .then(response => response.json()["results"] as Video[])
	  }
// 	getHeroesSlowly(): Promise<Hero[]> {
// 	return new Promise(resolve => {
// 		// Simulate server latency with 2 second delay
// 		setTimeout(() => resolve(this.getHeroes()), 2000);
// 	});
// }
}