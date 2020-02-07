import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {NbAuthComponent} from '@nebular/auth';
import { AuthGuard } from './ex_admin-auth-guard.service';
import {NgxLoginComponent} from "./@theme/components/auth";

const routes: Routes = [
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
    loadChildren: () => import('app/ex_admin/pages/pages.module')
      .then(m => m.PagesModule),
  },
  { path: '**', redirectTo: 'auth' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ex_adminRoutingModule {
}
