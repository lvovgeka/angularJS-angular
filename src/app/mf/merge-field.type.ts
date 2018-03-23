import { StringComponent } from "../string/string.component";
import { DateComponent } from "../date/date.component";

export class MergeField {
    name: string;
    type: string;
    maxLenght?: string;

    component = StringComponent;

    public getComponent() {

        console.log('getComponent', this.type)
        switch(this.type) {
            case 'string':
            console.log('getComponent', this.type)
                return StringComponent;
            case 'date':
            console.log('getComponent', this.type)
                return DateComponent;
        }

        throw new Error('Unknown type: ' + this.type);
    }
}

export class MergeFieldType {
    constructor(public mf: MergeField) {

    }
}