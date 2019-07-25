import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CatalogComponent } from './catalog.component';
import { CatalogService } from './catalog.service';
import { CatalogItemComponent } from './catalog-item/catalog-item.component';

@NgModule({
  declarations: [
    CatalogComponent,
    CatalogItemComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CatalogComponent,
  ],
  providers: [
    CatalogService
  ],
})
export class CatalogModule { }
