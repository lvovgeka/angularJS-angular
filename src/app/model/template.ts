import {TemplateGroup} from './template-group';
import {TemplatePage} from './template-page';


export class Template {
    public id: number;
    public status: number;
    public version: number;
    public templateGroupId: number;


    public template;

    public mergeFields;

    public templateGroup: TemplateGroup;

    public templatePages: TemplatePage[];

    getPostData() {
        return {
            status       : 0,
            version      : null,
            mergeFields  : null,
            templateGroup: this.templateGroupId,
        };
    }
}
