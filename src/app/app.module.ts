/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './modules/core/core.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule }   from '@angular/forms';
import { AuthGuard } from './app-auth-guard.service';


import {
  NbChatModule,
  NbAlertModule,
  NbCheckboxModule,
  NbIconModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
  NbInputModule,
  NbButtonModule
} from '@nebular/theme';

import { NgxLoginComponent } from './modules/core/auth';
import {NbAuthJWTToken, NbAuthModule, NbPasswordAuthStrategy} from "@nebular/auth";
import {AppConfig} from "./configs/app.config";

export const NB_CORE_PROVIDERS = [
  ...NbAuthModule.forRoot({
    strategies: [
      NbPasswordAuthStrategy.setup({
        name: 'email',
        baseEndpoint: AppConfig.endPoint,
        login: {
          endpoint: AppConfig.loginPath,
          method: 'post',
          redirect: {
            success: '/dashboard',
            failure: null, // stay on the same page
          },
        },
        token: {
          class: NbAuthJWTToken,
          key: 'token',
        }
      }),
    ],
  }).providers,
];

@NgModule({
  declarations: [AppComponent, NgxLoginComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    SharedModule.forRoot(),
    NbCheckboxModule,
    NbIconModule,
    NbInputModule,
    NbButtonModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbAlertModule,
    FormsModule,
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    })
  ],
  exports: [],
   providers: [
    AuthGuard,...NB_CORE_PROVIDERS
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
