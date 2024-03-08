import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { order } from 'src/app/Models/order';

@Component({
  selector: 'app-checkout-success',
  templateUrl: './checkout-success.component.html',
  styleUrls: ['./checkout-success.component.scss']
})
export class CheckoutSuccessComponent {
    order?:order
    constructor(private router:Router){
        const navigation = this.router.getCurrentNavigation();
        this.order = navigation?.extras?.state as order
    }
    successContent = [
        {
            img: 'assets/img/order success.jpg',
        }
    ]
}
