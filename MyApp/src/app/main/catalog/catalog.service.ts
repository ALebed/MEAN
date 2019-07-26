import { Injectable } from '@angular/core';
import { CatalogItem } from './catalog-item.model';
import {last} from "rxjs/internal/operators";

@Injectable()
export class CatalogService {

  getCatalogItem(): CatalogItem{
    const date = new Date();
    return new CatalogItem(1, 'Books', '', date.toLocaleDateString(), 200, 'Bla-bla-bla')
  }

  getTopSectionItems(): Array<CatalogItem> {
    const date = new Date();
    return [
      new CatalogItem(1, 'Books', '', date.toLocaleDateString(), 200, 'Lorem', 'wide-type1'),
      new CatalogItem(2, 'Articles', '', date.toLocaleDateString(), 100, 'Ipsum'),
      new CatalogItem(3, 'Books', '', date.toLocaleDateString(), 300, 'Dolor'),
      new CatalogItem(4, 'News', '', date.toLocaleDateString(), 400, 'Sit'),
      new CatalogItem(4, 'News', '', date.toLocaleDateString(), 400, 'Sit', 'wide-type2'),
    ]
  }

  getReviewItems(): Array<CatalogItem> {
    const date = new Date();
    return [
      new CatalogItem(6, 'Review', '', date.toLocaleDateString(), 700, 'Lorem'),
      new CatalogItem(7, 'Review', '', date.toLocaleDateString(), 700, 'Ipsum'),
      new CatalogItem(8, 'Review', '', date.toLocaleDateString(), 700, 'Dolor'),
    ]
  }

  getBottomSectionItems(): Array<CatalogItem> {
    const date = new Date();
    return [
      new CatalogItem(5, 'Books', '', date.toLocaleDateString(), 700, 'Amet', 'wide-type1'),
      new CatalogItem(6, 'Books', '', date.toLocaleDateString(), 700, 'Lorem'),
      new CatalogItem(7, 'Books', '', date.toLocaleDateString(), 700, 'Ipsum'),
      new CatalogItem(8, 'Books', '', date.toLocaleDateString(), 700, 'Dolor'),
    ]
  }
}
