import { Component, OnInit } from '@angular/core';

import { CatalogItem } from './catalog-item.model';
import { CatalogService } from './catalog.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  catalogItem: CatalogItem;
  topSectionItems: Array<CatalogItem>;
  reviewItems: Array<CatalogItem>;
  bottomSectionItems: Array<CatalogItem>;

  constructor( public catalogService: CatalogService ) { }

  ngOnInit() {
    this.catalogItem = this.catalogService.getCatalogItem();
    this.topSectionItems = this.catalogService.getTopSectionItems();
    this.reviewItems = this.catalogService.getReviewItems();
    this.bottomSectionItems = this.catalogService.getBottomSectionItems();
  }

  onCatalogItemClick(catalogItem: CatalogItem): void {
    console.log(catalogItem);
  }
}
