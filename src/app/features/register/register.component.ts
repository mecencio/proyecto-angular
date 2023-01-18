import { User } from 'src/app/core/models/user.model';
import { Router } from '@angular/router';
import { UsersService } from './../../shared/services/users/users.service';
import { Subscription } from 'rxjs';
import { Component, ElementRef, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {
  public registerForm : FormGroup;
  public error: string = '';
  public hide : boolean = true;
  private user : User;
  private registerFormSubscription : Subscription;

  constructor(
    private form : FormBuilder,
    private usersService : UsersService,
    private router : Router,
  ) { }

  ngOnDestroy(): void {
    if (this.registerFormSubscription != null) {
      this.registerFormSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.registerForm = this.form.group({
      email: ['', [Validators.required, Validators.email]],
      user: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit() : void {
    this.registerFormSubscription = this.usersService.getUser(this.registerForm.value.user).subscribe(data => {
      if (data.length >= 1) {
        this.error = "El usuario ya se encuentra registrado"
      } else {
        this.usersService.addUser(new User({...this.registerForm.value, role: 'Estudiante'}));
        localStorage.setItem('user', JSON.stringify(new User({...this.registerForm.value, role: 'Estudiante'})));
        this.router.navigate(['']);
      }
    })
  }
}
