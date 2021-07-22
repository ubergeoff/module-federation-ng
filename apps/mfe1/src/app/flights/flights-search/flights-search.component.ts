import { Component } from '@angular/core';
import { AuthService } from '@nx-mf-demo/shared/auth-lib';
import { VectorService } from '@daily/test';

@Component({
    selector: 'app-flights-search',
    templateUrl: './flights-search.component.html',
})
export class FlightsSearchComponent {
    constructor(
        private authService: AuthService,
        private vector: VectorService
    ) {
        const other = this.vector.userName;
    }

    get userName(): string {
        return this.authService.userName;
    }

    search() {
        alert('Not implemented for this demo!');
    }
}
