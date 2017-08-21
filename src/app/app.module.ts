import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule }    from '@angular/http';

import { TvshowsPage } from '../pages/tvshows/tvshows';
import { MoviesPage } from '../pages/movies/movies';
import { TabsPage } from '../pages/tabs/tabs';
import { MovieDetailsPage } from '../pages/movie-details/movie-details';
import { TvshowDetailsPage } from '../pages/tvshow-details/tvshow-details';
import { TrailerPage } from '../pages/trailer/trailer';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    TvshowsPage,
    MoviesPage,
    MovieDetailsPage,
    TvshowDetailsPage,
    TrailerPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TvshowsPage,
    MoviesPage,
    MovieDetailsPage,
    TvshowDetailsPage,
    TrailerPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
