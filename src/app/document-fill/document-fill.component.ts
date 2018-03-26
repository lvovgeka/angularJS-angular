import {Component, Input, OnInit} from '@angular/core';
import {Document} from '../model/document';
import {MergeField} from '../mf/merge-field.type';
import {ComponentCreatorService} from '../service/component-creator.service';

@Component({
  selector: 'app-document-fill',
  templateUrl: './document-fill.component.html',
  styleUrls: ['./document-fill.component.css']
})
export class DocumentFillComponent implements OnInit {

  @Input() document: Document;

  mergeFieldPack: object = null;

  constructor(private componentCreator: ComponentCreatorService) { }

  ngOnInit() {
      if (this.document === null) {
          return;
      }

      const mergeFields = this.document.mergeFields;

      const mergeFieldPack = {};

       mergeFields.forEach(
          item => {

              const mf = Object.assign(new MergeField(), item);

              mergeFieldPack[mf.name] = mf;
          }
      );

      console.log('mergeFieldPack', mergeFieldPack);

      this.mergeFieldPack = mergeFieldPack;

  }



}
