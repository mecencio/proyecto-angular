import { UsersService } from './../../shared/services/users/users.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit, OnDestroy {
  public loginForm : FormGroup;
  public error : string = '';
  private loginFormSubscription : Subscription;

  constructor (
    private form : FormBuilder,
    private usersService : UsersService,
    private router: Router
  ) {}

  ngOnDestroy(): void {
    this.loginFormSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.loginForm = this.form.group({
      user: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }

  onSubmit(): void {
    console.log(this.loginForm.value.user)
    console.log(this.loginForm.value.password)
    this.loginFormSubscription = this.usersService.getUsers(this.loginForm.value.user).subscribe(data => {
      if ((data.length == 1) && (data[0].password == this.loginForm.value.password)) {
        localStorage.setItem('user', JSON.stringify(this.loginForm.value));
        this.router.navigate(['']);
      } else {
        this.error = "El usuario o contraseña ingresado son incorrectos";
      }
    })
  }
}
