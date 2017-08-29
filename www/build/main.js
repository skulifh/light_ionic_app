webpackJsonp([0],{

/***/ 107:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 107;

/***/ }),

/***/ 148:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 148;

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tvshows_tvshows__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__movies_movies__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__movies_movies__["a" /* MoviesPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__tvshows_tvshows__["a" /* TvshowsPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\sfh-dk\Documents\light_ionic_app\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Movies" tabIcon="film"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="TV shows" tabIcon="easel"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\sfh-dk\Documents\light_ionic_app\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TvshowsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_tvshow_service__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tvshow_details_tvshow_details__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TvshowsPage = (function () {
    // Injecting the NavController and the MovieService into this Tvshows component
    function TvshowsPage(navCtrl, tvshowService) {
        this.navCtrl = navCtrl;
        this.tvshowService = tvshowService;
    }
    TvshowsPage.prototype.ngOnInit = function () {
        this.getTvshows();
    };
    // Function that fetches the top 10 rated tvshows from TheMovieDB through Tvshow service
    TvshowsPage.prototype.getTvshows = function () {
        var _this = this;
        this.tvshowService.getTvshows().then(function (tvshows) { return _this.tvshows = _this.top10_tvshows = tvshows; });
    };
    // Function used to call the Tvshow service that searches TheMovieDB for matching tv shows
    TvshowsPage.prototype.searchTvshows = function (ev) {
        var _this = this;
        var val = ev.target.value;
        // if the value is an empty string or smaller than 4 characters then don't filter the items
        if (val && val.trim() != '' && val.length > 3) {
            this.tvshowService.searchTvshows(val).then(function (tvshows) { return _this.tvshows = tvshows; });
        }
        else {
            this.tvshows = this.top10_tvshows;
        }
    };
    // Function that runs when an individual tvshow is clicked on the Tvshows page
    TvshowsPage.prototype.tvshowTapped = function (event, tvshow) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tvshow_details_tvshow_details__["a" /* TvshowDetailsPage */], {
            tvshow: tvshow
        });
    };
    return TvshowsPage;
}());
TvshowsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tvshows',template:/*ion-inline-start:"C:\Users\sfh-dk\Documents\light_ionic_app\src\pages\tvshows\tvshows.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Tvshows</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-searchbar (ionInput)="searchTvshows($event)"></ion-searchbar>\n\n  <ion-grid>\n\n    <ion-row>\n\n      \n\n\n\n      <ion-col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 *ngFor="let tvshow of tvshows | slice:0:10">\n\n        <ion-item>\n\n          <ion-thumbnail item-start>\n\n            <img src="https://image.tmdb.org/t/p/w300_and_h300_bestv2/{{tvshow.poster_path}}">\n\n          </ion-thumbnail>\n\n          <h2>{{tvshow.name}}</h2>\n\n          <p>{{tvshow.first_air_date.split("-")[0]}} • {{tvshow.vote_average}} <ion-icon name="star"></ion-icon></p>\n\n          <button ion-button clear item-end (click)="tvshowTapped($event, tvshow)">View</button>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\sfh-dk\Documents\light_ionic_app\src\pages\tvshows\tvshows.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_tvshow_service__["a" /* TvshowService */]]
    })
    // This component is used to display top 10 tvshows in a list, and make it possible to click individual tv show to see further details of that tv show
    ,
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_tvshow_service__["a" /* TvshowService */]])
], TvshowsPage);

//# sourceMappingURL=tvshows.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TvshowService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_globals__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TvshowService = (function () {
    function TvshowService(http) {
        this.http = http;
    }
    // Fetches the top 10 tv shows from TheMovieAPI
    TvshowService.prototype.getTvshows = function () {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_globals__["b" /* api_path */] + "/tv/top_rated";
        return this.http.get(url, {
            params: { api_key: __WEBPACK_IMPORTED_MODULE_2__app_globals__["a" /* api_key */] }
        })
            .toPromise()
            .then(function (response) {
            return response.json()["results"];
        }, 
        //Error fallback function
        function (error) {
            return null;
        });
    };
    // Searches TheMovieAPI for a specific movie using a string
    TvshowService.prototype.searchTvshows = function (val) {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_globals__["b" /* api_path */] + "/search/tv";
        return this.http.get(url, {
            params: { api_key: __WEBPACK_IMPORTED_MODULE_2__app_globals__["a" /* api_key */], language: "en-US", page: 1, include_adult: false, query: val }
        })
            .toPromise()
            .then(function (response) {
            return response.json()["results"];
        }, 
        //Error fallback function
        function (error) {
            return null;
        });
    };
    // Fetches the list of videos (trailers) for a tvshow.
    TvshowService.prototype.getVideos = function (val) {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_globals__["b" /* api_path */] + "/tv/" + val + "/videos";
        return this.http.get(url, {
            params: { api_key: __WEBPACK_IMPORTED_MODULE_2__app_globals__["a" /* api_key */], language: "en-US" }
        })
            .toPromise()
            .then(function (response) {
            return response.json()["results"];
        }, 
        //Error fallback function
        function (error) {
            return null;
        });
    };
    return TvshowService;
}());
TvshowService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], TvshowService);

//# sourceMappingURL=tvshow.service.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return api_path; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return api_key; });
//All the global constant variables are stored here and accessed throughout different parts of the app
//All the global constant variables are stored here and accessed throughout different parts of the app
var api_path = "https://api.themoviedb.org/3";
var api_key = "97c9873a035726c716e8254e0a0e8ed1";
//# sourceMappingURL=globals.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TvshowDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_tvshow_service__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_helper_service__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TvshowDetailsPage = (function () {
    function TvshowDetailsPage(navCtrl, navParams, helperService, tvshowService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.helperService = helperService;
        this.tvshowService = tvshowService;
        // If we navigated to this page, we will have a tvshow available as a nav param
        this.selectedTvshow = navParams.get('tvshow');
    }
    TvshowDetailsPage.prototype.ngOnInit = function () {
        this.getTvshowVideos();
    };
    // This function fetches the trailer for the tv show
    TvshowDetailsPage.prototype.getTvshowVideos = function () {
        var _this = this;
        // This command fetches the URL of the trailer for the tv show, and id does so by using a function in the helperService
        this.tvshowService.getVideos(this.selectedTvshow.id).then(function (videos) { return _this.url = _this.helperService.buildYoutubeUrl(videos); });
    };
    return TvshowDetailsPage;
}());
TvshowDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tvshow-details',template:/*ion-inline-start:"C:\Users\sfh-dk\Documents\light_ionic_app\src\pages\tvshow-details\tvshow-details.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button menuToggle *ngIf="!selectedTvshow">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Tvshow Details</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-card>\n\n    <ion-card-content>\n\n\n\n      <!-- Here we use the Trailer component to display either the poster for the tv show or the tv show\'s trailer if available -->\n\n      <page-trailer [youtube_url]="url" [poster_path] = "selectedTvshow.poster_path"></page-trailer>\n\n      \n\n      <ion-card-title>\n\n        {{selectedTvshow.title}}\n\n      </ion-card-title>\n\n      <p>\n\n        {{selectedTvshow.overview}}\n\n      </p>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\sfh-dk\Documents\light_ionic_app\src\pages\tvshow-details\tvshow-details.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_tvshow_service__["a" /* TvshowService */], __WEBPACK_IMPORTED_MODULE_3__services_helper_service__["a" /* HelperService */]]
    })
    // This component displays the further details of the selected tv show including the overview text and poster/trailer
    ,
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_helper_service__["a" /* HelperService */], __WEBPACK_IMPORTED_MODULE_2__services_tvshow_service__["a" /* TvshowService */]])
], TvshowDetailsPage);

//# sourceMappingURL=tvshow-details.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelperService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HelperService = (function () {
    function HelperService(sanitizer) {
        this.sanitizer = sanitizer;
    }
    // A function that gets an array of videos, fethes the first YouTube video it finds and returns the url of that video. If no YouTube
    // video is found, or the video array is empty it returns null. This function is used by both the movie-details and tvshow-details module.
    HelperService.prototype.buildYoutubeUrl = function (videos) {
        if (videos) {
            for (var _i = 0, videos_1 = videos; _i < videos_1.length; _i++) {
                var video = videos_1[_i];
                if (video.site == "YouTube") {
                    return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + video.key + "?rel=0&amp;controls=0&amp;showinfo=0");
                }
            }
        }
        return null;
    };
    return HelperService;
}());
HelperService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
], HelperService);

//# sourceMappingURL=helper.service.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoviesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_movie_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__movie_details_movie_details__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MoviesPage = (function () {
    // Injecting the NavController and the MovieService into this Movies component
    function MoviesPage(navCtrl, movieService) {
        this.navCtrl = navCtrl;
        this.movieService = movieService;
    }
    MoviesPage.prototype.ngOnInit = function () {
        this.getMovies();
    };
    // Function that fetches the top 10 rated movies from TheMovieDB through Movie service
    MoviesPage.prototype.getMovies = function () {
        var _this = this;
        this.movieService.getMovies().then(function (movies) { return _this.movies = _this.top10_movies = movies; });
    };
    // Function used to call the Movie service that searches TheMovieDB for matching movies
    MoviesPage.prototype.searchMovies = function (ev) {
        var _this = this;
        var val = ev.target.value;
        // if the value is an empty string or smaller than 4 characters then don't filter the items
        if (val && val.trim() != '' && val.length > 3) {
            this.movieService.searchMovies(val).then(function (movies) { return _this.movies = movies; });
        }
        else {
            this.movies = this.top10_movies;
        }
    };
    // Function that runs when an individual movie is clicked on the Movies page
    MoviesPage.prototype.movieTapped = function (event, movie) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__movie_details_movie_details__["a" /* MovieDetailsPage */], {
            movie: movie
        });
    };
    return MoviesPage;
}());
MoviesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-movies',template:/*ion-inline-start:"C:\Users\sfh-dk\Documents\light_ionic_app\src\pages\movies\movies.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Movies</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-searchbar (ionInput)="searchMovies($event)"></ion-searchbar>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 *ngFor="let movie of movies | slice:0:10">\n\n        <ion-item>\n\n          <ion-thumbnail item-start>\n\n            <img src="https://image.tmdb.org/t/p/w300_and_h300_bestv2/{{movie.poster_path}}">\n\n          </ion-thumbnail>\n\n          <h2>{{movie.title}}</h2>\n\n          <p>{{movie.release_date.split("-")[0]}} • {{movie.vote_average}} <ion-icon name="star"></ion-icon></p>\n\n          <button ion-button clear item-end (click)="movieTapped($event, movie)">View</button>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\sfh-dk\Documents\light_ionic_app\src\pages\movies\movies.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_movie_service__["a" /* MovieService */]]
    })
    // This component is used to display top 10 movies in a list, and make it possible to click individual movie to see further details of that movie
    ,
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_movie_service__["a" /* MovieService */]])
], MoviesPage);

//# sourceMappingURL=movies.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_globals__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MovieService = (function () {
    function MovieService(http) {
        this.http = http;
    }
    // Fetches the top 10 movies from TheMovieAPI
    MovieService.prototype.getMovies = function () {
        var url = __WEBPACK_IMPORTED_MODULE_3__app_globals__["b" /* api_path */] + "/movie/top_rated";
        return this.http.get(url, {
            params: { api_key: __WEBPACK_IMPORTED_MODULE_3__app_globals__["a" /* api_key */], language: "en-US", page: 1 }
        })
            .toPromise()
            .then(function (response) {
            return response.json()["results"];
        }, 
        //Error fallback function
        function (error) {
            return null;
        });
    };
    // Searches TheMovieAPI for a specific tv show using a string
    MovieService.prototype.searchMovies = function (val) {
        var url = __WEBPACK_IMPORTED_MODULE_3__app_globals__["b" /* api_path */] + "/search/movie";
        return this.http.get(url, {
            params: { api_key: __WEBPACK_IMPORTED_MODULE_3__app_globals__["a" /* api_key */], language: "en-US", page: 1, include_adult: false, query: val }
        })
            .toPromise()
            .then(function (response) {
            return response.json()["results"];
        }, 
        //Error fallback function
        function (error) {
            return null;
        });
    };
    // Fetches the list of videos (trailers) for a movie.
    MovieService.prototype.getVideos = function (val) {
        var url = __WEBPACK_IMPORTED_MODULE_3__app_globals__["b" /* api_path */] + "/movie/" + val + "/videos";
        return this.http.get(url, {
            params: { api_key: __WEBPACK_IMPORTED_MODULE_3__app_globals__["a" /* api_key */], language: "en-US" }
        })
            .toPromise()
            .then(function (response) {
            return response.json()["results"];
        }, 
        //Error fallback function
        function (error) {
            return null;
        });
    };
    return MovieService;
}());
MovieService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], MovieService);

//# sourceMappingURL=movie.service.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_movie_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_helper_service__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MovieDetailsPage = (function () {
    function MovieDetailsPage(navCtrl, navParams, helperService, movieService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.helperService = helperService;
        this.movieService = movieService;
        // If we navigated to this page, we will have a movie available as a nav param
        this.selectedMovie = navParams.get('movie');
    }
    // This function runs initially
    MovieDetailsPage.prototype.ngOnInit = function () {
        this.getMovieVideos();
    };
    // This function fetches the trailer for the movie
    MovieDetailsPage.prototype.getMovieVideos = function () {
        var _this = this;
        // This command fetches the URL of the trailer for the movie, and id does so by using a function in the helperService
        this.movieService.getVideos(this.selectedMovie.id).then(function (videos) { return _this.url = _this.helperService.buildYoutubeUrl(videos); });
    };
    return MovieDetailsPage;
}());
MovieDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-movie-details',template:/*ion-inline-start:"C:\Users\sfh-dk\Documents\light_ionic_app\src\pages\movie-details\movie-details.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button menuToggle *ngIf="!selectedMovie">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Movie Details</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-card>\n\n    <ion-card-content>\n\n    \n\n      <!-- Here we use the Trailer component to display either the poster for the movie or the movie\'s trailer if available -->\n\n      <page-trailer [youtube_url]="url" [poster_path] = "selectedMovie.poster_path"></page-trailer>\n\n      \n\n      <ion-card-title>\n\n        {{selectedMovie.title}}\n\n      </ion-card-title>\n\n      <p>\n\n        {{selectedMovie.overview}}\n\n      </p>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\sfh-dk\Documents\light_ionic_app\src\pages\movie-details\movie-details.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_movie_service__["a" /* MovieService */], __WEBPACK_IMPORTED_MODULE_3__services_helper_service__["a" /* HelperService */]]
    })
    // This component displays the further details of the selected movie including the overview text and poster/trailer
    ,
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_helper_service__["a" /* HelperService */], __WEBPACK_IMPORTED_MODULE_2__services_movie_service__["a" /* MovieService */]])
], MovieDetailsPage);

//# sourceMappingURL=movie-details.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tvshows_tvshows__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_movies_movies__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_movie_details_movie_details__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tvshow_details_tvshow_details__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_trailer_trailer__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_tvshows_tvshows__["a" /* TvshowsPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_movies_movies__["a" /* MoviesPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_movie_details_movie_details__["a" /* MovieDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_tvshow_details_tvshow_details__["a" /* TvshowDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_trailer_trailer__["a" /* TrailerPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_tvshows_tvshows__["a" /* TvshowsPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_movies_movies__["a" /* MoviesPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_movie_details_movie_details__["a" /* MovieDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_tvshow_details_tvshow_details__["a" /* TvshowDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_trailer_trailer__["a" /* TrailerPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // The platform is ready and our plugins are available.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\sfh-dk\Documents\light_ionic_app\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\sfh-dk\Documents\light_ionic_app\src\app\app.html"*/
    })
    //Main application class, rootpage is the tabs component which contains the .
    ,
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrailerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// This Trailer component is used for the trailer of both the Movie component and the Tvshow component since it works the same way for both
var TrailerPage = (function () {
    function TrailerPage() {
    }
    return TrailerPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], TrailerPage.prototype, "youtube_url", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], TrailerPage.prototype, "poster_path", void 0);
TrailerPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-trailer',template:/*ion-inline-start:"C:\Users\sfh-dk\Documents\light_ionic_app\src\pages\trailer\trailer.html"*/'<!-- Here we check if a trailer is available for the movie/tvshow, if not we display the poster of the movie/tvshow instead -->\n\n<iframe *ngIf="youtube_url" width="560" height="315" [attr.src]="youtube_url" frameborder="0" allowfullscreen></iframe>\n\n<img *ngIf="!youtube_url" src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/{{poster_path}}" alt="...">'/*ion-inline-end:"C:\Users\sfh-dk\Documents\light_ionic_app\src\pages\trailer\trailer.html"*/
    }),
    __metadata("design:paramtypes", [])
], TrailerPage);

//# sourceMappingURL=trailer.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map