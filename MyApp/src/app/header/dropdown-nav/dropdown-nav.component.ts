import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-nav',
  templateUrl: './dropdown-nav.component.html',
  styleUrls: ['./dropdown-nav.component.scss']
})
export class DropdownNavComponent implements OnInit {
  isActive: boolean;

  constructor() {
  }

  ngOnInit() {
    this.isActive = false;
  }
  onClick(): void {
    this.isActive = !this.isActive;
  }
}
