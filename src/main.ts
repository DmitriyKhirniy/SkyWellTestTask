import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
console.info('App.environment type:', app.environment);
if (app.environment === 'production') {
    enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule);