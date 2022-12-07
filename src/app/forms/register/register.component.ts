import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms'

export class Usuario {
  firstName : string;
  lastName : string;
  idNumber : string;
  user : string;
  email : string;
  password : string;

  constructor(firstName: string, lastName: string, idNumber: string, user: string, email: string, password: string) {
      this.firstName = firstName; 
      this.lastName = lastName;
      this.idNumber = idNumber;
      this.user = user;
      this.email = email;
      this.password = password;
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: []
})
export class RegisterComponent implements OnInit {

  public formularioRegistro: FormGroup;
  public errorMail : ValidationErrors | null | undefined;
  public errorPassword1 : ValidationErrors | null | undefined;
  public errorPassword2 : ValidationErrors | null | undefined;
  public usuario : Usuario;

  constructor(
    private fr : FormBuilder
  ) { }

  ngOnInit(): void {

    this.formularioRegistro = this.fr.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      idNumber: ['', [Validators.required]],
      user: ['', [Validators.required]],
      mail: ['', [Validators.required, Validators.email]],
      password1: ['', [Validators.required, Validators.minLength(8)]],
      password2: ['', [Validators.required, Validators.minLength(8)]]
    })

    this.formularioRegistro.get('mail')?.valueChanges.subscribe(() => {
      this.errorMail = this.formularioRegistro.get('mail')?.errors;
    })

    this.formularioRegistro.get('password1')?.valueChanges.subscribe(() => {
        this.errorPassword1 = this.formularioRegistro.get('password1')?.errors
    })

    this.formularioRegistro.get('password2')?.valueChanges.subscribe((value) => {
      if (this.formularioRegistro.get('password2')?.errors)
        this.errorPassword2 = this.formularioRegistro.get('password2')?.errors
      else
        this.formularioRegistro.get('password1')?.value !== value ? this.errorPassword2 = {equals:true} : this.errorPassword2 = {};
    })
  }

  submit() : void {
    if (this.formularioRegistro.valid) {
      let {firstName, idNumber, lastName, mail, password1, user} = this.formularioRegistro.value;
      this.usuario = new Usuario(firstName, lastName, idNumber, user, mail, password1);
    }
  }

}
