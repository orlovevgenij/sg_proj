/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { Ex_adminComponent } from './ex_admin.component';
import { Ex_adminRoutingModule } from './ex_admin-routing.module';
import { FormsModule }   from '@angular/forms';
import { AuthGuard } from './ex_admin-auth-guard.service';
import {NgxLoginComponent} from "./@theme/components/auth";
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
  NbButtonModule,
} from '@nebular/theme';

@NgModule({
  declarations: [Ex_adminComponent, NgxLoginComponent],
  imports: [
    HttpClientModule,
    Ex_adminRoutingModule,

    ThemeModule.forRoot(),
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
    }),
    CoreModule.forRoot(),
  ],
   providers: [
    AuthGuard
  ],
  bootstrap: [Ex_adminComponent],
})
export class Ex_adminModule {
}
