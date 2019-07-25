import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './header.component';
import { DropdownNavComponent } from './dropdown-nav/dropdown-nav.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    HeaderComponent,
    DropdownNavComponent,
    NavigationComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent,
  ],
  providers: [],
})
export class HeaderModule { }
