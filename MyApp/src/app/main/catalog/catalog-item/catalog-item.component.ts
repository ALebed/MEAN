import { Component, OnInit, Input } from '@angular/core';

import { CatalogItem } from '../catalog-item.model';

@Component({
  selector: 'app-catalog-item',
  templateUrl: './catalog-item.component.html',
  styleUrls: ['./catalog-item.component.scss']
})
export class CatalogItemComponent implements OnInit {
  @Input() item: CatalogItem;

  constructor() { }

  ngOnInit() {
  }

}
