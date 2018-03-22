import { Component } from '@angular/core';

@Component({
    selector: 'app-shared',
    template: `
        <ng1-hero hero="someData"></ng1-hero>
        <app-first-component></app-first-component>
    `,
    styleUrls: []
})
export class SharedModuleComponent {

    public someData = {
        name: 'some name'
    };
}
