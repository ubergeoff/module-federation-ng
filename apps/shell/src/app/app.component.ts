/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { NavigationErrorService } from './services/nativation.error';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'shell';

    remoteLink = '/flights/flights-search';

    constructor(private navError: NavigationErrorService) {
        //output: 0
    }

    ngOnInit(): void {
        this.navError.failedRemote$.subscribe((t) => {
            this.remoteLink = t ? '/remote-failed' : '/flights/flights-search';
        });
    }

    // @ViewChild('vc', { read: ViewContainerRef, static: true })
    // viewContainer: ViewContainerRef;

    // constructor(
    //   @Inject(Injector) private injector,
    //   @Inject(ComponentFactoryResolver) private cfr) { }

    // home(): void {
    //   this.viewContainer.clear();
    // }

    load() {
        // const comp = await import('mfe1/Component').then(m => {
        //   return m.AppComponent;
        // });
        // const factory = this.cfr.resolveComponentFactory(comp);
        // this.viewContainer.createComponent(factory, null, this.injector);
    }
}
