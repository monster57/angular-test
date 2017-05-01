import { AbstractControl } from '@angular/forms';

export class NumberValidator {

    public static validate(c: AbstractControl) {
        let Number_REGEXP = /^[0-9]*$/i;

        return (Number_REGEXP.test(c.value) || c.value == null) ? null : {
            invalid_number: true

        };
    }
}
