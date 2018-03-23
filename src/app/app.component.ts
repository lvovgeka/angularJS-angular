import {ApplicationRef, Component, ComponentFactoryResolver, ElementRef, Injector, ViewChild} from '@angular/core';
import {TestComponent} from "./test/test.component";
import {StringComponent} from "./string/string.component";
import {DateComponent} from "./date/date.component";
import { HtmlType } from './mf/html.type';
import { MergeFieldType, MergeField } from './mf/merge-field.type';

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

    pattern: '{{name: company_name | type: string}}';
    html = `
        <merge-fields>{{name: company_name | type: string}}</merge-fields> 
        <p>some text in p</p> 
        <h1>Test document</h1>
        <h1>Test document</h1>
        <h1>Test document</h1>
        <p>some text in p</p> 
        <merge-fields>{{name: date_sign | type: date}}</merge-fields>
        <p>some text in p 2</p> 
    `;

    data = [
        {type: 'string', data: '<h1>Test document</h1>'},
        {type: 'mf-string', mfType: 'string', data: '<merge-fields></merge-fields> '},
        {type: 'string',  data: '<p>some text in p</p>'},
        {type: 'mf-date', mfType: 'date',  data: '<merge-fields></merge-fields> '},
    ];

    addDynamicComponent() {

        let html = this.html.trim();
        let htmls = []; 
        let tmlString;
        let result;
        let i = 0; 
        do {
            result = html.match(/\<merge-fields\>.+\<\/merge-fields\>/i);
            
            if (result === null) {           
                html !== '' && htmls.push(
                   new HtmlType(html.trim())
                );
                break;
            }
            

            tmlString = html.substr(0, result.index);
            htmls.push(new HtmlType(tmlString.trim()));
            
            let resReg = result[0].match(/\{\{\b(.+)\}\}/i);

            let mfDirty = resReg[1].split('|');
            mfDirty = mfDirty.map(
                (item) => {
                    return item.trim()
                }
            );

            let mf = {};
            mfDirty.forEach(
                (item) => {
                    let tmp = item.split(':');
                    mf[tmp[0].trim()] = tmp[1].trim(); 
                }
            ) 
    

            htmls.push(new MergeFieldType(Object.assign(new MergeField, mf)));

            html = html.substr(tmlString.length + result[0].length, html.length); 


        } while (result);
        

        htmls.forEach(
            (el) => {

                console.log('el', el)
                if (el instanceof HtmlType) {
                    this.d1.nativeElement.insertAdjacentHTML('beforeend', el.html);
                }

                if (el instanceof MergeFieldType) {
                    this.attechComponent(el.mf.getComponent())
                }
  
            }
        ); 
    }

    private attechComponent(componentName) {

        console.log('componentName', componentName)

        const factoryComponent = this.resolver.resolveComponentFactory(componentName);
        const newNode = document.createElement('div');

        document
            .getElementById('data')
            .appendChild(newNode);

        const ref1 = factoryComponent.create(this.injector, [], newNode);

        ref1.instance['value'] = 'someValue';

        console.log('ref1', ref1)
        this.app.attachView(ref1.hostView);
    }
}
