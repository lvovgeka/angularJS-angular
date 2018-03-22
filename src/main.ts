import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'hammerjs';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { UpgradeModule } from '@angular/upgrade/static';

if (environment.production) {
  enableProdMode();
}
import {setAngularLib} from '@angular/upgrade/static';
// import angular from 'angular';
import * as angular from 'angular';

setAngularLib(angular);
import AppModuleAngularJS from './app/angularJs';


platformBrowserDynamic().bootstrapModule(AppModule)
.then(ref => {
   // Once Angular bootstrap is complete then we bootstrap the AngularJS module
  ;
  // angular.module('myModule', []).info({ version: '1.0.0' });
   
  
  const upgrade = ref.injector.get(UpgradeModule) as UpgradeModule;
  //  console.log('AppModule.name', AppModuleAngularJS.name);


  //  console.log(" angular.module('app', [])",  angular);
   upgrade.bootstrap(document.body, [AppModuleAngularJS.name]);
})
  .catch(err => console.log(err));
