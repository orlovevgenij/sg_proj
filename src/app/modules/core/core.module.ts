import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxAuthModule} from './auth/auth.module';


@NgModule({
  imports: [CommonModule, NgxAuthModule],
  exports: [CommonModule, NgxAuthModule],
  declarations: [],
})



export class CoreModule {
}
