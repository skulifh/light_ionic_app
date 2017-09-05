import { Component } from '@angular/core';

import { TvshowsPage } from '../tvshows/tvshows';
import { MoviesPage } from '../movies/movies';
import { MessagesPage } from '../messages/messages';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MoviesPage;
  tab2Root = TvshowsPage;
  tab3Root = MessagesPage;

  constructor() {

  }
}
