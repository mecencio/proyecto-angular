import { AuthService } from './services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit, OnDestroy {
  public loginForm : FormGroup;
  public error : string = '';
  public hide : boolean = true;
  private loginFormSubscription : Subscription;

  constructor (
    private form : FormBuilder,
    private authService : AuthService,
    private router: Router
  ) {}

  ngOnDestroy(): void {
    if (this.loginFormSubscription != null) {
      this.loginFormSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.loginForm = this.form.group({
      user: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }

  onSubmit(): void {
    const result = this.authService.login(new User({...this.loginForm.value}));

    if(!result) {
      this.error = 'El usuario o contraseña ingresado son incorrectos';
    }

  }
}
