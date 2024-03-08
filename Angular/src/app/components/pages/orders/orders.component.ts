import { Component, OnInit } from '@angular/core';
import { order } from 'src/app/Models/order';
import { OrdersService } from './orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
    orders:order[]=[];
    constructor(private orderService:OrdersService){}
    ngOnInit(): void {
        this.getOrders();
    }
    getOrders(){
        this.orderService.getOrdersForUser().subscribe({
            next:(orders:any)=>this.orders = orders,
            error:(error:any)=>console.log(error),
            complete:()=>console.log("Request completed")

        })
    }
    pageTitle = [
        {
            bgImage: 'assets/img/page-title-bg.jpg',
            title: 'Orders'
        }
    ]
}
