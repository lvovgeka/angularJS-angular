import { BrowserModule } from '@angular/platform-browser';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';


import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SharedModuleModule } from '../../sharedModule/shared-module.module';
// import { SharedModuleModule } from './shared-module/shared-module.module';
import { UpgradeComponent, UpgradeModule } from '@angular/upgrade/static';
// import { Ng1TestDirective } from './ng1-test.directive';
import AppModuleAngularJS from './angularJs';

@NgModule({
  declarations: [
    AppComponent,
    // Ng1TestDirective,
  ],
  imports: [
    BrowserModule,
    UpgradeModule,
    SharedModuleModule,
    
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private upgrade: UpgradeModule) {
     
    
  }
  ngDoBootstrap() { /* this is a placeholder to stop the bootstrapper from complaining */
    // this.upgrade.bootstrap(document.documentElement, [AppModuleAngularJS.name]);
  }
}
