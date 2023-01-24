import { AuthService } from './../login/services/auth.service';
import { User } from 'src/app/core/models/user.model';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {
  public registerForm : FormGroup;
  public error: string = '';
  public hide : boolean = true;
  private registerFormSubscription : Subscription;

  constructor(
    private form : FormBuilder,
    private authService : AuthService,
  ) { }

  ngOnDestroy(): void {
    if (this.registerFormSubscription != null) {
      this.registerFormSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.registerForm = this.form.group({
      email: ['', [Validators.required, Validators.email]],
      user: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit() : void {
    const result = this.authService.register(new User({...this.registerForm.value, role:'Admin'}));

    if(!result) {
      this.error = 'El usuario ingresado ya se encuentra registrado';
    }
  }
}
