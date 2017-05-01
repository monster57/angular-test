import { AbstractControl } from '@angular/forms';

export class CharacterValidator {

    public static validate(c: AbstractControl) {
        let Number_REGEXP = /^[A-z]*$/i;

        return (Number_REGEXP.test(c.value) || c.value == null) ? null : {
            invalid_character: true

        };
    }
}
