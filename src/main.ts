import { bootstrapApplication } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeFrCa from '@angular/common/locales/fr-CA';
import { appConfig } from './app/app.config';
import { App } from './app/app';

registerLocaleData(localeFrCa);

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
