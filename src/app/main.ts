import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import { Hero } from '../models/hero';

platformBrowserDynamic().bootstrapModule(AppModule);
