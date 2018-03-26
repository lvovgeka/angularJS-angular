import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {TemplatePage} from '../../model/template-page';
import {ComponentCreatorService} from '../../service/component-creator.service';
import {MergeFieldParserService} from '../../service/merge-field-parser.service';
import {HtmlType} from '../../mf/html.type';
import {MergeFieldType} from '../../mf/merge-field.type';

@Component({
  selector: 'app-page-fill',
  templateUrl: './page-fill.component.html',
  styleUrls: ['./page-fill.component.css']
})
export class PageFillComponent implements OnInit {


  @ViewChild('pageData') pageData: ElementRef;
  @Input() page: TemplatePage;
  @Input() mergeFieldPack: object;

  constructor(
      private componentCreator: ComponentCreatorService,
      private mfParser: MergeFieldParserService
  ) { }

  ngOnInit() {

    if (this.page === null) {
      return;
    }

    const body = this.page.body;

    let bodies = this.mfParser.covertToArray(body);

    bodies = bodies.map(item => {
       if (item instanceof MergeFieldType === false) {
           return item;
       }

       if (this.mergeFieldPack.hasOwnProperty(item.mf.name) === true) {
           item.mf = this.mergeFieldPack[item.mf.name];
       }

       return item;

    });

    const container = document.getElementById('pageData');

    bodies.forEach(
        (el) => {

            if (el instanceof HtmlType) {
                this.pageData
                    .nativeElement
                    .insertAdjacentHTML('beforeend', el.html);
            }

            if (el instanceof MergeFieldType) {
                this.componentCreator.attachComponent(
                    el.mf.getComponent(),
                    container,
                    [el.mf.covertToComponentData()]
                );
            }
        }
    );

  }

}
