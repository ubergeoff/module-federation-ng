import { loadRemoteEntry } from '@angular-architects/module-federation';
import { environment } from './environments/environment';

const flightModule = loadRemoteEntry(
    environment.flightModuleRemoteUrl + '/remoteEntry.js',
    environment.flightModuleRemoteName
);

const allRemotes = [flightModule];

Promise.all(allRemotes)
    .catch((err) => console.error('Error loading remote entries', err))
    .then(() => import('./bootstrap'))
    .catch((err) => console.error(err));
