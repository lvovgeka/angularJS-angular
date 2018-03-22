import {CommonModule} from '@angular/common';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import AppModuleAngularJS from './angularJs';
import {UpgradeModule} from '@angular/upgrade/static';
import {Ng1TestDirective} from './ng1-test.directive';
import {MatCheckboxModule, MatButtonModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FirstComponentComponent} from './first-component/first-component.component';
import {SharedModuleComponent} from './shared-module.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatCheckboxModule,
        UpgradeModule,
    ],
    exports: [
        FirstComponentComponent,
        SharedModuleComponent,
    ],
    declarations: [
        FirstComponentComponent,
        Ng1TestDirective,
        SharedModuleComponent,
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    providers: [
        {provide: '$scope', useExisting: '$rootScope'}
    ]
})
export class SharedModuleModule {
    constructor(private upgrade: UpgradeModule) {
        this.upgrade.bootstrap(document.documentElement, [AppModuleAngularJS.name]);
    }
}
