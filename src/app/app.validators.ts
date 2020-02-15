import {FormControl} from '@angular/forms';

export class AppValidators {
  static restrictedEmails(control: FormControl): { [key: string]: boolean } {
    if (['admin@admin.ru', 'test@test.ru'].includes(control.value)) {
      return {
        restrictedEmail: true
      };
    }
    return null;
  }
}
