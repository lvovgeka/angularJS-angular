import {Injectable} from '@angular/core';
import {MergeField, MergeFieldType} from '../mf/merge-field.type';
import {HtmlType} from '../mf/html.type';

@Injectable()
export class MergeFieldParserService {


  constructor() { }

  public splitByTypes(html: string): Array<any> {

      const htmls = [];

      let tmlString;
      let result;

      do {
          result = html.match(/<merge-fields>.+<\/merge-fields>/i);

          if (result === null) {

              if (html !== '') {
                  htmls.push(
                      new HtmlType(html.trim())
                  );
              }

              break;
          }

          tmlString = html.substr(0, result.index);

          htmls.push(new HtmlType(tmlString.trim()));

          const resReg = result[0].match(/{{\b(.+)}}/i);

          let mfDirty = resReg[1].split('|');

          mfDirty = mfDirty.map(item => item.trim());

          const mf = {};
          mfDirty.forEach(
              item => {
                  const tmp = item.split(':');

                  if (tmp.length < 2) {
                      throw new Error(`MergeFieldParserService: merge field not valid, value: ${item}`);
                  }

                  mf[tmp[0].trim()] = tmp[1].trim();
              }
          );

          htmls.push(new MergeFieldType(Object.assign(new MergeField, mf)));

          html = html.substr(tmlString.length + result[0].length, html.length);
      }
      while (true);

      return htmls;
  }
}
