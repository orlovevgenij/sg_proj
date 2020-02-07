import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbActionsModule,
  NbLayoutModule,
  NbMenuModule,
  NbSearchModule,
  NbSidebarModule,
  NbUserModule,
  NbContextMenuModule,
  NbButtonModule,
  NbSelectModule,
  NbIconModule,
  NbThemeModule,
  NbAlertModule,
  NbInputModule
} from '@nebular/theme';

import {
  FooterComponent,
  HeaderComponent,
  OneColumnLayoutComponent,
  ThreeColumnsLayoutComponent,
  TwoColumnsLayoutComponent
} from "./components";
import {NbEvaIconsModule} from "@nebular/eva-icons";
import {DEFAULT_THEME} from "./styles/theme.default";
import {UserData} from "./interfaces/users";
import {UsersService} from "./services/users.service";
import {MockDataModule} from "./services/mock-data.module";
import {NbRoleProvider, NbSecurityModule} from "@nebular/security";
import {of as observableOf} from "rxjs";

export class NbSimpleRoleProvider extends NbRoleProvider {
  getRole() {
    // here you could provide any role based on any auth flow
    return observableOf('guest');
  }
}

const NB_MODULES = [
  NbLayoutModule,
  NbMenuModule,
  NbUserModule,
  NbActionsModule,
  NbSearchModule,
  NbSidebarModule,
  NbContextMenuModule,
  NbButtonModule,
  NbSelectModule,
  NbIconModule,
  NbEvaIconsModule,
  NbAlertModule,
  NbInputModule
];

const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  OneColumnLayoutComponent,
  ThreeColumnsLayoutComponent,
  TwoColumnsLayoutComponent
];

const DATA_SERVICES = [
  { provide: UserData, useClass: UsersService}
];

@NgModule({
  imports: [CommonModule, ...NB_MODULES, NbSecurityModule],
  exports: [CommonModule, ...COMPONENTS, ...NB_MODULES],
  declarations: [...COMPONENTS],
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: SharedModule,
      providers: [
        ...NbThemeModule.forRoot(
          {
            name: 'default',
          },
          [ DEFAULT_THEME],
        ).providers,
        NbSecurityModule.forRoot({
          accessControl: {
            guest: {
              view: '*',
            },
            user: {
              parent: 'guest',
              create: '*',
              edit: '*',
              remove: '*',
            },
          },
        }).providers,

        {
          provide: NbRoleProvider, useClass: NbSimpleRoleProvider,
        },
        ...MockDataModule.forRoot().providers,
        ...DATA_SERVICES,
      ],
    };
  }
}
