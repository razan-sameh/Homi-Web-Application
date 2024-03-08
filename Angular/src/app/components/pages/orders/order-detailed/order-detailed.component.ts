import { Component, OnInit } from '@angular/core';
import { order } from 'src/app/Models/order';
import { OrdersService } from '../orders.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-detailed',
  templateUrl: './order-detailed.component.html',
  styleUrls: ['./order-detailed.component.scss']
})
export class OrderDetailedComponent implements OnInit{
    order?:order;
    constructor(private orderService:OrdersService,private route:ActivatedRoute){}
    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        id&&this.orderService.getOrderDetails(+id).subscribe({
            next:(order:any)=>{
                this.order = order;

            },

            error:(error:any)=>console.log(error),
            complete:()=>console.log("Request completed")
        })
    }
    pageTitle = [
        {
            bgImage: 'assets/img/page-title-bg.jpg',
            title: 'Order'
        }
    ]
}
