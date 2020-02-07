import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {NbAuthComponent} from '@nebular/auth';


import { NgxLoginComponent } from './modules/core/auth';
import { AuthGuard } from './app-auth-guard.service';

const routes: Routes = [
  {
    path: 'examples',
    /*canActivate: [AuthGuard],*/
    loadChildren: () => import('app/ex_admin/ex_admin.module')
      .then(m => m.Ex_adminModule),
  },
  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: NgxLoginComponent,
      },
    /*{
        path: 'register',
        component: NbRegisterComponent,
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
      {
        path: 'request-password',
        component: NbRequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: NbResetPasswordComponent,
      },*/
    ],
  },
  {
    path: '',
    /*canActivate: [AuthGuard],*/
    loadChildren: () => import('app/pages/pages.module')
      .then(m => m.PagesModule),
  },
  { path: '**', redirectTo: 'auth' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
