import { AbstractControl } from '@angular/forms';

export class YearValidator {

    public static validate(c: AbstractControl) {

        return (c.value >= (new Date).getFullYear() || c.value == null) ? null : {
            invalid_year: true

        };
    }
}
