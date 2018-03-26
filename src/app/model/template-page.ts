import 'reflect-metadata';

export class TemplatePage {
    public id: number;
    public num: number;
    public body: string;
    public template: any;
    public templateId: number;

    getFormatBody(str) {
        return this.body.replace(/{{/g, str).replace(/}}/g, str);
    }

    getPostData() {
        return {
            template: this.templateId,
            body    : this.body,
            number  : this.num,
        };
    }

    getPutData() {
        return {
            id      : this.id,
            template: this.templateId,
            body    : this.body,
            number  : this.num,
        };
    }
}
