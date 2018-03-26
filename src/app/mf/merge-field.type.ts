import { StringComponent } from '../string/string.component';
import { DateComponent } from '../date/date.component';
import {NumberComponent} from '../number/number.component';
import {SignComponent} from '../sign/sign.component';

export class MergeField {
    name: string;
    type: string;
    maxLength?: string;
    value: any = null;

    public getComponent() {

        switch (this.type) {
            case 'string':
                return StringComponent;
            case 'date':
                return DateComponent;
            case 'number':
                return NumberComponent;
            case 'sign':
                return SignComponent;
        }

        throw new Error('Unknown type: ' + this.type);
    }

    public covertToComponentData() {
        return {
            name: this.name,
            type: this.type,
            maxLength: this.maxLength,
            value: this.value,
        };
    }
}

export class MergeFieldType {
    constructor(public mf: MergeField) {

    }
}