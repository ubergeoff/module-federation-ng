import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { environment } from '../environments/environment';

export const APP_ROUTES: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
    },
    {
        path: 'remote-failed',
        component: NotFoundComponent,
        pathMatch: 'full',
    },
    /*{
        path: 'flights',
        loadChildren: () =>
            import('mfe1/Module')
                .then((m) => m.FlightsModule)
                .catch(() => {
                    throw Error('RemoteFailed:FlightsModule');
                }),
    },*/
    {
        path: 'flights',
        loadChildren: () =>
            loadRemoteModule({
                remoteName: environment.flightModuleRemoteName,
                exposedModule: './Module',
            })
                .then((m) => m.FlightsModule)
                .catch(() => {
                    throw Error('RemoteFailed:FlightsModule');
                }),
    },
];
