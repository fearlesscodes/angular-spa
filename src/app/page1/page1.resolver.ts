import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class Page1Resolver1 implements Resolve<any> {
  scripts = [
    {name: 'hello-app', src: 'hellojs/hello-app.js', loaded: false}
  ];

  constructor() {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.loadScript('hello-app');
  }

  loadScript(name: string) {
    return new Promise((resolve, reject) => {

        // load script
        const script = document.createElement('script');

        script.type = 'text/javascript';
        script.src = 'hellojs/hello-app.js';
        // Others
        script.onload = () => {
          resolve({script: name, loaded: true, status: 'Loaded'});
        };

        script.onerror = (error: any) => resolve({script: name, loaded: false, status: 'Loaded'});
        // finally append the script tag in the DOM
        document.getElementsByTagName('head')[0].appendChild(script);

    });
  }
}
