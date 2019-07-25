import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MainComponent } from './main.component';
import { AsideComponent } from '../aside/aside.component';
import { CatalogModule } from './catalog/catalog.module';

@NgModule({
  declarations: [
    MainComponent,
    AsideComponent,
  ],
  imports: [
    CommonModule,

    CatalogModule
  ],
  exports: [
    MainComponent,
  ],
  providers: [],
})
export class MainModule { }
