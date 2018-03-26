import {Template} from './template';

export class TemplateGroup {
    public id: number;
    public name: string;

    selectedVersion: Template = null;
    public templates: Template[];

    getUrlToTemplate() {
        let url = '/smn-admin/groups/' + this.id;
        if (this.selectedVersion) {
            url += '/' + this.selectedVersion.id;
        }
        return url;
    }

    getActiveTemplate() {
        return this.templates.find((template) => {
            return template.status === 0;
        });
    }
}
