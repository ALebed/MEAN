export class CatalogItem {
  constructor(
    public id: number,
    public category: string,
    public imgUrl: string,
    public date: string,
    public views: number,
    public title: string,
    public layoutType?: string
  ) {
    this.id = id || null;
    this.layoutType = layoutType || null;
  }
}
