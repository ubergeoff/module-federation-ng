import { Injectable } from '@angular/core';
import { NavigationError, Router } from '@angular/router';
import { filter, shareReplay, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class NavigationErrorService {
    private remoteFailed = new BehaviorSubject<boolean>(false);

    // filter router events of type NavigationError
    navigationError$ = this.router.events.pipe(
        filter((e): e is NavigationError => e instanceof NavigationError)
    );
    private _errorHandled: undefined;
    failedRemote$: Observable<boolean>;

    constructor(private router: Router) {
        this.failedRemote$ = this.remoteFailed.pipe(
            tap((t) => {
                if (t) {
                    this.router.navigate(['/remote-failed']);
                }
            }),
            shareReplay({ refCount: true })
        );
    }

    init() {
        this.navigationError$.subscribe((evt) => {
            // handle known error messages that can be retried
            if (evt.error.message.indexOf('RemoteFailed') > -1) {
                // mark the error as handled to avoid global handler
                this._errorHandled = evt.error;
                this.remoteFailed.next(true);
            }
        });
    }
}
