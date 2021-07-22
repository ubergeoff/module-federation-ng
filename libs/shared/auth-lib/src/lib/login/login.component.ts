import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { VectorService } from '@daily/test';

@Component({
    selector: 'nx-mf-demo-login',
    templateUrl: './login.component.html',
    // styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    userName: string;
    password: string;

    get loggedInUserName(): string {
        return this.authService.userName;
    }

    constructor(
        private authService: AuthService,
        private vector: VectorService
    ) {}

    ngOnInit(): void {
        const name = this.vector.userName;
    }

    login(): void {
        this.authService.login(this.userName, this.password);
    }
}
