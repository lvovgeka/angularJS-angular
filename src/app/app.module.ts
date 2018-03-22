import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SharedModuleModule} from "../../sharedModule/shared-module.module";
import { TestComponent } from './test/test.component';
import { StringComponent } from './string/string.component';
import { DateComponent } from './date/date.component';

@NgModule({
    declarations: [
        AppComponent,
        TestComponent,
        StringComponent,
        DateComponent,
    ],
    imports: [
        BrowserModule,
        SharedModuleModule,
    ],
    entryComponents: [
        TestComponent,
        StringComponent,
        DateComponent,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
