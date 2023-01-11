import { Student } from './../../../core/models/user.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(value: Student, ...args: unknown[]): String {
    return value.lastName + ", " + value.firstName;
  }

}
