import { Component } from '@angular/core';
import { VectorService } from '@daily/test';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'app-home',
    templateUrl: './home.component.html',
})
export class HomeComponent {
    constructor(private vector: VectorService) {
        const name = this.vector.userName;
    }
}
