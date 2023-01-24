import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RoutingModule } from 'src/app/app-routing.module'

import { AuthService } from './auth.service';

fdescribe('AuthService', () => {
    let service: AuthService;
    let httpController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                RoutingModule
            ]
        });
        service = TestBed.inject(AuthService);
        httpController = TestBed.inject(HttpTestingController);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('Test servicio logout exitoso', () => {
        localStorage.setItem('user', '{"user":"example","password":"example"}')
        const response = service.logout();
        expect(response).toEqual(true);
    })

    it('Test servicio logout fallido', () => {
        const response = service.logout();
        expect(response).toEqual(false);
    })
});