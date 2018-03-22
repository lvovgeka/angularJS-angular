import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SharedModuleModule} from "../../sharedModule/shared-module.module";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        SharedModuleModule,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
