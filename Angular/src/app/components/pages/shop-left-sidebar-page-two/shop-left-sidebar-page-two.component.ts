import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Pagination } from 'src/app/Models/Pagging';
import { product } from 'src/app/Models/Product';
import { ShopService } from './shop.service';
import { Brand } from 'src/app/Models/brands';
import { type } from 'src/app/Models/types';
import { shopParams } from 'src/app/Models/shopParams';
import { Color } from 'src/app/Models/Colors';
import { Style } from 'src/app/Models/Styles';
import { CartService } from '../cart-page/cart.service';
import { ActivatedRoute } from '@angular/router';
import { WishListService } from '../wishlist-page/wish-list.service';

@Component({
    selector: 'app-shop-left-sidebar-page-two',
    templateUrl: './shop-left-sidebar-page-two.component.html',
    styleUrls: ['./shop-left-sidebar-page-two.component.scss','./Shop.css']
})
export class ShopLeftSidebarPageTwoComponent implements OnInit {
    @ViewChild('search')searchTerms?:ElementRef;
    products: product[]=[];
    brands: Brand[] = [];
    types: type[] = [];
    colors: Color[] = [];
    styles: Style[] = [];
    shopParams= new shopParams();
    totalCount=0;
    sortSelected='name';

   // For Pagination
    // shopLeftSidebar: number = 1;

    //new
    brandIdSelected = 0;
    typeIdSelected: number | undefined;
    colorIdSelected: number | undefined;
    styleIdSelected: number | undefined;
    pageNumber = 1;
    pageSize = 6;
    pagination: Pagination<product[]>;
    searchText: string;
    activeFilters: { name: string, value: string }[] = [];
    shopParameters:shopParams;

    sortOptions = [
        {name:"Alphabetical",value:'name'},
        {name:"Price : Low to high",value:'PriceAsc'},
        {name:"Price : High to low",value:'PriceDesc'}
    ]

    constructor(private shopService:ShopService,private cartService : CartService ,private activatedRoute: ActivatedRoute) {
       // this.sortSelected = 'name';
    }

    ngOnInit() : void{
        //new
        this.activatedRoute.queryParams.subscribe(params => {
            if (params.brandId) {
            this.brandIdSelected = +params.brandId;
            }
            this.typeIdSelected = params.typeId ? +params.typeId : undefined;
            this.colorIdSelected = params.colorId ? +params.colorId : undefined;
            this.styleIdSelected = params.styleId ? +params.styleId : undefined;
            this.pageNumber = params.pageNumber ? +params.pageNumber : 1;
            this.pageSize = params.pageSize ? +params.pageSize : 6;
            this.searchText = params.search ? params.search : '';
            this.getProducts();
        });
        this.getBrands();
        this.getTypes();
        this.getStyles();
        this.getColors();

    }

    getProducts()
    {

        this.shopParameters = new shopParams(this.brandIdSelected, this.typeIdSelected, this.colorIdSelected, this.styleIdSelected, this.sortSelected, this.pageNumber, this.pageSize, this.searchText);        this.activeFilters = [];
        if (this.shopParameters.brandId > 0) {
            this.activeFilters.push({ name: 'Brand', value: this.brands.find(b => b.id === this.shopParameters.brandId)?.name || '' });
        }
        if (this.shopParameters.typeId) {
            this.activeFilters.push({ name: 'Type', value: this.types.find(t => t.id === this.shopParameters.typeId)?.name || '' });
        }
        if (this.shopParameters.colorId) {
            this.activeFilters.push({ name: 'Color', value: this.colors. find(c => c.id === this.shopParameters.colorId)?.name || '' });
        }
        if (this.shopParameters.styleId) {
            this.activeFilters.push({ name: 'Style', value: this.styles.find(s => s.id === this.shopParameters.styleId)?.name || '' });
        }

////
        this.shopService.getProducts(this.shopParams,this.activeFilters).subscribe({
            next:(response:any)=>{
                this.products = response.data,
                this.shopParams.pageNumber = response.pageIndex,
                this.shopParams.pageSize = response.pageSize,
                this.totalCount = response.count
                console.log("count"+this.totalCount);

            },
            error:(error:any)=>console.log(error),
            complete:()=>console.log("Request completed")
        });
    }


    getBrands()
    {
        this.shopService.getBrands().subscribe({
            next:(response:any)=>this.brands = [{id:0,name:'All'},...response],
            error:(error:any)=>console.log(error),
            complete:()=>console.log("Request completed")
        });
    }

    getTypes()
    {
        this.shopService.getTypes().subscribe({
            next:(response:any)=>this.types = [{id:0,name:'All'},...response],
            error:(error:any)=>console.log(error),
            complete:()=>console.log("Request completed")
        });
    }
    getStyles()
    {
        this.shopService.getStyles().subscribe({
            next:(response:any)=>this.styles = [{id:0,name:'All'},...response],
            error:(error:any)=>console.log(error),
            complete:()=>console.log("Request completed")
        });
    }
    getColors()
    {
        this.shopService.getColors().subscribe({
            next:(response:any)=>this.colors = [{id:0,name:'All'},...response],
            error:(error:any)=>console.log(error),
            complete:()=>console.log("Request completed")
        });
    }
    onBrandSelected(brandId: number)
    {
        this.shopParams.brandId=brandId;
        this.shopParams.pageNumber=1;
        this.brandIdSelected=brandId;
        this.getProducts(); //to refresh data
    }

    onTypeSelected(typeId: number)
    {
        this.shopParams.typeId=typeId;
        this.shopParams.pageNumber=1;
        this.typeIdSelected = typeId;
        this.getProducts(); //to refresh data
    }
    onStyleSelected(styleId: number)
    {
        this.shopParams.styleId=styleId;
        this.shopParams.pageNumber=1;
        this.styleIdSelected = styleId;
        this.getProducts(); //to refresh data
    }
    onColorSelected(colorId: number)
    {
        this.shopParams.colorId=colorId;
        this.shopParams.pageNumber=1;
        this.colorIdSelected = colorId;
        this.getProducts(); //to refresh data
    }
    onSortSelected(event : any)
    {
        // this.shopParams.sort=event.target.value;
        // this.getProducts();

        this.pageNumber = event.page;
        this.pageSize = event.itemsPerPage;
        this.getProducts();

    }

    onPageChanged(event : any)
    {
        if(this.shopParams.pageNumber!== event)
        {
            this.shopParams.pageNumber = event;

            console.log(this.shopParams.pageNumber);

            this.getProducts();
        }

    }

    onSearch()
    {
        this.shopParams.search=this.searchTerms?.nativeElement.value;
        this.shopParams.pageNumber=1;
        this.getProducts();
    }

    onReset()
    {
        if(this.searchTerms)this.searchTerms.nativeElement.value="";
        this.shopParams=new shopParams();
        this.getProducts();
    }

    onFilterRemoved(filterName: string) {
        switch (filterName) {
        case 'Brand':
        this.brandIdSelected = 0;
        break;
        case 'Type':
        this.typeIdSelected = undefined;
        break;
        case 'Color':
        this.colorIdSelected = undefined; break;
        case 'Style':
        this.styleIdSelected = undefined;
        break;
        default:
        break;
        }
        this.pageNumber = 1;
        this.getProducts();}

        removeFilter(filter: { name: string, value: string }) {
            const index = this.activeFilters.indexOf(filter);
            if (index !== -1) {
            this.activeFilters.splice(index, 1);
            this.getProducts();
            }
            }



    pageTitle = [
        {
            bgImage: 'assets/img/categories/pexels-taryn-elliott-4112558.jpg',
            title: 'Shopping'
        }
    ]
    // singleProductsItem = [
    //     {
    //         mainImg: 'assets/img/products/products4.jpg',
    //         title: 'Ergonomic Desk Sofa',
    //         newPrice: '$150.00',
    //         oldPrice: '',
    //         sale: '',
    //         outOfStock: '',
    //         detailsLink: 'simple-product'
    //     },
    //     {
    //         mainImg: 'assets/img/products/products5.jpg',
    //         title: 'Office Desk Sofa',
    //         newPrice: '$199.00',
    //         oldPrice: '$210.00',
    //         sale: 'Sale!',
    //         outOfStock: '',
    //         detailsLink: 'simple-product'
    //     },
    //     {
    //         mainImg: 'assets/img/products/products6.jpg',
    //         title: 'Swivel Sofa',
    //         newPrice: '$223.99',
    //         oldPrice: '',
    //         sale: '',
    //         outOfStock: '',
    //         detailsLink: 'simple-product'
    //     },
    //     {
    //         mainImg: 'assets/img/products/products7.jpg',
    //         title: 'Home Alisa Sofa',
    //         newPrice: '$199.00',
    //         oldPrice: '$210.00',
    //         sale: '',
    //         outOfStock: 'Out of Stock',
    //         detailsLink: 'simple-product'
    //     },
    //     {
    //         mainImg: 'assets/img/products/products8.jpg',
    //         title: 'Grey Harrington Sofa',
    //         newPrice: '$199.00',
    //         oldPrice: '$210.00',
    //         sale: 'Sale!',
    //         outOfStock: '',
    //         detailsLink: 'simple-product'
    //     },
    //     {
    //         mainImg: 'assets/img/products/products9.jpg',
    //         title: 'Home Alisa Sofa',
    //         newPrice: '$223.99',
    //         oldPrice: '',
    //         sale: '',
    //         outOfStock: '',
    //         detailsLink: 'simple-product'
    //     },
    //     {
    //         mainImg: 'assets/img/products/products10.jpg',
    //         title: 'Wood Patio Chair',
    //         newPrice: '$226.00',
    //         oldPrice: '',
    //         sale: '',
    //         outOfStock: '',
    //         detailsLink: 'simple-product'
    //     },
    //     {
    //         mainImg: 'assets/img/products/products11.jpg',
    //         title: 'Brown Vinyl Padded',
    //         newPrice: '$107.99',
    //         oldPrice: '$140.99',
    //         sale: '',
    //         outOfStock: '',
    //         detailsLink: 'simple-product'
    //     },
    //     {
    //         mainImg: 'assets/img/products/products12.jpg',
    //         title: 'Antique Walnut',
    //         newPrice: '$98.99',
    //         oldPrice: '',
    //         sale: '',
    //         outOfStock: '',
    //         detailsLink: 'simple-product'
    //     },
    //     {
    //         mainImg: 'assets/img/products/products6.jpg',
    //         title: 'Swivel Sofa',
    //         newPrice: '$223.99',
    //         oldPrice: '',
    //         sale: '',
    //         outOfStock: '',
    //         detailsLink: 'simple-product'
    //     },
    //     {
    //         mainImg: 'assets/img/products/products7.jpg',
    //         title: 'Home Alisa Sofa',
    //         newPrice: '$199.00',
    //         oldPrice: '$210.00',
    //         sale: '',
    //         outOfStock: 'Out of Stock',
    //         detailsLink: 'simple-product'
    //     },
    //     {
    //         mainImg: 'assets/img/products/products8.jpg',
    //         title: 'Grey Harrington Sofa',
    //         newPrice: '$199.00',
    //         oldPrice: '$210.00',
    //         sale: 'Sale!',
    //         outOfStock: '',
    //         detailsLink: 'simple-product'
    //     }
    // ]



    // Category Select
    singleSelect: any = [];
    multiSelect: any = [];
    stringArray: any = [];
    objectsArray: any = [];
    resetOption: any;
    config = {
        displayKey: "name",
        search: true
    };
    // options = [
    //     {
    //         name: "Default",
    //     },
    //     {
    //         name: "Popularity",
    //     },
    //     {
    //         name: "Latest",
    //     },
    //     {
    //         name: "Price: low to high",
    //     },
    //     {
    //         name: "Price: high to low",
    //     }
    // ];
    // searchChange($event) {
    //     console.log($event);
    // }
    reset() {
        this.resetOption = [];
    }

}
