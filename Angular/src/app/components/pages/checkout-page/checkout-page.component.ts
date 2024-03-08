import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { CartService } from '../cart-page/cart.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../my-account-page/account.service';
import { orderToCreate } from 'src/app/Models/order';
import { Cart } from 'src/app/Models/cart';
import { Address } from 'src/app/Models/user';
import { CheckOutService } from './check-out.service';
import { NavigationExtras, Router } from '@angular/router';
import { state } from '@angular/animations';
import { Stripe, StripeCardCvcElement, StripeCardExpiryElement, StripeCardNumberElement, loadStripe } from '@stripe/stripe-js';
//need to uncomment
import { firstValueFrom } from 'rxjs';
import { AuthGuard } from 'src/app/core/Guards/auth.guard';
import { AuthenticationService } from './authentication.service';


@Component({
    selector: 'app-checkout-page',
    templateUrl: './checkout-page.component.html',
    styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {
    @ViewChild('CardNumber') CardNumberElement?:ElementRef;
    @ViewChild('cardExpiry') cardExpiryElement?:ElementRef;
    @ViewChild('cardcvc') cardcvcElement?:ElementRef;
    stripe:Stripe|null = null;
    cardNumber?:StripeCardNumberElement;
    cardExpiry?:StripeCardExpiryElement;
    cardCvc?:StripeCardCvcElement;
    cardErrors:any;
    authService?:AuthenticationService;


    constructor(public cartService:CartService,private Fb:FormBuilder,
        private accountService:AccountService,public checkOutService:CheckOutService,private router:Router) { }

    checkoutForm=this.Fb.group({
        AddressForm:this.Fb.group({
            firstName :['',Validators.required],
            lastName :['',Validators.required],
            street :['',Validators.required],
            city  :['',Validators.required],
            state :['',Validators.required],
            zipcode  :['',Validators.required]
        }),
        PaymentForm:this.Fb.group({
            nameOnCard :['',Validators.required]
        })
    })
    ngOnInit(): void {
        //need to uncomment
        // this.getAddressFormValues();
        this.authService = new AuthenticationService();
        loadStripe('pk_test_51NBU51AEJM34gxccqBMJmE51lA0EsYFv5H2HPiAxwrf4Aw8dCYCvjL0pRrD77kV8zw4u6DKJcV8HYGvltPYXv6bf00Rf8zVyIn').then(stripe =>{
            this.stripe = stripe;
            const elements = stripe?.elements();
            if (elements) {
                this.cardNumber = elements.create('cardNumber');
                this.cardNumber.mount(this.CardNumberElement?.nativeElement);
                this.cardNumber.on('change',event =>{
                    if (event.error) {
                        this.cardErrors = event.error.message
                    }
                    else this.cardErrors = null;
                })

                this.cardExpiry = elements.create('cardExpiry');
                this.cardExpiry.mount(this.cardExpiryElement?.nativeElement);
                this.cardExpiry.on('change',event =>{
                    if (event.error) {
                        this.cardErrors = event.error.message
                    }
                    else this.cardErrors = null;
                })

                this.cardCvc = elements.create('cardCvc');
                this.cardCvc.mount(this.cardcvcElement?.nativeElement);
                this.cardCvc.on('change',event =>{
                    if (event.error) {
                        this.cardErrors = event.error.message
                    }
                    else this.cardErrors = null;
                })
            }
        })
    }
    getAddressFormValues(){
        this.accountService.getUserAddress().subscribe({
            next:address=>{
                address && this.checkoutForm.get('AddressForm')?.patchValue(address);
            }
        })
    }
    private getOrderToCreate(cart:Cart):orderToCreate
    {
        const deliveryMethodId = 0;
        const shippToAddress=this.checkoutForm?.get('AddressForm')?.value as Address; //casting

        if(!shippToAddress) throw new Error('Problem with Cart');

        return {
            cartId:cart.id,
            deliveryMethodId:deliveryMethodId,
            shipToAddress:shippToAddress
        }

    }

    private async createOrder(cart:Cart | null){
        if (!cart) {
            throw new Error('cart is null')
        }
        const orderToCreate = this.getOrderToCreate(cart);
        //need to uncomment
        if (this.authService && this.authService.isAuthenticated()) {
           // Redirect the user to the login page or display an error message
            return ;
        }

        // The user is authenticated, so create the order
        return firstValueFrom(this.checkOutService.createOrder(orderToCreate))
    }
    async confirmPaymentWithStripe(cart: Cart) {
        if (!cart) {
            throw new Error('cart is null')
        }
        const result =  this.stripe?.confirmCardPayment(cart.clientSecret!,{
            payment_method:{
                card:this.cardNumber!,
                billing_details:{
                    name:this.checkoutForm?.get('PaymentForm').get('nameOnCard')?.value
                }
            }
        });
        if (!result) {
            throw new Error('Error attempting payment with stripe')
        }
        else return result
    }
    async submitOrder()
        {
            const cart=this.cartService.getCurrentCartValue();
            if (!cart) {
                throw new Error('Cannot get the cart')
            }
            // try {
            //     const createdOrder = await this.createOrder(cart);
            //     const paymentResult = await this.confirmPaymentWithStripe(cart)
            //     if (paymentResult.paymentIntent) {
            //         this.cartService.deleteCart(cart);
                    //need to uncomment
                    // const navigationExtras:NavigationExtras = {state:createdOrder}
                    this.cartService.deleteCart(cart);
                    this.router.navigate(['/checkout/success']);
            //     }
            //     else console.log(paymentResult.error.message);
            // } catch (error:any) {
            //     console.log(error.message);
            // }
        }


    pageTitle = [
        {
            bgImage: 'assets/img/categories/pexels-taryn-elliott-4112237.jpg',
            title: 'Checkout'
        }
    ]

    // Country Select
    singleSelect: any = [];
    multiSelect: any = [];
    stringArray: any = [];
    objectsArray: any = [];
    resetOption: any;
    config = {
        displayKey: "name",
        search: true
    };
    options = [
        {
            name: "United Arab Emirates",
        },
        {
            name: "China",
        },
        {
            name: "United Kingdom",
        },
        {
            name: "Germany",
        },
        {
            name: "France",
        },
        {
            name: "Japan",
        }
    ];
    searchChange($event) {
        console.log($event);
    }
    reset() {
        this.resetOption = [];
    }

}
