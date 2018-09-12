import { FormGroup } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

export function onValueChanged(form: FormGroup, formErrors: object, validationMessages: object, data?: any) {
  if (!form) { return; }
  for (const field in formErrors) {
    if (formErrors.hasOwnProperty(field)) {
      // clear previous error message (if any)
      formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = validationMessages[field];
        for (const key in control.errors) {
          if (control.errors.hasOwnProperty(key)) {
            formErrors[field] += messages[key] + ' ';
          }
        }
      }
    }
  }
}

export function handleError(error: HttpErrorResponse) {
  let errMsg: string;

  if (error.error instanceof ErrorEvent) {
    errMsg = error.error.message;
  } else {
    errMsg = `${error.status} - ${error.statusText || ''} ${error.error}`;
  }

  return throwError(errMsg);
}
