import {InjectionToken} from '@angular/core';

export let APP_CONFIG = new InjectionToken('app.config');

export const AppConfig: any = {
  endPoint: 'http://localhost:8000',
  loginPath: '/api/login'

};
