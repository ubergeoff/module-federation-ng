import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class VectorService {
    private _userName: string = null;

    get userName(): string {
        return this._userName;
    }

    constructor() {
        console.log('VectorService');
    }

    login(userName: string, password: string): void {
        this._userName = userName;
    }
}
