import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { ThemePalette } from '@angular/material/core';
import {
    NavigationCancel,
    NavigationEnd,
    NavigationError,
    NavigationStart,
    Router,
} from '@angular/router';

@Component({
    selector: 'nx-mf-demo-spinner',
    templateUrl: './spinner.component.html',
    styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnInit, OnDestroy {
    canStartSpinning = false;
    canShow = true;
    colour: ThemePalette = 'primary';
    colourSwitched: ThemePalette = 'accent';
    colourTimer = timer(1000, 1000);

    private subscribe = new Subscription();

    constructor(private router: Router) {}

    ngOnInit(): void {
        this.subscribe.add(
            this.router.events.subscribe((event) => {
                if (event instanceof NavigationStart) {
                    this.canShow = true;

                    if (!this.canStartSpinning) {
                        setTimeout(() => {
                            if (this.canShow) {
                                this.canStartSpinning = true;
                            }
                        }, 200);
                    }
                } else if (
                    event instanceof NavigationEnd ||
                    event instanceof NavigationCancel ||
                    event instanceof NavigationError
                ) {
                    this.canShow = false;
                    this.canStartSpinning = false;
                }
            })
        );

        this.subscribe.add(
            this.colourTimer.subscribe((val) => {
                //this.canStartSpinning = true;
                if (this.colour === 'primary') {
                    this.colour = 'accent';
                    this.colourSwitched = 'primary';
                } else {
                    this.colour = 'primary';
                    this.colourSwitched = 'accent';
                }
            })
        );
    }

    ngOnDestroy(): void {
        this.subscribe.unsubscribe();
    }
}
