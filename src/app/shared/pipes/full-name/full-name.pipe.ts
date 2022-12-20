import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../../models/student.model';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(value: Student, ...args: unknown[]): String {
    return value.lastName + ", " + value.firstName;
  }

}
