import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  imports: [
    PagesRoutingModule,
    NbMenuModule,
    DashboardModule,
    MiscellaneousModule,
    SharedModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
