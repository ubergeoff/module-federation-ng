import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { APP_ROUTES } from './app.routes';
import { AuthLibModule } from '@nx-mf-demo/shared/auth-lib';
import { Mfe1FeatureSearchModule } from '@nx-mf-demo/mfe1/feature-search';
import { NavigationErrorService } from './services/nativation.error';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SpinnerComponent } from './spinner/spinner.component';
import { SharedOneTimeModule } from '@daily/test';

@NgModule({
    imports: [
        BrowserModule,
        Mfe1FeatureSearchModule,
        RouterModule.forRoot(APP_ROUTES),
        AuthLibModule,
        SharedOneTimeModule,
        MatProgressSpinnerModule,
    ],
    declarations: [AppComponent, HomeComponent, SpinnerComponent],
    providers: [NavigationErrorService],
    bootstrap: [AppComponent],
})
export class AppModule {
    constructor(private navErrors: NavigationErrorService) {
        this.navErrors.init();
    }
}
