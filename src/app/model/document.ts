import {Template} from './template';

export class Document{
    public id: number;
    public template: Template;
    public status;
    public mergeFields: [object];
    public dateCreated;
    public dateEdited;
}
