import { of } from "rxjs";

export class MatDialogMock {
    open() {
        return {
            afterClosed: () => of({
                id: 1,
                firstName: "nombre1",
                lastName: "apellido1",
                address: "Calle falsa 1",
                city : "ciudad",
                province : "Provincia",
                country : "Pais",
                gender: "M",
                email: "mail@test.com",
                user: "user1",
                password: "123123",
                phone: "1154542121",
                isActive: true,
                age : 27,
                courses : [],
            })
        };
    }
}