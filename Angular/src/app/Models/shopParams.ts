export class shopParams
{
    brandId=0;
    typeId=0;
    styleId=0;
    colorId = 0;
    sort="name";
    pageNumber=1;
    pageSize=8;
    search='';

    constructor(brandId = 0, typeId?: number, colorId?: number, styleId?: number, sort = 'name', pageNumber = 1, pageSize = 6, searchText = '') {
        this.brandId = brandId;
        this.typeId = typeId;
        this.colorId = colorId;
        this.styleId = styleId;
        this.sort = sort;
        this.pageNumber = pageNumber;
        this.pageSize = pageSize;
        this.search = this.search;
      }
    }

