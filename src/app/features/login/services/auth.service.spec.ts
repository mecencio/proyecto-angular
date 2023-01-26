import { User } from './../../../core/models/user.model';
import { AuthService } from 'src/app/features/login/services/auth.service';
import { TestBed } from '@angular/core/testing';

fdescribe('ServicesService', () => {
    let service: AuthService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(AuthService);
    });

    it('Should be created', () => {
        expect(service).toBeTruthy();
    });

    it('Should deny login', () => {
        localStorage.clear()
        const response = service.login(new User({user:'testDenyLogin', mail:'test@mail.com', password:'', role:'Admin'}));
        expect(response).toBeFalse();
    })

    it('Should allow login', () => {
        localStorage.clear()
        service.register(new User({user:'testAllowLogin', mail:'test@mail.com', password:'', role:'Admin'}));
        service.logout();

        const response = service.login(new User({user:'testAllowLogin', mail:'test@mail.com', password:'', role:'Admin'}));
        expect(response).toBeTrue();
    })

    it('Should logout successfully', () => {
        service.logout();
        expect(localStorage['user']?true:false).toBeFalse();
    })

    it('Should get the name correctly', () => {
        localStorage.clear()
        service.register(new User({user:'testGetName', mail:'test@mail.com', password:'', role:'Admin'}));
        const name = service.getUsername();
        expect(name).toEqual('testGetName')
    })
});
