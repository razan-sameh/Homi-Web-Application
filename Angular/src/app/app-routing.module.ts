import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { BlogGridComponent } from './components/pages/blog-grid/blog-grid.component';
import { BlogRightSidebarComponent } from './components/pages/blog-right-sidebar/blog-right-sidebar.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { ComingSoonPageComponent } from './components/pages/coming-soon-page/coming-soon-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { CustomerServicePageComponent } from './components/pages/customer-service-page/customer-service-page.component';
import { FaqPageComponent } from './components/pages/faq-page/faq-page.component';
import { GalleryPageComponent } from './components/pages/gallery-page/gallery-page.component';
import { HomeDemoOneComponent } from './components/pages/home-demo-one/home-demo-one.component';
import { HomeDemoThreeComponent } from './components/pages/home-demo-three/home-demo-three.component';
import { HomeDemoTwoComponent } from './components/pages/home-demo-two/home-demo-two.component';
import { MyAccountPageComponent } from './components/pages/my-account-page/my-account-page.component';
import { NotFoundPageComponent } from './components/pages/not-found-page/not-found-page.component';
import { OrderTrackingPageComponent } from './components/pages/order-tracking-page/order-tracking-page.component';
import { RoomsPageComponent } from './components/pages/rooms-page/rooms-page.component';
import { ShopFullWidthPageOneComponent } from './components/pages/shop-full-width-page-one/shop-full-width-page-one.component';
import { ShopFullWidthPageTwoComponent } from './components/pages/shop-full-width-page-two/shop-full-width-page-two.component';
import { ShopLeftSidebarPageOneComponent } from './components/pages/shop-left-sidebar-page-one/shop-left-sidebar-page-one.component';
import { ShopLeftSidebarPageTwoComponent } from './components/pages/shop-left-sidebar-page-two/shop-left-sidebar-page-two.component';
import { ShopRightSidebarPageOneComponent } from './components/pages/shop-right-sidebar-page-one/shop-right-sidebar-page-one.component';
import { ShopRightSidebarPageTwoComponent } from './components/pages/shop-right-sidebar-page-two/shop-right-sidebar-page-two.component';
import { SimpleProductPageComponent } from './components/pages/simple-product-page/simple-product-page.component';
import { SliderProductPageComponent } from './components/pages/slider-product-page/slider-product-page.component';
import { StickyProductPageComponent } from './components/pages/sticky-product-page/sticky-product-page.component';
import { WishlistPageComponent } from './components/pages/wishlist-page/wishlist-page.component';
import { ProductItemComponent } from './components/pages/product-item/product-item.component';
import { ServerErrorPageComponent } from './components/pages/server-error-page/server-error-page.component';
import { ErrorsComponent } from './components/pages/errors/errors.component';
import { LoginComponent } from './components/pages/my-account-page/login/login.component';
import { RegisterComponent } from './components/pages/my-account-page/register/register.component';
import { AuthGuard } from './core/Guards/auth.guard';
import { CheckoutSuccessComponent } from './components/pages/checkout-page/checkout-success/checkout-success.component';
import { OrdersComponent } from './components/pages/orders/orders.component';
import { OrderDetailedComponent } from './components/pages/orders/order-detailed/order-detailed.component';
import { ProductsComponent } from './components/AdminPages/products/products.component';
import { CategoriesComponent } from './components/AdminPages/categories/categories.component';
import { StylesComponent } from './components/AdminPages/styles/styles.component';
import { BrandsComponent } from './components/AdminPages/brands/brands.component';
import { ColorsComponent } from './components/AdminPages/colors/colors.component';
import { AddProductComponent } from './components/AdminPages/products/add-product/add-product.component';
import { ProductDetailsComponent } from './components/AdminPages/products/product-details/product-details.component';
import { UpdatedProductComponent } from './components/AdminPages/products/updated-product/updated-product.component';
import { UpdatedCategoryComponent } from './components/AdminPages/categories/updated-category/updated-category.component';
import { AddCategoryComponent } from './components/AdminPages/categories/add-category/add-category.component';
import { AddColorComponent } from './components/AdminPages/colors/add-color/add-color.component';
import { UpdatedColorComponent } from './components/AdminPages/colors/updated-color/updated-color.component';
import { UpdatedBrandComponent } from './components/AdminPages/brands/updated-brand/updated-brand.component';
import { AddBrandComponent } from './components/AdminPages/brands/add-brand/add-brand.component';
import { UpdatedStyleComponent } from './components/AdminPages/styles/updated-style/updated-style.component';
import { AddStyleComponent } from './components/AdminPages/styles/add-style/add-style.component';
import { ForgotPaswordComponent } from './components/pages/my-account-page/forgot-pasword/forgot-pasword.component';

const routes: Routes = [
    {path: 'index-1', component: HomeDemoOneComponent},
    {path: '', component: HomeDemoTwoComponent},
    {path: 'index-3', component: HomeDemoThreeComponent},
    {path: 'about', component: AboutPageComponent},
    {path: 'shop-full-width-1', component: ShopFullWidthPageOneComponent},
    {path: 'shop-full-width-2', component: ShopFullWidthPageTwoComponent},
    {path: 'shop-left-sidebar-1', component: ShopLeftSidebarPageOneComponent},
    {path: 'shop-left-sidebar-2', component: ShopLeftSidebarPageTwoComponent},
    {path: 'shop-right-sidebar-1', component: ShopRightSidebarPageOneComponent},
    {path: 'shop-right-sidebar-2', component: ShopRightSidebarPageTwoComponent},
    // {path: 'simple-product', component: SimpleProductPageComponent},
    {path: 'slider-product', component: SliderProductPageComponent},
    {path: 'sticky-product', component: StickyProductPageComponent},
    {path: 'rooms', component: RoomsPageComponent},
    {path: 'customer-service', component: CustomerServicePageComponent},
    {path: 'profile-authentication', component: MyAccountPageComponent},
    {path: 'order-tracking', component: OrderTrackingPageComponent},
    {path: 'gallery', component: GalleryPageComponent},
    {path: 'cart', component: CartPageComponent},
    {path: 'wishlist', component: WishlistPageComponent},
    {path: 'blog-grid', component: BlogGridComponent},
    {path: 'blog-right-sidebar', component: BlogRightSidebarComponent},
    {path: 'blog-details', component: BlogDetailsComponent},
    {path: 'faq', component: FaqPageComponent},
    {path: 'coming-soon', component: ComingSoonPageComponent},
    {path: 'contact', component: ContactPageComponent},

    // Here add new pages component
    // {path: 'errors', component: ErrorsComponent},
    {path: 'shop-left-sidebar-2/:id', component: SimpleProductPageComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'checkout',
    canActivate:[AuthGuard],
    component: CheckoutPageComponent},
    {path: 'orders', component: OrdersComponent},
    {path: 'orders/:id', component: OrderDetailedComponent,data:{breadcrumb:{alias:'orderDetailed'}}},
    {path: 'checkout/success', component: CheckoutSuccessComponent},
    {path: 'server-error', component: ServerErrorPageComponent},

    {path: 'Products', component: ProductsComponent},
    {path: 'addProduct', component: AddProductComponent},
    {path: 'Products/:id', component: ProductDetailsComponent},
    {path: 'updateProduct/:id', component: UpdatedProductComponent},
    {path: 'server-error', component: ServerErrorPageComponent},

    {path: 'Categories', component: CategoriesComponent},
    {path: 'updateCategory/:id', component: UpdatedCategoryComponent},
    {path: 'addCategory', component: AddCategoryComponent},

    {path: 'Styles', component: StylesComponent},
    {path: 'updateStyle/:id', component: UpdatedStyleComponent},
    {path: 'addStyle', component: AddStyleComponent},

    {path: 'Brands', component: BrandsComponent},
    {path: 'updateBrand/:id', component: UpdatedBrandComponent},
    {path: 'addBrand', component: AddBrandComponent},

    {path: 'Colors', component: ColorsComponent},
    {path: 'updateColor/:id', component: UpdatedColorComponent},
    {path: 'addColor', component: AddColorComponent},
    {path: 'forgot-password', component: ForgotPaswordComponent},




    // {path: 'shop-left-sidebar-2/:id', component: ProductItemComponent},
    {path: '**', component: NotFoundPageComponent} // This line will remain down from the whole pages component list
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {})],
    exports: [RouterModule]
        //ShopLeftSidebarPageTwoComponent]
})
export class AppRoutingModule { }
