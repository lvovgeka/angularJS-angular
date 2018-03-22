import {ApplicationRef, Component, ComponentFactoryResolver, ElementRef, Injector, ViewChild} from '@angular/core';
import {TestComponent} from "./test/test.component";
import {StringComponent} from "./string/string.component";
import {DateComponent} from "./date/date.component";

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
   template: `
       <h1>APP</h1>
       <hr>

       <button (click)="addDynamicComponent()">add</button>
       <div id="container">
           <h1>My Component</h1>
           
           <div id="data" #one></div>
       </div>

   `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    @ViewChild('one') d1:ElementRef;

    constructor(private resolver: ComponentFactoryResolver,
                private injector: Injector,
                private app: ApplicationRef

    ) {

    }

    html = ' <h1>Test document</h1><merge-fields id="string"></merge-fields> <p>some text in p</p>  <merge-fields id="date"> </merge-fields> ';

    data = [
        {type: 'string', data: '<h1>Test document</h1>'},
        {type: 'mf-string', mfType: 'string', data: '<merge-fields></merge-fields> '},
        {type: 'string',  data: '<p>some text in p</p>'},
        {type: 'mf-date', mfType: 'date',  data: '<merge-fields></merge-fields> '},
    ];

    addDynamicComponent() {

        this.data.forEach(
            (el) => {
                switch (el.type) {

                    case 'string':
                        // dc.appendChild()
                        this.d1.nativeElement.insertAdjacentHTML('beforeend', el.data);
                        break;

                    case 'mf-string':
                        const factoryStringComponent = this.resolver.resolveComponentFactory(StringComponent);
                        const newNode1 = document.createElement('div');

                        document.getElementById('data').appendChild(newNode1);

                        const ref1 = factoryStringComponent.create(this.injector, [], newNode1);
                        this.app.attachView(ref1.hostView);
                        break;
                    case 'mf-date':
                        const factoryDateComponent = this.resolver.resolveComponentFactory(DateComponent);
                        const newNode2 = document.createElement('div');

                        document.getElementById('data').appendChild(newNode2);

                        const ref2 = factoryDateComponent.create(this.injector, [], newNode2);
                        this.app.attachView(ref2.hostView);

                        break;
                }

            }
        );
    }
}
