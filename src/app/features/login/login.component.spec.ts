import { AuthService } from 'src/app/features/login/services/auth.service';
import { LoginComponent } from './login.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { User } from 'src/app/core/models/user.model';

fdescribe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let authService: AuthService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [LoginComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        authService = TestBed.inject(AuthService);
        fixture.detectChanges();
    })

    it('Should be create', () => {
        expect(component).toBeTruthy();
    });

    it('Should deny login', () => {
        localStorage.clear()
        component.loginForm.patchValue({user:'testDenyLogin', mail:'test@mail.com', password:'', role:'Admin'});
        component.onSubmit();
        expect(component.error).toEqual('El usuario o contraseña ingresado son incorrectos')
    })

    it('Should allow login', () => {
        localStorage.clear()
        authService.register(new User({user:'testAllowLogin', mail:'test@mail.com', password:'', role:'Admin'}))
        authService.logout();


        component.loginForm.patchValue({user:'testAllowLogin', mail:'test@mail.com', password:'', role:'Admin'});
        component.onSubmit();
        expect(component.error).toEqual('')
    })
})