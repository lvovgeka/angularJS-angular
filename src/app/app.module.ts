import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SharedModuleModule} from "../../sharedModule/shared-module.module";
import { TestComponent } from './test/test.component';
import { StringComponent } from './string/string.component';
import { DateComponent } from './date/date.component';
import { PageFillComponent } from './document-fill/page-fill/page-fill.component';
import { DocumentFillComponent } from './document-fill/document-fill.component';
import {ComponentCreatorService} from './service/component-creator.service';
import { NumberComponent } from './number/number.component';
import { SignComponent } from './sign/sign.component';
import {MergeFieldParserService} from './service/merge-field-parser.service';

@NgModule({
    declarations: [
        AppComponent,
        TestComponent,
        StringComponent,
        DateComponent,
        PageFillComponent,
        DocumentFillComponent,
        NumberComponent,
        SignComponent,
    ],
    imports: [
        BrowserModule,
        SharedModuleModule,
    ],
    entryComponents: [
        TestComponent,
        StringComponent,
        DateComponent,
        NumberComponent,
        SignComponent,
    ],
    providers: [
        ComponentCreatorService,
        MergeFieldParserService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
